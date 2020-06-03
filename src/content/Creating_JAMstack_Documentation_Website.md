---
title: 'Creating JAMstack website with dynamic generated content from remote markdown files'
date: 2020-05-25
description: 'In this article, we will guide you how you can take a use of open source ockam-webiste repository, and create Gatsby JAMstack website with Terraform, Azure Cloud and Azure Pipelines'
metaTitle: 'Creating JAMstack website with dynamic generated content from remote markdown files'
metaDescription: 'In this article, we will guide you how you can take a use of open source ockam-webiste repository, and create Gatsby JAMstack website with Terraform, Azure Cloud and Azure Pipelines'
author: 'Piotr Sobieszczański & Łukasz Miedziński'
authorAvatar: ./assets/default_avatar.png
---

## What is all about?

When you navigate to the official website of [JAMstack](https://jamstack.org/), first what you’ll see is a description of its technology:

> _Fast and secure sites and apps delivered by pre-rendering files and serving them directly from a CDN, removing the requirement to manage or run web servers._

What does it mean? Well, in a nutshell, you just need to create by hand or compile code (Jekyll, Hugo or Gatsby to name a [few](https://www.staticgen.com/)) to HTML, CSS and JavaScript, then deploy it to your [object storage](https://azure.microsoft.com/en-us/services/storage/blobs/) and purge your [CDN](https://azure.microsoft.com/en-us/services/cdn/). The advantage is obvious. It’s faster, cheaper and easily scalable.

This approach come true in many cases, but one we want to share with you is how we use it to generate [Ockam](https://ockam.io) website within documentation from related remote repositories.

The important think that is worth to mention, is that JAMstack approach, helps us to simplify process of generating documentation from `Markdown` files, from related git repositories. In general, during pipeline process, we just import some listed github repos with md files content, extract them to project, and run build to generate static content. We will cover the details later on.

In this article, I’ll show you how to:

1.  Create JAMstack infrastructure with [Terraform](https://www.terraform.io/) and Azure cloud similarly how we did it for [Ockam](https://github.com/ockam-network/website/tree/master/terraform).
1.  Cover deployment process via continuous delivery pipeline with pipelines for [Azure Pipelines](https://azure.microsoft.com/services/devops/pipelines/).
1.  We'll show you how to develop and customize frontend for [Ockam_webiste](https://github.com/ockam-network/website) to fit your needs.
1.  Generate documentation page in your website, directly from Markdown files from your remote repositories

In the second part of article, we will cover frontend part, how to configure project to fit your needs.

After reading this tutorial, you should be able to fork [Ockam website](https://github.com/ockam-network/website) and run your own instance of webpage with documentation for your project.

## Requirements

You need to have Azure account, you can create one [here](https://azure.microsoft.com/free/). Additionally `terraform` and `az` command line tools need to be present, if you don't have them please follow [Terraform](https://learn.hashicorp.com/terraform/getting-started/install.html) and [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli?view=azure-cli-latest) installation instructions.

## Infrastructure in Azure cloud

Infrastructure for JAMstack site is fairly simple, in our case it consists of [Azure Storage](https://docs.microsoft.com/en-us/azure/storage/common/storage-account-overview), [CDN](https://docs.microsoft.com/en-us/azure/cdn/cdn-overview) and [DNS zone](https://docs.microsoft.com/en-us/azure/dns/dns-overview).

### Keep Terraform state remotely

Terraform works with so called state which kept information (state) of your infrastructure. If you do nothing state is managed on your local machine. This is good for local development or test purposes but if you want to have production environment then it's always good to keep it in some save place, just in case your hard drive fail or you want to work with your colleagues at work. So let's start here and set up Terraform remote state.

Before we use Azure CLI we need to log into it.

```bash
az login
```

This will redirect you to azure login page after which you will be able to run commands on your account.

First we'll create [blob storage](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction) for state. To do so you need to have [`resource group`](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/overview#terminology), in essence is a container that holds related resources for an Azure solution. The below command will create resource group `resource_group_name`. Location is obviously the region where you want to put your resource.

```bash
az group create --name resource_group_name --location westeurope
```

When we have our group then we can start creating our resources. So let's create storage for Terraform state. We'll use resource group we have been created in previous step, name of the storage (which can contain only lowercase letters and numbers) and some custom tags. Those can be anything you want or nothing if you don't want them at all. If you interested the rest of the parameters are described [here](https://docs.microsoft.com/en-us/cli/azure/storage/account?view=azure-cli-latest#az-storage-account-create).

```bash
az storage account create
  --resource-group resource_group_name
  --name uniqueaccountname
  --sku Standard_LRS
  --encryption-services blob
  --kind StorageV2
  --tags project=website type=terraform-state env=production;
```

After this command you should have storage account in the cloud, but this is not the end. You need to create "space" inside your storage account to keep your state files, this is called _container_. To do it, first we need fetch account key, this is kind of token that will authorize us to create container inside storage account. Get storage account key:

```bash
ACCOUNT_KEY=$(az storage account keys list --resource-group resource_group_name --account-name uniqueaccountname --query [0].value -o tsv)
```

Finally create container

```bash
az storage container create --name containername --account-name uniqueaccountname --account-key $ACCOUNT_KEY
```

Now we can set up terraform to work with Azure. Create directory where you want to keep your project and init repository inside it. After all, Terraform is a solution for [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code) so probably you want to keep in some repository to track changes.

Our first terraform file will be `main.tf` where we'll put terraform basic information

```terraform
provider "azurerm" {
  # whilst the `version` attribute is optional, we recommend pinning to a given version of the Provider
  version = "=2.8.0"
  features {}
}

terraform {
  backend "azurerm" {
    resource_group_name   = "resource_group_name"
    storage_account_name  = "uniqueaccountname"
    container_name        = "containername"
    key                   = "terraform.tfstateenv"
  }
}

data "azurerm_resource_group" "main" {
  name     = "resource_group_name"
}

```

A `provider` is responsible for understanding API interactions and exposing resources. `terraform {}` section is responsible for configuration of Terraform backend. The last element in this file is a Azure resource group resource.

In tags section you can see Terraform variable, convention tells you to keep them in `variables.tf` file let's create it and put following code there

```terraform
variable "project" {
  type    = string
  default = "uniqueprojectname"
}
```

We will add more variables later on.

Now, when you run `terraform plan` from within the directory you should see output saying that everything is up to date because `resource_group_name` resource group has been already created manually from the CLI.

### Storage for website static files

Let's create actual storage for our website files. We will upload all the compile assets there. You can create additional `storages.tf` file, or add this under `main.tf`

```terraform
resource "azurerm_storage_account" "static_files" {
  name                     = "${var.project}2staticfile"
  resource_group_name      = data.azurerm_resource_group.main.name
  location                 = data.azurerm_resource_group.main.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  account_kind             = "StorageV2"

  tags = {
    project = var.project
  }
}

module "staticweb" {
  source               = "StefanSchoof/static-website/azurerm"
  storage_account_name = azurerm_storage_account.static_files.name
}

data "azurerm_storage_account" "static_files" {
  name                = azurerm_storage_account.static_files.name
  resource_group_name = data.azurerm_resource_group.main.name

  depends_on = [module.staticweb]
}

output "static_web_url" {
  value = azurerm_storage_account.static_files.primary_web_endpoint
}

```

Here we can see we create storage account for static files but also we turning on website ability on the storage so it can serve files same as web server. To do it we need to use Terraform `module` which will enable this feature. Unfortunately this should be available via the resource `azurerm_storage_account` itself but this is something is still missing. Nevertheless the module [`StefanSchoof/static-website/azurerm`](https://github.com/StefanSchoof/terraform-azurerm-static-website/blob/master/main.tf#L10) execute `az` command to do it and we need to provide only storage account name.

The `data` part is basically for pulling additional information from existing resource and we need this to print out `primary_web_endpoint`.

Next, apply your changes into azure via terraform:

```bash
$ terraform init
$ terraform plan --out=plan.tfplan
$ terraform apply "plan.tfplan"
```

### Content Delivery Network

The last part of the infrastructure is a CDN. Azure have four different flavors of CDNs to choose:

- Azure CDN Standard from Microsoft
- Azure CDN Standard from Akamai
- Azure CDN Standard from Verizon
- Azure CDN Premium from Verizon

In our case we will pick _Azure CDN Premium from Verizon_, because it provide powerful [_Rules Engine_](https://docs.microsoft.com/en-us/azure/cdn/cdn-verizon-premium-rules-engine-reference), which will help with redirections and caching actions mentioned above. Of course you are more then welcome to research for you own and pick different one that meet your requirements. Basically if you are sure you don't need any redirections then probably `Standard from Microsoft` will be enough for you.

Now let's create our third file `cdn.tf`. It'll describe our CDN.

```terraform
resource "azurerm_cdn_profile" "cdn_verizon_premium" {
  name                = "${var.project}-verizon-premium"
  location            = var.location
  resource_group_name = azurerm_resource_group.main.name
  sku                 = "Premium_Verizon"

  tags = {
    project = var.project
  }

  depends_on = [data.azurerm_storage_account.static_files]
}

resource "azurerm_cdn_endpoint" "jamstack_website" {
  name                = var.cdn_cache_endpoint
  profile_name        = azurerm_cdn_profile.cdn_verizon_premium.name
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  origin_host_header  = azurerm_storage_account.static_files.primary_web_host

  origin {
    name      = var.origin_name
    host_name = azurerm_storage_account.static_files.primary_web_host
  }

  depends_on = [azurerm_cdn_profile.cdn_verizon_premium]
}
```

Also add new variables to our `variables.tf` file so it looks like similar to this.

```terraform

variable "location" {
  type    = string
  default = "westeurope"
}

variable "cdn_cache_endpoint" {
  type    = string
  default = "cdn-my-website"
}

variable "origin_name" {
  type    = string
  default = "my-website-origin"
}
```

The `azurerm_cdn_profile.cdn_verizon_premium` resource will create CDN instance for us and it depends on our storage account with static files. Inside CDN itself we need to have at least one endpoint and in our case this is `azurerm_cdn_endpoint.jamstack_website` resource. The most important parameters in it are `origin_host_header` and `origin.host_name` which is essentially our static files `primary_web_host` which is nothing more then storage account domain and its name should be `uniqueaccountname.z6.web.core.windows.net`.

## Continuous Deployment

Last piece of our infrastructure will be Azure DevOps pipeline. But before we start with pipeline we need to create definition of it and add to our repository. Below you can find an example of `azure-pipeline.yaml`.

### Pipeline

```yaml
name: My-website-$(Date:yyyyMMdd).$(Rev:r)

trigger:
  branches:
    include:
      - master

pr: none

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: NodeTool@0
    displayName: 'Install Node.js'
    inputs:
      versionSpec: '12.x'

  - bash: |
      set -ex
      ./scripts/get-depended-repos.sh
    displayName: 'Checkout depended repositories'

  - bash: |
      set -ex
      npm ci
      npm run build
    displayName: 'Install & build site'

  - bash: |
      set -ex
      rm -f ./public/*.map
      rm -f ./public/webpack.stats.json
    displayName: 'Remove vulnerabilities'

  - bash: |
      set -ex
      az storage blob delete-batch \
        --account-name $(ACCOUNT_NAME) \
        --account-key $(ACCOUNT_KEY_MASTER) \
        --source $(CONTAINER)
      az storage blob upload-batch \
        --account-name $(ACCOUNT_NAME) \
        --account-key $(ACCOUNT_KEY_MASTER) \
        --source ./public/  \
        --destination "https://${ACCOUNT_NAME}.blob.core.windows.net/$(CONTAINER)"
    displayName: 'Deploy to storage'

  - bash: |
      set -ex

      # Login as service principal
      az login --service-principal --allow-no-subscriptions -u $(SP_USERNAME) -p $(SP_PASSWORD) --tenant $(TENANT)

      # Purge CDN
      az cdn endpoint purge \
        --resource-group resource_group_name \
        --name $(CDN_ENDPOINT) \
        --profile-name $(CDN_PROFILE) \
        --content-paths '/*'
    displayName: 'Purge CDN'
```

This will initialize only when we push to master branch because we want only publish when our code is ready for prime time. So in this deployment there are several steps involved:

- First we need to install node in latest version 12.x.
- Second, we fetch and extract all depended repos from `dependencies_repos.csv` file ( described [here]())
- Then dependencies and compile source code to static files.
- After we want to protect from vulnerabilities by removing all `.map` files and webpack statistics.
- Moving onto the next step we finally can upload our code, but first we want to make sure there is no previous version of the website it the storage account so we will remove first.
- Finally we can login as service principal (explain later) and purge the CDN cache so the new version can be published to all [POPs](https://docs.microsoft.com/en-us/azure/cdn/cdn-overview#how-it-works).

### Service Principal

Sadly before we move forward we need to set up one more thing. To be able to purge our CDN in non-interactive mode we need to have **service principal** . In short description taken from the Azure docs you can read:

> _An Azure service principal is an identity created for use with applications, hosted services, and automated tools to access Azure resources. This access is restricted by the roles assigned to the service principal, giving you control over which resources can be accessed and at which level. For security reasons, it's always recommended to use service principals with automated tools rather than allowing them to log in with a user identity._

Steps to create service principal can be find in this excellent [description on stack-overflow](https://stackoverflow.com/a/48105935/473390).

OK, so finally we can use it! Since we host our project on GitHub, you can [sign up](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-sign-up?view=azure-devops#sign-up-with-a-github-account) to Azure DevOps with it.

### Pipeline set up

When you are logged in to your account you should switch to pipelines section on your right hand side. Because you don't have any pipeline yet, there should be button 'Create Pipeline' in the middle of the page. Click on it and then pick up 'GitHub' as the source of your code. On next screen you should see list of your repositories, pickup the one where you have your pipeline yaml definition. The file should be picked up automatically, review it and before continuing.

### Pipeline environment variables

You need to add variables used during build time. To do that, go under your pipelines list, select the one you have created, and click edit. Now you should be able to click on `Variables` button, when you are able to add new one.

To make one as a secret variable you need to select checkbox 'Keep this value secret':

- **ACCOUNT_NAME** - This will be `uniqueaccountname`, but you can always find this value in portal on storage account page under 'Settings -> Access keys'
- **ACCOUNT_KEY_MASTER** _(secret)_ - Again this can be find on the same page where ACCOUNT_NAME is under 'key1 -> Key' field.
- **CONTAINER** - This should be '\$web' because this is the default path for storage account website.
- **SP_USERNAME** - service principal name set with `az ad sp create-for-rbac` [command](https://docs.microsoft.com/en-us/azure/devops/pipelines/get-started/pipelines-sign-up?view=azure-devops#sign-up-with-a-github-account)
- **SP_PASSWORD** _(secret)_ - service principal password set with `az ad sp create-for-rbac` command
- **TENANT** _(secret)_ - tenant value output from `az ad sp create-for-rbac` command
- **CDN_ENDPOINT** - This should be `cdn-my-website`
- **CDN_PROFILE** - This should be `myjamstackwebsite-verizon-premium`

### Run it!

When you've done, then close the variables window and 'Run' manually the pipeline. If it's OK then each time you merge your branch to master then it'll deploy new version on your website.

### DNS zone

This is not necessary, but you would probably like use Azure DNS service to link your domain to CDN endpoint containing your website. If you interested in this then read [Azure tutorial](https://docs.microsoft.com/en-us/azure/cdn/cdn-map-content-to-custom-domain) with detail steps.

### Generating markdown pages from depended github repos

Before we move into customization project on the frontend, it's important to mention about `dependencies_repos.csv`.

It's the file that pipeline is using during build process. In each row there are defined variables used to fetch and extract markdowns files from depended repos, during gatsby build.

One line include following parts:

```
ORGANIZATION;REPO_NAME;COMMIT;SRC_DIR;URL_PATH
```

Where

- `ORGANIZATION` is github organization name
- `REPO_NAME` is the repository name inside organization
- `COMMIT` is specific commit id in repository
- `SRC_DIR` is path in repository where MD files are stored. Use `/` to use root repository folder
- `URL_PATH` is where you want to have final URL (`/` is for front site; `/example` will end up with `<website>/example`)

## Customize frontend gatsby project

In this part, we will guide you, how to customize [Ockam](https://ockam.io) website with documentation to fit your needs.
To generate frontend we use [Gatsby](https://www.gatsbyjs.org/) which is build on top of [React.js](https://pl.reactjs.org/). Gatsby helps us significantly to generate static content based on markdown files.

### Requirements

To start working with your own project, please fork [Ockam website](https://github.com/ockam-network/website) first, and clone it into your local machine.

```bash
git clone https://github.com/path-to-your-forked-repo
```

To start your local development, you need to have installed [nodejs](https://nodejs.org/en/download/)

### Running

Navigate into the site’s directory and install all dependency:

```bash
npm install
```

and start it up:

```bash
npm run start
```

The site is now running at http://localhost:8000

### File and folder structure

General file structure is describe inside `README.MD` file.

### General layout and theming

There are two major layout used in project:

- `PageLayout.js` which is used to generate all website pages
- `LearnLayout.js` which is used to generate dynamic content from markdown files.

Page layout by default has applied a dark theme, which is default for this project (`/src/theme/defaultTheme.js`). Learn layout is in light version (`/src/theme/lightTheme.js`). You can modify this by just changing `themeName` parameter of `ThemeProvider` inside layout files. The valid options are `dark` and `light`

```html
<ThemeProvider themeName="dark"></ThemeProvider>
```

You can always play with colors by changing them inside theme files (`defaultTheme.js` and `lightTheme.js`). Remember that lightTheme js is extending defaultTheme, what does it mean is that if there is any property missed in `lightTheme`, it will be inherited from `defaultTheme`.

### Adding/removing pages

In gatsby you can create website pages with few difference ways, more details about that in [gatsby documentation](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/). For website pages we use basic approach, where all components from `src/pages` are converted into pages under certain url.

### Customizing header menu

One of first think you may want to change, would be the header menu. In order to do that, go to: `src/components/Menu/MenuItems.js`. Based on your page structure, you might want change to use flat option instead of nested dropdown. To do that, instead of using `DropdownMenu` component, use `Link`.

```jsx
<Link
  fontSize={LinkFontSize}
  onClick={onClickItem}
  title="About Us"
  padding={{ _: 2, lg: 3 }}
  to="/about"
>
  About Us
</Link>
```

### Customizing docs pages

In our project, all pages generated from markdowns are inside `/learn` uri. It reflects to file structure inside `src/content/learn`. Some of them are manually included to the project ( ie. blog ), but another comes from depended repositories described [earlier in this article](#generating-markdown-pages-from-depended-github-repos).

Based on your needs, you may want to avoid this additional level `/learn/*` in path, and put your `markdown` pages directly under root level. In that case, just move `md` files/folders directly under `src/content` folder, or if markdowns comes from remote repositories, just change appropriate parameter inside: `dependencies_repos.csv`.

After that operation, remember to change path for assets in your md files.

In case you are still using blog for your purpose, you would have to also change paths of `/learn/blog` to `/blog` in few files:

- `src/hooks/useAllBlogPosts.js`
- `src/templates/LearnTemplate.js`

You may also want to reset your local server, and clear cache:

```bash
$ npm run clean
$ npm run start
```

### Setting configuration values

Last think you have to change is some configuration parameters under `config.js` file.
If you are going to us features like google algolia, recaptcha, etc, please remember to update ENV variable on your azure pipeline ( described [here](#pipeline-environment-variables) )

## Summary

In this article we have created JAMstack infrastructure on Azure cloud with help of Terraform and we set up Azure pipeline to help us with continuous deployment.
We configured depended repos to generate pages from related markdown files.
Finally, we have cloned open source [Ockam_webiste](https://github.com/ockam-network/website) and customize frontend part.

And that's it folks! Thank you for your time and I hope you have learned something new.
