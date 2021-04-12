---
title: 'TypeScript vs JavaScript: What’s the Difference?'
date: 2021-04-12
description: 'What’s the difference between TypeScript and JavaScript? And when is it right to migrate to TypeScript, or maybe… the other way around?'
author: 'Przemysław Królik'
authorAvatar: ./assets/avatar_przemyslaw_k.jpg
metaImage: ./assets/typescript-vs-javascript/210407_MB_blog_cover_TSvsJS.png
metaTitle: 'TypeScript vs JavaScript: What’s the Difference?'
metaDescription: 'What’s the difference between TypeScript and JavaScript? And when is it right to migrate to TypeScript, or maybe… the other way around?'
isFeature: true

---

![Cover-photo](assets/typescript-vs-javascript/210407_MB_blog_cover_TSvsJS.png)


# TypeScript vs JavaScript: What's the Difference?



JavaScript and TypeScript may be seen as sibling programming languages. They share a space in web development and beyond, and have been existing in that space in creative tension.

But TypeScript is more than "JavaScript with types." And it may at the same time, in some ways, be "less than JavaScript itself." Above all, given the differences between the languages, a TypeScript developer is not automatically a JavaScript developer.

The JavaScript - TypeScript relationship may not be as simple and straightforward as it is sometimes thought to be. JavaScript and TypeScript each come with distinct strengths as well as quirks and disadvantages. It is worth probing these issues in more detail, but for that to make sense, let's begin with a bit of an introduction and context.

## What is JavaScript?

JavaScript is one of the world's most prominent and polarizing programming languages. Its increase in significance has gone hand in hand with the global rise of the Internet itself. JavaScript is an interpreted, dynamically typed and flexible scripting language. Alongside HTML and CSS, it is the third language that web browsers can directly interpret. While HTML defines the content rendered in applications running in browsers, and CSS lets us style them, it is JavaScript that makes them dynamic and responsive.

## What is TypeScript?

Increasingly popular, TypeScript is a compiled programming language commonly known as a superset of JavaScript. TypeScript introduces certain features on top of those available in vanilla JavaScript, but makes everything in JavaScript available for use in TypeScript from the get-go.

What makes TypeScript special in that regard is that - barring some compiler tweaks that restrict certain JavaScript features deemed "unsafe" (such as many instances of type coercion) - all JavaScript code is legal TypeScript code. With that caveat in place, you can dump anything you write in vanilla JavaScript into a TypeScript source file and be in the green.

Let us now briefly look at where JS and TS came from.

## JavaScript History

In the 1990s there was a need to make Internet websites dynamic with a scripting language suited to defining interactions among page elements in the browser.

In 1995 Brendan Eich, working for the Netscape Communications Corporation, was tasked with developing a scripting language for the company's web browser, Netscape Navigator.

In November 1996 Brendan Eich and Netscape handed over  JavaScript - or Mocha, as it was known for a time - for standardization to ECMA (European Computer Manufacturers Association) International, a Swiss standard-maker in computer manufacturing. ECMA would subsequently maintain and extend the ECMAScript standard, to be implemented by browser vendors across the Internet. JavaScript today is a major implementation of ECMAScript.

## JavaScript Features

![JavaScript features](assets/typescript-vs-javascript/JavaScript-features.png)

The ECMAScript standard behind JavaScript has itself been changing over time. Over the past +10 years, especially with the introduction of "strict mode" in ES5 and with the release of ES6 in 2015, the standard has codified a scripting language that is significantly more modern, succinct, and convenient to work with.

We now have standardized ES modules, arrow functions with definition-based "this" binding, "spread" and "rest" operators, object notation shorthands, the predictable "const" and "let" variable declarations, and promises and async/await for handling frequent asynchronous code logic.

We even have classes in JS now, though merely as syntactic sugar over prototypes and constructor functions, a move decried by some JS developers as appealing to the OOP crowd at the expense of JS itself.

Regardless, JavaScript is every bit the lightweight interpreted language it has been since its inception, and it still rules the web.

## TypeScript: Behind JavaScript that Scales

TypeScript was created and is developed at Microsoft. It originated in response to the growing complexity of both frontend JavaScript architectures and applications and the growing use of JavaScript in server-side programming with Node.js. With static typing and a range of language features absent from JS, TypeScript has nonetheless maintained compatibility with ECMAScript's main implementation.

Microsoft alone might not have been enough to push TypeScript forward as a general alternative to the direct use of vanilla JS. Good for them, then, that Google released the Angular 2 framework in 2016.

Built with TS in mind and using it exclusively, through the new Angular TypeScript gained Google's imprimatur, and with it the increased confidence of the broader community.

## Features of TypeScript

Microsoft advertises TypeScript as typed JavaScript at any scale, meaning that it is particularly suited towards making JavaScript code more extensible and maintainable in large-scale projects. This arguably comes at the cost of discouraging or disabling the use of certain JavaScript idioms, if not features.

With the launch and growth in adoption of Node.js in the past decade - allowing developers to write JavaScript for server-side applications - JavaScript managed to cover the whole spectrum of standard web applications, from the front end to the back end. This has enabled more and bigger apps to be developed in a single programming language. But it has in turn required increased stability and security from ECMAScript as the standard.

### Static Typing

What TypeScript brings to JavaScript is static typing and some language features built on top of JavaScript that are said to somewhat restrict, stabilize and enrich JavaScript, as well as make it more predictable to the average developer and scalable for the project that uses it.

Those include the types themselves, of course, including generics, interfaces, enums, and access modifiers - standard fare in object-oriented programming.

The fact that TypeScript compiles the code to JavaScript means you can catch problems of certain kinds, especially type errors, at compile-time, without having to run your application and see it fail.

This makes for a smaller, shorter feedback loop and easier refactoring. It has also been argued, static typing significantly reduces the volume of tests that need to be written in order to provide program stability through sufficient coverage, since some checks are no longer needed in testing.

### JavaScript to TypeScript: Gradual Migration

TypeScript can be employed gradually, not only in the sense of gradual migration of more of your project to it, but also in that the compiler can be taken from more lenient to more strict step by step. You start by using .ts extensions on your files instead of .js and go from there.

Also helpful, support for TS among JavaScript libraries and frameworks has been growing rapidly, to the point where now the vast majority of them are either prepared for TS originally or have typed definitions (in d.ts. files) available to accompany the original .js files. TypeScript has also paved the way for the introduction of classes and optional chaining to JS. The same might be true for the currently worked-on decorators and private modifiers. It's fair to say, then, that TS has both followed JS and pushed it forward.

## TypeScript vs JavaScript

![JavaScript vs TypeScript](assets/typescript-vs-javascript/JavaScript-vs-TypeScript.png)

That above may sound like an unequivocal recommendation to jump aboard the TypeScript train. But things are not so simple.

Why would you want to use JavaScript instead of TypeScript? The value of a static type system is not undisputed. It may be that static typing does not prevent bugs or increase the quality of a codebase as such.

Meanwhile, you are giving up the elegance and flexibility that come with JavaScript for the added complexity and distraction of explicit, static types. TS does OK at modelling JavaScript dynamism most of the time, but it is still limited, and by definition always plays catch-up.

### TypeScript vs JavaScript: Added Complexity

Furthermore, if your project already features a build pipeline of sufficient complexity, you will have to do additional work to make sure TypeScript is well-integrated with it. Given the complicated nature of modern frontend toolchains as well as backend architectures, it may be more of a burden than benefit. There is tooling now to help handle this complexity with create-react-app, angular-cli and more, but those are not universally applicable.

### TypeScript vs JavaScript: Time and Effort

TypeScript requires a time and work investment upfront. Explicitly typing your variables, function and method parameters, type parameters for generics, return types and more can obviously make things more resource-demanding. The payoff may or may not be there, and if so, then perhaps in more time than you are willing to give it.

### TypeScript vs JavaScript: Errors, Errors Everywhere!

The nature of errors caught by TypeScript is limited as well. It may be that the issues that are especially frequent and painful to deal with are not solved by proper typing. These include network- and environment-related issues, API call failures, authorization issues, unintended event behavior, and of course plain logical errors.

Something to keep in mind as well is that TypeScript does not make guarantees of runtime type-correctness. Even if your code makes the TypeScript compiler happy, you might still get runtime errors at the boundaries of the system.

Regardless, and more importantly, type correctness does not equal program correctness, and TypeScript does not guarantee the proper running of your program.

## Can You Mix TypeScript and JavaScript?

![Can You Mix TypeScript and JavaScript](assets/typescript-vs-javascript/Can-You-Mix-TypeScript-and-JavaScript.png)

Is there truly an either/or here? The fact is, JavaScript and TypeScript can be mixed in a single project and it is common practice.

Especially during migration (see below), but not only, it's not unheard of that Babel-transpiled and TypeScript-compiled modules run side by side on bigger projects, especially with Babel's support for integration with TypeScript. If this is optimal as a permanent solution is another issue. Perhaps it is better to leave existing JavaScript code in JS and use TypeScript for new code. Speaking of, let's talk about migration to TypeScript (and back).

## Migrating between JavaScript and TypeScript

When is it right to migrate to TypeScript, or maybe the other way around? If your project and team are growing and it is hard to control the ongoing changes and you want to improve team communication - those are valid reasons for migration to TypeScript.

Going from TypeScript to JavaScript is not easy, however, and is generally not recommended.

If you have been using interfaces and enums and other TS-taken-for-granted OOP features that are not natively supported in JS, the road back may be rocky. That code does not run directly in a JavaScript runtime any more. Your project becomes dependent on TypeScript. For a big codebase written in TypeScript, it would be a lot of work to get back to plain JavaScript.

## JavaScript vs TypeScript: Which is Better for Your Project?

TypeScript has much to bring to the table in projects that utilize both client-side and server-side JS technologies, since it allows types and interfaces to be modeled reliably and with relative ease across the entire stack.

It may also be of use on backend applications specifically, especially if those tend to be heavily data-driven and can benefit from careful type-modeling.

In general, TypeScript works well in larger-scale applications managed by multiple developers. Here it can help set up and standardize mechanisms of communication and coding among team members and across teams. Thus, TypeScript can help keep code consistent and cohesive.

The problem, however, is that in the end TypeScript is not actual JavaScript. It tends to downplay many of JavaScript's "imperfections." But it does not really protect you from having to know JavaScript well. It does not provide respite from the common complaints addressed at JavaScript that have nothing to do with types, including "this" binding and scoping issues, prototypes etc.

### Correcting JavaScript?

Most of the time TypeScript discourages tested idioms of JavaScript coding and replaces them with a more orthodox, class-based superstructure that's closer to Java and C# enterprise mentality but alien to JavaScript itself. It thus may end up breeding developers of a distinctly different way of looking at code and projects than JavaScript does.

### A TypeScript Developer is not a JavaScript Developer

The bottom line is that without knowing the more unique aspects of JavaScript, a TypeScript developer is not a JavaScript developer. S/he may end up adopting practices that in an ultimately dynamic, lightweight, interpreted environment are more hindrance than help. In light of the fact that both web browsers and the V8 engine in Node.js natively interpret only JavaScript, this may not be a good thing.

If you have a startup that, by definition, needs to develop and iterate fast, JavaScript is there for you, sparing you the burden of typing everything out, but of course equipped with types that can be relied on to be there at runtime.

And if you work with a demanding client base, as we do at MasterBorn, you may find your clients can benefit immensely from the services of JavaScript engineers writing code that runs natively in the environments they target. With JavaScript, this is 100% the case. With TypeScript - not at all.

![Happy-developer](assets/typescript-vs-javascript/happy-developer.jpg)

## TypeScript vs JavaScript: Final Thoughts

If a suggestion is in order, it’s this: Tools should definitely be picked with due consideration. They are there to support your work and goals, but can only do so if they are chosen carefully and used to their full potential.

Yes, around 90% of job offers focus on JavaScript, and only the remaining 10% mention TypeScript. And yes, TypeScript has definitely been growing over the past few years and is likely to continue to do so.

But there is little point in using either JavaScript of TypeScript half-heartedly, in timid accordance with current or emergent trends. This will do more harm than good. If it is what you need, choose TypeScript. Otherwise, go with JavaScript.

Here at MasterBorn we build MVP and bespoke software for U.S, Silicon Valley-based clients. If you're still unsure as to the whole TypeScript vs JavaScript dilemma, drop us a line at hello@masterborn.com. We're here to help you make that call and drive your success home.
