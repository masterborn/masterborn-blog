---
title: 'Serverless Computing - 5 pitfalls to avoid in your project'
date: 2021-04-02
description: 'The top 5 pitfalls of Serverless Computing and how to overcome them. Learn how to avoid problems with Microservices, Timeouts, Vendor Lock, Cold start and Running dry database connections.'
author: 'Przemysław Królik'
authorAvatar: ./assets/avatar_przemyslaw_k.jpg
metaImage: ./assets/Serverless_computing_pitfalls_to_avoid/210330_MB_blog_cover_serverless.jpg
metaTitle: 'Serverless Computing - 5 pitfalls to avoid in your project'
metaDescription: 'The top 5 pitfalls of Serverless Computing and how to overcome them. Learn how to avoid problems with Microservices, Timeouts, Vendor Lock, Cold start and Running dry database connections.'
isFeature: true

---

![Cover-photo](/assets/Serverless_computing_pitfalls_to_avoid/210330_MB_blog_cover_serverless.jpg)
  
# Serverless Computing - 5 pitfalls to avoid in your project

With more and more popularity within the serverless computing and FaaS models (which stands from Function as a Service), we are more than eager to try it out, assess its possibilities and run things on this architecture, which may result in many "unpredictable" pitfalls of the serverless architecture.

## Why use Serverless Computing?

We at MasterBorn love to create serverless architectures based on FaaS (AWS Lambda especially) as it gives us many advantages inside our applications. We have been using serverless since the beginning of our company and have run many projects applications that utilise various parts from cloud providers.

### My 3 top benefits of choosing Serverless Computing are:

1.  Solutions based on serverless computing and architecture, in general, automatically scale up and down - according to the current demand.
2.  FaaS significantly cuts server costs - from my experience - by at least 20% depending on the service (for functions it may be even more depending on the application's use).
3.  FaaS reduces server maintenance - to almost zero - and requires people with less specific expertise to manage it.

  

It gives us loads of possibilities in terms of quick development and is backed up by the flexibility of the cloud infrastructure. Serverless architecture brings many advantages of "the old ways" of running services.

Even though I see many advantages in serverless computing - I have to say that we fought through many pitfalls, roadblocks, issues and learned a lot about good practices, easy solutions and performance boosts.

Now let me take you on a bumpy ride through the experiences and know-how I gained while working on our serverless applications.

Sometimes it wasn't easy. Sometimes I needed the support from my Team. And, sometimes I considered moving to Africa - to plant nut trees in Gambia. But, since I'm not a farmer, I decided to stay, overcome all the issues and now I can share my 5 biggest pitfalls - and solutions - with you.

  

## Serverless Computing Pitfall No 1: Microservices everywhere
![Microservices_everywhere](/assets/Serverless_computing_pitfalls_to_avoid/Microservices_everywhere.png)

### The Case

It's quite typical to quickly come to the conclusion of "Serverless? Microservices then!" but, this shouldn't be a common practice nor does it have common sense. People tend to think that one of the benefits of serverless is to create highly distributed, event-based, microservice oriented code whenever possible as we are super quick to run new things in the cloud.

When you look at the example of AWS Lambda, it does have some of the tools that boost this approach but do not limit you to only it. The only limitation is how you want to use your lambda functions and what role they have in your general architecture.

### The solution

Don't be afraid of other architecture patterns. Serverless applications tend to give the image of flexibility while not actually giving it. Small monolith or modular monolith could be run on serverless as well and it could even give you more advantages than actually setting a full infrastructure by yourself. On top of that, you will be utilising the benefits of serverless such as scalability with almost none of the maintenance required and you will be able to focus on the code most of which is much more beneficial in terms of business needs (no servers to upkeep means less involvement of the DevOps engineers on maintenance and more focus on running new systems).

## Serverless Computing Pitfall No 2: Timeouts
![Timeouts](/assets/Serverless_computing_pitfalls_to_avoid/Timeouts.png)

### The Case

We are limitless when it comes to managing the HTTP servers and prolonging their request times (of course until the connection is broken). This may be incorrect if you utilise some FaaS solutions. Regardless of how long I have loved AWS Lambda, it is not the ideal case for a long-running system that intakes large files and needs to process them to keep the connection between the client and the server up. Serverless (or FaaS in general) are built with speed and scalability in mind. You tend to utilise them for quick answers, small workloads of unpredictable time with some actual limits/boundaries that will kill them if they over exceed.

### The Solution

If we are talking about API, then the easiest way is to utilise HTTP 202 and create serverless applications based heavily around it if long-running processes are being involved. As you typically pay per use, it means that every second matters and every second spent on keeping the connection alive results in a higher bill. If there is no actual API being involved then FaaS could be utilised as well! You just need to remember that it won't be the optimal or cheapest way of doing things regarding repetitive and long tasks (these should be left for larger calibre things like physical servers or AWS Fargate).

## Serverless Computing Pitfall No 3: Vendor Lock
![Vendor_lock](/assets/Serverless_computing_pitfalls_to_avoid/Vendor_lock.png)

### The Case

As FaaS isn't standardized across all implementations, we are always struggling to make a decision. Usually, such solutions are cloud-native which results in us being under a vendor lock. Is it cloud or third party company solutions, that do not matter at all. They have their own idea of how to run serverless applications and it does have it's pros and cons which gives some space while choosing your FaaS platform. As an example, AWS gives you plenty of space to run your functions the way you want, whether is be publicly or privately, while other cloud providers may force you to run your functions publicly only. If the vendor lock is a fully informed decision, then most of the time there is no issue with that. Blinding yourself because the "wow factor" of some new cutting edge technology may result in some big issues later on.

### The Solution

There is no good solution for that. Usually, when you choose the cloud provider, you are quite bound to it and you need to consider all the pros and cons. There are some mitigating points like the open-source Serverless framework (that we love to utilise in our applications) that gives us some abstraction layer but the differences are too big to be mitigated by it only. There is also the idea of having some flexibility within the code. As our developers run functions on AWS Lambda FaaS, we don't lock ourselves into it only. I always love and recommend having a backup plan that you can utilise when your solution exceeds the possibilities of the platform to easily swap into the bare server. That's why we utilise heavy frameworks while preparing the lambda function rather than keeping them bare.

## Serverless Computing Pitfall No 4: Cold Start
![Cold_start](/assets/Serverless_computing_pitfalls_to_avoid/Cold_start.png)

### The Case

We always love to have things quick, instant, or even faster and it's quite weird for us to have to wait for something longer than milliseconds while loading the web page. Cold start is one of these things that actually can't be avoided while running an application in the function of a service environment. This is even more true when cloud infrastructure is being utilised to run the systems. Time to market is one of the drivers of how good or bad our business is and it may be one of the reasons to use serverless as your driving motor. As serverless applications give you this real-time feel, this isn't always the case. Even though its called serverless, there are physical servers underneath the skin and you actually need to wait for them to be booted up before running your precious functions.

### The Solution

There are plenty of possibilities to solve the cold start issue. Some FaaS providers give you built-in solutions by keeping your function in the ready state which results in quick access into it. The downside of it is that you need to pay continually for this as you would for a server and most of the time, you end up with a larger bill. This is something you need to keep in mind while working on serverless architecture as loading times matter sometimes.

## Serverless Computing Pitfall No 5: Running dry database connections
![Dry_database](/assets/Serverless_computing_pitfalls_to_avoid/Dry_database.png)

### The Case

So, you have your super optimised function that is small and does its specific job OR some kind of a monolith running serverless that needs some pooled connections into the database? Watch out for these. Typically when you run things with i.e. AWS Lambda, you may scale up nearly without limits (this is just one of a 1000 concurrent functions but it can be increased). You may end up running dry database connections which will result in the opposite result than anticipated and may even kill your whole stack due to the unavailability of the DB.

### The Solution

With great scalability comes great connectivity issues (or something like that), but the solution for that is quite easy. If you are heavily utilising FaaS from AWS (Lambda functions) then it gives you an out of the box possibility to create something known as RDS Proxy, which gathers and manages the connection pool for you, neat isn't it? If however, you are one of the people who doesn't use the AWS then no worries. The same is available to you but it may need a little bit more work to set things up by yourself or utilise other FaaS solutions possibilities. As well, you can go the "typical way" of throwing more money at it and scale up the database server but this will be a temporary solution.

## Other things to consider while starting with Serverless Computing

![Developer_programming](/assets/Serverless_computing_pitfalls_to_avoid/Developer_programming.jpg)

### Technologies/Languages

This touches many of the issues mentioned, regardless of the technology you have chosen, you need to wait for your code/instance to run behind the scenes and it's crucial which technology you choose while preparing a serverless architecture. Some of the images may be faster to set up (Node.js i.e.) than the others which will result in some languages fitting better into the quick serverless based architecture mindset than others. FaaS isn't always the best choice while running bulky apps based on Java or similar languages and are supposed to be indestructible (as Java 1.6 is ;D).

### Cost

This is a universal factor that you need to have in mind. If you vendor lock yourself in one of the FaaS platforms, you will be bound to pay for it or forced to migrate off it which will is still costly. Whatever you choose, keep in mind that time to market may be worth this risk as running your things quickly may give you an advantage over the others.

### Serverless Framework

As mentioned previously, here in MasterBorn, we love to use a Serverless framework that gives us some level of abstraction above the FaaS provider. It's probably one of many open-source initiatives around there but specific providers have their own frameworks with which they will try to "seduce" you (like AWS SAM i.e.). Keep in mind that as using these seems really nice, intuitive, and easy, it will just keep you more and more in a vendor lock state (SAM heavily utilises AWS native Cloud Formation where Serverless hides it behind the scenes and gives you plenty of open-source/community-driven plugins to use).

  

## When to use a serverless architecture?

I'd say - go ahead and start NOW.
Just have in mind all of the previously mentioned pitfalls.

And while creating your first serverless architecture, don't forget to pick the right tool for your use-case and while you are at it - utilize it to the fullest.

By the way - did you know that what when I came into Droplr, it was based on many different languages and frameworks? With the lead of our Solution Architect (thanks for that if you are reading this!), we evolved it around a Serverless framework based on Node.js (with old good Express.js) which resulted in giant savings and a performance boost at the end. From those time, the Serverless framework has evolved so much and I would highly recommend you trying it out.

  

## Serverless for Startups

FaaS is a great solution for PoC / MVP and even teams for a quick and highly scalable solution that you won't need to worry about.
Most of today’s startups and companies choose to go serverless e.g. Figma, Nordstrom, Netflix and even Coca-Cola.

If you wonder why that is - then let me give you a small analogy. You see - serverless architecture is like a huge Lego construction - you can add new pieces, and create a product really fast. 

![Lego_architecture](/assets/Serverless_computing_pitfalls_to_avoid/Lego_architecture.jpg)

Time is a crucial factor for startups because in order to verify the market value of the product - you need to get your MVP within a few months. And, serverless project allows you to do that with less of a headache of setting things up, managing them and evolving when these Agile changes come.

And... contrary to Lego - you don't have to worry that you may step on a piece - so that's another huge plus. ;-)

That's it for now - if you plan to build your Tech application - I highly recommend this cloud-based serverless direction. In case you have some doubts regarding this issue - feel free to drop us a line and let's talk - hello@masterborn.com
