---
layout: "../../layouts/PostLayout.astro"
title: "RadioKnife"
subTitle: "Fullstack + Audio"
tags: ["Fullstack", "Audio"]
image:
  url: "/RadioKnifeAd.png"
  alt: "This is a test"
author: "Holland Sersen"
desc: "A FullStack Application that allows users to create and play musical instruments all from the browser."
date: "1/23"
---

*[RadioKnife](https://radioknife.co) is a website that would allow users to create and share musical instruments without needing a complex computer environment. As it stands, there are many pieces of software that allow for people to make musical instruments. Many of them lack in a couple of aspects:*

# Sharing Instruments:
Although the code can be uploaded through software like GitHub or copy and pasted through forum posts, most other forms of media can be played without even leaving the browser. For example, fully embeddable media include; audio, video, photos, and fully functioning code editors. 

Why can't instruments and audio be embedded just like these forms of media? The project would allow for people to be able to embed their instruments within comments and posts on the site.

# Accessibility:
In truth, learning about and showing audio synthesis to people who have never experienced it is not an easy task. The only real way to get a good experience is to either dig around online for a synth online. This is not very easy and leads to very different levels of quality. 

> The only other option is to download a piece of software, which ends up having a steep learning curve and a fairly aggressive barrier to entry.

There is just a lot of starting resistance when trying to learn about these devices compared to most other skills.
Because of this, making a web application is important. It would allow for furthering audio, particularly in the web, by introducing and cultivating audio through this medium. 

That is why my main audience is people interested in learning about music technology and sound synthesis. Within the timeline of the project I think I will have more than enough time to make a fully functioning website that would allow people who have never tried these devices to be able to for the first time and to give them the resources to know how to make their own. In the long term I would like to create tooling that would allow people who are already in the music programming world who would want to share their work to join in too. 




# Community:
The last main goal of the software is to create a community with this tool and create software that was meant to be played together. A common practice in music technology is the idea of laptop orchestras. Each person would use their individual laptop as an instrument and play in a group like a normal orchestra. The problem with this is that every person not only needs a specific piece of complex software but they also need a fairly powerful computer. 

I want people to be able to play with each other as well. The website will give people the ability to have multiple linked synthesizers without dealing with the complexities that other popular software introduces.


# Processes Applied.

Before I go over my process, I think it is very import to define how I think about my projects. I define problems that I have as one of two categories; Micro Problems and Macro Problems. 

Macro problems are big picture issues. Which Library, Framework, Hosting Service, or Feature should I use is under a macro problem. These issues come through lots of research and are normally the first issues you will encounter.

Micro problems are the nitty gritty issues. Things like, how I will align this box or to how do I turn this forum submission into something my database can understand would be micro. These problems normally come when you start trying to fix the Macro level problems. 

With that definition I can finally define my method for this project.

> *"Give me six hours to chop down a tree and I will spend the first four hours sharpening my ax."* - Abraham Lincoln. 

Yes, my method is this quote in its entirety. Before I tried to implement any major change I always did research and thought through different solutions before implementing them.

> For over arching details this works great, as a developer this allows me to to learn and adapt so much faster because many times people have already thought of and solved these same problems that I am having. 
 
 I used this method on almost every piece of my project; from where to host the code, to the database structure, and to the UI. 

Once I got the research down, it's time to cut down the tree itself. This is when all of my programming knowledge really comes in. When you have a well thought out plan, programming feels like a perfect zen moment, where everything falls into place. The more you learn, the more you understand your plan and its potential pitfalls, the faster things get done.

> Many of the program's core features I was able to code in a sitting. However, the process leading up to it many times were days in the making. 


# Findings.

Through my countless hours of research I came to many findings and consolations on the state of audio in the web. Here are some of them. 

# UI/UX Design in Audio.
One of the main findings I had from the project was how important UI/UX was to a website like this. Many audio websites lacked this aspect, and it hurt it the website's usability considerably  because of this. If it didn't do that the UI/UX hurt the audiences perspective of the site considerably. A great example are the sites ModWiggler and GearSpace. Up until a couple years ago these sites were named MuffWiggler and GearSlutz. Names that can been seen as very off putting towards people who are not already part of the community and its culture. 

> Part of my goal with this website was to challenge the preconceptions of what one of these sites could look like. 

 Many of the websites that I found that had the same functionality as mine felt very cold and serious. I wanted this site to be open to anyone and to be playful, inviting, and fun. I believe that the only way we can get more people in the audio community is if we tear down the preconceptions of what audio "looks like" into something more inviting to all people. 

# Self Hosting vs Managed Hosting. 
The first problem I had encountered was how I would host the website, (aka how can I keep it online and open to the public). In my first attempt at making the website I tried self hosting the entire site, mostly because I thought I would be able to save money and be able to configure the service to my heart's content. The problem was that I ended up spending more time trying to keep the site online rather than actually developing the project. 

> I quickly realized, yes I could save some money by doing this, but in return I'm going to lose a lot of time.

 I came to the decision soon after that using pre configured easy hosting solutions would be best for getting this  done in a timely matter. After a lot of research I was able to find multiple services with a very generous free/low tiers, so I spent close to the same amount of money as self hosting. If this was to be in scale then I would see a decent price increase, but for now this should be fine.

# Conclusion.
With this project I created a fully working prototype of this concept. There are many different ways this can be taken, the next step would be to allow users to put this into a DAW like Ableton with a click of a button. However, I do not think that we are there yet as an audio community. 

Thank you to everyone who helped me with this project. 



| Frontend | Backend   | Webhosting |
|:--|:--|:--|
|[SvelteKit](https://kit.svelte.dev/)   |[TRPC](https://trpc.io/)   |[Vercel](https://vercel.com/dashboard)  |  
|[TailwindCSS](https://tailwindcss.com/)   |[Rest API](https://kit.svelte.dev/docs/routing)  |[Railway](https://railway.app/)    |  
|[Max RNBO](https://rnbo.cycling74.com/)   |[Prisma ORM](https://www.google.com/search?q=prisma+orm&sourceid=chrome&ie=UTF-8)  |[Github](https://github.com/)  |  
|[TypeScript](https://www.typescriptlang.org/)  |[PostgreSQL](https://www.postgresql.org/)   |  |  
|[Web Audio](https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-onstatechange)  |  |  