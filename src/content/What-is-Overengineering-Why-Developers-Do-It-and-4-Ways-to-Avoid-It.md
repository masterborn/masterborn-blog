---
title: 'What is Overengineering? Why Developers Do It and 4 Ways to Avoid It'
date: 2021-08-09
description: 'Overengineering in software development: What is it, why does it happen and what does it actually mean for a start-up business and its MVP?'
author: 'Przemysław Królik'
authorAvatar: ./assets/avatar_przemyslaw_k.jpg
metaImage: ./assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/210713_mb_blog_overengineering_Przemek_cover.jpg
isFeature: true
---

# What is Overengineering? Why Developers Do It and 4 Ways to Avoid It

How complex should your software be? The general rule of thumb is that architecture and code should never be more complex than they have to be. Most of us intuitively know that less is better, but it’s often very hard to achieve simplicity and elegance in software development.



The reason for not keeping things simple is perfectionism, ambition, and a lack of communication among team members – they want their apps to overshadow all other apps. This is obviously impossible to achieve and complicates software so that it becomes difficult to maintain and scale.



As a CTO of MasterBorn, I always make sure that the written code responds to the needs of business and the client, and not the perfectionist aspirations of developers …
In this article I will tell you more about Overengineering and its impact on a Team’s productivity and business.



## What is overengineering?

Overengineering is the designing of a product which has more functionalities and features than the business really needs and requires. It's way too complex or far too perfect & beautiful. At the initial stages of product development, such an approach is unnecessary and exposes startups to losses, which is why it is so important to efficiently recognize the symptoms of overengineering.

### Overengineering symptoms

One of the clearest symptoms of overengineering is trying to address all corner cases of the application. A corner case is a situation that occurs outside normal operating parameters.



An example of a corner case can be a user trying to order 20 Uber cars for all his friends at the same time from one application. While such a corner case is technically possible, it is not very common. The question for development teams is thus – should we spend time and money to make sure that such a scenario is viable within the app? Probably not.



Another symptom of overengineering is trying to achieve a perfect solution, rather than a good enough one. Think of a team that deliberates for ages over whether the background color in the app should be #FBFCFC or #F7F9F9; or a developer that spends days making sure their code is cleaner and more modern than anybody else’s.



Chasing innovation for the sake of it is another example of overengineering. It’s quite easy to go down this road. Most developers are innovators and they love experimenting and staying on top of the game. While this has to happen to a certain degree, what products often need is not trendy technology, but a fast time-to-market.



Finally, overengineering often manifests itself in developing features and functionalities that are not needed right now. Sometimes it is caused by a lack of understanding of the users and sometimes by thinking too far into the future of the product, without considering the present.

## What overengineering is not

Avoiding overengineering should not mean our solutions should be simplistic or clunky.



Keeping the coding standards coherent is very important, for example, and should not be considered redundant. This helps assure that any new developer that joins a project can easily navigate through the codebase and start being productive quickly.



While the Keep It Simple Stupid (KISS) principle is one of the key factors of success of any start-up it should not become a religion. Sometimes using a more complex architecture or code is justified and then it should not be avoided.



It is important to maintain a balance between the extremes – if we don’t, we may easily slip into underengineering which is as dangerous as overengineering.

## Dangers of overengineering from a business perspective

![Dangers_of_overengineering_from_a_business_perspective](assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/Dangers_of_overengineering_from_a_business_perspective.jpg)


What does overengineering mean for a start-up and its MVP? From a developer’s or architect’s perspective, using the latest technology, sophisticated code, and making software ready for all imaginable corner cases can be a source of pride.



But from a business point of view, overengineering means longer time-to-market (TTM) and Timing is one of the most important factors of startup success. With many markets and niches already crowded, it is very important for new companies and apps to move quickly and gain traction as soon as possible. Time spent on unnecessary development simply reduces the chances of success.



Overengineering also means that new engineers taking over development is difficult and requires a lot of effort. Simple and straightforward solutions are most effective, as they don’t require very specific knowledge or skills.



Complexity also has one more crucial impact on software – the more sophisticated and convoluted the codebase is, the more space there is for technical debt. To be clear: any code, even the most simple and elegant one will at some point become outdated and will require ongoing maintenance, but the more intricate it is the bigger the chances of hitting that iceberg at some point.
You can [read more about Technical Debt and 6 things a business should know about it here.](https://masterborn.com/blog/technical-debt-6-things-business-should-know/)



Fun fact: engineers spend on average [33% of their time](https://www.stepsize.com/blog/cost-of-technical-debt) working on technical debt.



## Overengineering can be desirable at some points

Some members of the development community may argue that overengineering can be desirable in some cases.



One of these is performance and safety. Let’s imagine airplane software that does not take into consideration corner cases. In aviation, there are certain events that happen extremely rarely (multiple engine failure, loss of all hydraulic systems). But the fact that they are not common, does not mean that onboard systems should not be ready for such an occurrence. Similarly, self-driving cars must be ready for extreme situations if they want to be perceived as trustworthy.



Another example of desirable complexity is diagnostic and medical tools that have to have multiple functionalities to make sure doctors don’t miss any symptoms of a disease. For example, modern ultrasound scanners at your local cardiologist are 10% hardware and 90% software. This helps make complicated calculations, interpret the sounds the heart is making and come up with a diagnosis that even a well-trained doctor wouldn’t be able to make by themselves.



Interestingly, there may be many examples of less critical software where an overly eager developer saved the business by implementing features nobody was interested in. But we will probably never know because we only learn about spectacular engineering fiascos, rather than quiet successes.

## How to identify overengineering?
![How_to_identify_overengineering](assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/How_to_identify_overengineering.jpg)

It is sometimes difficult to react to attempts at overengineering quickly. But here are some examples of statements that should sound some alarm bells:

-   “This website does not seem to work ideally in Chrome on iPhone 4 with Vietnamese fonts – we need to fix this!”

-   “Hey guys, this new amazing pattern just launched in Silicon Valley is gaining momentum. We have to use it, it’s so modern!”

-   “Sorry for taking so long to develop the feature you requested. I decided to expand its scope and add three additional features that make this really rich.”

-   “Ok, so I spent the last week preparing our AWS environment for handling ten million simultaneous users. I know we are in a proof of concept phase, but we’d better be ready.”


You see what I mean, right?

## Why do teams tend to overengineer software products?

Let’s now focus on the key reasons why overengineering occurs in software development processes.



### Lack of business acumen among developers

The majority of software engineers are technically well-trained – which is desirable – but sometimes lack the business perspective and tend to go along with their intuition.

"I think that this application should have this functionality" can sometimes be heard, but thinking is just not enough. You should talk about expanding the scope of work and give the exact reasoning behind it to the rest of the team.

### Perfectionism

Perfect is the enemy of good. Often doing something in an ideal way will result in achieving much less (as the Pareto rule says – 80% of our work is based on 20% time, and you will need to focus much more than the remaining 20% of your time to achieve 100% of results). Bear in mind, ideal code does not exist, and the changing environment means you will have to refactor it anyway at some point.

### "Just in case" mindset

If you think that your idea may be useful later on you tend to focus on it and lose perception of the more immediate business goal. This is a bit tricky, though, as it is positive and negative at the same time. Doing something just in case may save so much of your time later on. But at the same time, it may be a waste now. The key is to think things through and make conscious decisions.

### Need to show off

Stars like to shine, and some people like to show off. A good developer or leader doesn't have to boast about their skills and prove they can do difficult things. They know that drawing attention to themselves does not necessarily mean that a product will succeed.

## 4 ways to avoid overengineering

## Overengineering: tip #1

### Be clear about business goals

![Be_clear_about_business_goals](assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/Be_clear_about_business_goals.jpg)


One of our corporate values is Clarity and in my opinion it makes great sense in the context of Overengineering. You need to be on the same page with your team on business needs and state them clearly. People tend to drift away from the bottom line because they don’t understand it. If your communication is honest and transparent, it’s usually enough to set a clear goal and the product team will reach it.

## Overengineering: tip #2

### Mix personalities in the team

![Mix_personalities_in_the_team](assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/Mix_personalities_in_the_team.jpg)

Monocultures are a headache – similar people think and behave alike and they will eventually gravitate to a very specific way of doing things.
And if the leading personality trait in a team is perfectionism, it can result in massive overengineering. So, you should have mixed personalities in a team and a smart leader to keep the people at bay.

## Overengineering: tip #3

### Keep an eye on the progress
![Keep_an_eye_on_the_progress](assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/Keep_an_eye_on_the_progress.jpg)

Have a procedure in place to track the progress and be active with the team to spot the first signs that somebody is doing something out of scope. Communication is important here as well as you need to be able to explain the "why". Understanding the underlying thinking behind a product will help maintain excitement and reforge it into something constructive.

## Overengineering: tip #4

### Don't try to find the golden rule
![Don_t_try_to_find_the_golden_rule](assets/What-is-Overengineering-Why-Developers-Do-It-and-4-Ways-to-Avoid-It/Don_t_try_to_find_the_golden_rule.jpg)

There are no universal answers or solutions. Don't try to find the golden rule for everything. You need to be selective and critical in your thinking when it comes to trends. Remember – context is king!

## Summary

Overengineering is more common than you may think. It happens in almost every project to some extent.



At MasterBorn, I pay extra attention to educating people and explaining the decision-making process to them. This boosts understanding of common goals and helps us focus on critical aspects of work, without spending too much time on “nice-to-haves”.

The most important thing is to make all development-related decisions with the MVP in the back of your mind.

A startup shouldn’t just want to create beautiful code, it NEEDS high quality code to be successful on the market.
Period.

Without pointless overengineering the start-ups we work with achieve quick progress, fast time-to-market, and don’t overkill their apps.



Let us know if overengineering is something that’s on your mind and I’ll be happy to talk!
