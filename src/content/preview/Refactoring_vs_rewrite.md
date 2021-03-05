---
title: 'Refactoring vs. Rewrite - Which is a Better Option ?'
date: 2021-03-05
description: 'Refactoring vs Rewrite. When to Refactor or Rewrite Your Code? What factors should you consider before the final decision?'
author: 'Przemysław Królik'
authorAvatar: ./assets/avatar_przemyslaw_k.jpg
metaImage: ./assets/Refactoring_vs_rewrite/refactoring_vs_rewrite_cover_photo.jpg
metaTitle: 'Refactoring vs. Rewrite - Which is a Better Option'
metaDescription: 'Refactoring vs Rewrite. When to Refactor or Rewrite Your Code? What factors should you consider before the final decision?'
isPreview: true
---

# Refactoring vs. Rewrite - Which is a Better Option?

![cover_photo_refactoring](/assets/Refactoring_vs_rewrite/refactoring_vs_rewrite_cover_photo.png)

Did you know that in companies with 100+ developers and/or an active codebase of 500k+ lines of code, maintenance accounts for more than half of the entire development budget?
That’s a lot, right?

At MasterBorn, we're quite new to the topic of technical debt management. Most of our software developers write brand-new code. But recently more and more clients come to us with an already existing codebase that usually requires refactoring or a total rewrite of the legacy system.



## Refactoring vs Rewrite

People come to use with projects that require a lot of thought and some really hard decisions to be made. These usually touch upon key business decisions - adding new features or slowing down a bit to pay the technical debt.

![home_office_picture](/assets/Refactoring_vs_rewrite/home_office_picture.jpg)

In the past, deciding to refactor vs rewrite was easier because we were working on our product rather than consulting on someone else's old code or old system that we know very little about.

As a CTO I tried to find a solution that would help us approach such cases in our software development projects. And note that we've stumbled upon teams that had little to none of the application-ready code or already running the app with live customers even before we made the decision about refactoring.



## Is it better to refactor or rewrite old code? Here's what I’d consider.

### 1. Refactoring vs. Rewrite: Business continuity

The main goal of engaging software developers is to ultimately sell the product. Sometimes, it just so happens that you need to add functionalities quickly by pivoting them. But most of the time, it comes with one serious cost: technical debt cost is your source code as it's built to be delivered ASAP.

#### When you already have an application that customers are using, you're probably leaning towards refactoring.

After all, to rewrite the application from scratch means losing all the money and effort invested in your current application. Not to mention pulling the rug from your customers' feet.

Deciding to refactor vs. rewrite is a tough call, but some businesses are brave enough to rewrite their apps (and stand to reap many benefits later on from that decision).

Most of the time, at MasterBorn we tend to go with refactoring, improvement, and applying changes - unless the existing source code quality is really low (I like pasta but Spaghetti Code is not my favorite dish…).
In such a scenario, we tend to rewrite the code in parallel.

### 2. Refactoring vs. Rewrite: Money

Building software isn't just about fun. It's also (and tbh: always) about the money.

![cash_dolars](/assets/Refactoring_vs_rewrite/cash_dolars.jpeg)

Whenever teams are concerned about deadlines and/or have a strict limitation on their budgets, they tend to go with refactoring rather than a complete rewrite of the existing application. This is a natural choice given the limitations you're dealing with.

#### Fun fact: Rewriting the application can make you even more money than refactoring a big ball of mud that developers may have left for you to deal with.


We're talking about some serious architecture problems, buggy apps, or features that just aren't working.

Technical debt costs real money. An [analysis](https://www.castsoftware.com/research-labs/technical-debt-estimation) of debt carried out by CAST Research Labs (CRL) in 1400 applications at 160 companies revealed that an average-sized application of 300k lines of code has $1,083,000 worth of debt. That's $3.61 per line of code!

### 3. Refactoring vs. Rewrite: Time

Are you running out of time? Who doesn't?
Is your goal to bring the app to the market as fast as possible and your deadline is fast approaching?


If that’s the case then you probably don't have a choice other than refactoring the app. Businesses usually end up in this situation when they choose to add new functionalities that the app needed from day 1. Their development team didn't have time to implement it due to various limitations.

#### As a result, their project might require refactoring and redesign as they scramble to make up for lost time and still build quality software.

![clock](/assets/Refactoring_vs_rewrite/clock.jpeg)

When you're very limited in time, refactoring vs. rewriting isn't a question anymore because refactoring may be your only solution (but in some cases you won’t have time even for that).

### 4. Refactoring vs. Rewrite: Experience

You can't get great bread without a seasoned baker. If your team is highly inexperienced or its actions led you to the point where you can't move forward easily, then going for a rewrite might be more of a problem than an actual advantage.
You also want to make sure that the same people don't work on your software anymore (at least not alone).

#### The same people doing the same things in a new application aren't going to give you a different result. They're only going to burn your money.

Consider this quote from Albert Einstein:
*“The definition of insanity is doing the same thing over and over again, but expecting different results.”*

He was a physicist, not a software developer. But he sure knew what he was talking about.

In this scenario, finding a more experienced software developer is much more efficient. This person could lead your team and help in rewriting your app to add new meaningful changes to your system.

But watch out for this scenario: super experienced people may tend to overthink their solutions, which may lead to prolonging any chosen way.

### 5. Refactoring vs. Rewrite: Team

As I mentioned before, you need experienced software developers and other specialists in the right place. But don't forget about their "team factor."

#### Throwing in additional people into your team to scale things up isn't going to make refactoring or rewriting your app faster.

You know what they say: nine women can't give birth to a baby in a month, and that applies to developers too. In fact, it can lead to the opposite - especially if you take people from the bench or worse, outsource them.

"Throwing resources" at complex issues might not do much good to your code's complexity. Also, you will have to waste a bit of time to make sure that new people are integrated with the team and introduced to the code. They will also need time to think about proper solutions and where/how to implement them. Not to mention acting according to company values and really fitting into the organization’s culture.

The general conclusion here is that you need people who will be working on solving things efficiently and you need to trust them that they know their trade - regardless of whether you choose to refactor or rewrite your system.



## Refactoring vs. Rewrite - Conclusion

To me, it's a tie.

One magical sentence works really well here: "it depends." As you can see, many factors come into play when you're deciding between rewriting and refactoring. It's smart to take them all into account when making your final decision.

Neither refactoring nor rewriting is a "no brainer" decision when you're setting up a new business goal in terms of software development.

![thoughtful_businessman_think_of_online_project_looking_at_laptop_picture](/assets/Refactoring_vs_rewrite/thoughtful_businessman_think_of_online_project_looking_at_laptop_picture.jpg)

You need to factor in EACH one of the above. And add to it any other factors that are to your business or industry when making your decision, such as:

-   Obligations towards investors - if you're bound to pay back some investments then these can greatly influence how you're looking at the code

-   UI/UX designs - if these change greatly from version to version, then you may find it much easier to start from scratch rather than refactor the current codebase

-   Environment changes - if you want to migrate from one hosting solution to another, you might find some issues in a full swap that could result in the requirement of refactoring or rewrite

At MasterBorn, we always try to find the best solutions for our clients. When choosing to rewrite or refactor their system, we always give them a detailed explanation of why one option is better than the other and what they stand to gain by choosing it.

## 40% Refactoring - 60% Rewrite

As I mentioned, most of our solutions are built from scratch and technical debt isn’t an issue now. But if I were to gather the existing client codebases, then the tendency would be as follows: 40% refactor and 60% rewrite.
The biggest issues that occur are:

-   Low quality of the code (remember: documentation, proper structuring and naming are important!)

-   “Old style” of code structuring (typically monolithic applications within a full-stack MVC architecture that is hard to scale or work around, and usually taught by most of the widely available tutorials)

-   Over-engineering - you don’t need to use any “new and trendy cutting-edge technology,” implement microservices or any distributed systems for a small CRUD-like project with a 2-3 person team, at least most of the time. That goes especially for building an MVP, trust me :)


If you're dealing with a serious problem in your application and you're not sure what your next step should be, get in touch with us at hello@masterborn.com
We'll take a close look at your project to tell you whether your developers failed completely or there's still something to be salvaged here by refactoring your code.
