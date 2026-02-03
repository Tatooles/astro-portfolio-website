---
title: "Creating Lifting Log"
description: "My goal with Lifting Log was to create a tool I could use on a daily basis for my lifting hobby, along with teaching myself about modern web development through the creation of a full stack application."
pubDate: "Feb 22 2024"
updatedDate: "Feb 02 2026"
heroImage: "../../assets/barbell.png"
---

My goal with Lifting Log was to create an application I could use on a daily
basis for my lifting hobby, along with teaching myself about modern web
development through first hand experience.

## Current State

Since launching the MVP in early 2024, Lifting Log has evolved significantly
through continuous development and daily personal use. The app now has over 500
commits and numerous feature additions that have transformed it from a basic
workout tracker into a comprehensive lifting tool.

### Key Features

**Workout Sharing** - Added the ability to copy workout details to clipboard,
making it easy to share routines with friends or save backups of favorite
workouts.

**Exercise Management** - Added a dropdown menu system for exercise actions,
improving the overall UX, as well as move up/down functionality within the
workout form, allowing users to reorder exercises easily.

**Enhanced History Tracking** - Added automatic heaviest set and 1RM
calculations for each of the user's exercises, along with displaying the last
performed date for each exercise. Users can now see their best lifts and when
they achieved them.

**UI/UX Overhaul** - Migrated the entire component library to shadcn/ui,
resulting in a more polished and accessible interface. Added proper ARIA labels,
improved keyboard navigation, and reorganized components for better
maintainability.

**Database Optimization** - Removed unnecessary database views and optimized
queries for better performance as the dataset grew with daily use.

The app continues to be actively developed based on my own needs as a daily
user, ensuring features are practical and well-tested in real-world scenarios.

[View the live app →](https://lifting-log.vercel.app) |
[See the code on GitHub →](https://github.com/Tatooles/next-fitness-tracker)

## The Stack

My first step was deciding what technology stack I wanted to use for the
application. I already knew I wanted to use Next.js. A framework growing in
popularity in the industry, it was something I wanted to have experience with.
It was also likely the best choice for the application I was making. It would
allow me to get the app up and running quickly, without much overhead, unlike
more heavier such as Spring Boot or .NET which I had experience with from my day
job. Hosting would also not be an issue with Vercel being the most seamless
option and providing a generous free tier. Typescript was another natural
choice, it provides many advantages in terms of developer experience, as well as
being the industry standard for modern web projects.

Things got more interesting when deciding on a database provider and ORM. After
considering a few options such as Supabase, Firebase, and AWS RDS, I decided on
something more in the middle - Planetscale. Planetscale allows better direct
access to the database than Supabase or Firebase as it is a MySQL database, but
I wouldn't have to worry about the infrastructure unlike using AWS directly.
Planetscale also offered a generous free tier with 1 billion row reads, 10
million row writes, and 5 GB of storage. This would be more than enough barring
a large influx of users.

For auth, I decided to go with Clerk. I figured the setup would be relatively
simple taking advantage of their dev-friendly Next.js SDK and and an easy quick
start in the docs. They also have good integration with auth methods such as
Google, Apple, Github, and standard username + password.

When it came to choosing an ORM, I was initially planning to go with Prisma, as
that was a very popular option at the time of creating this app and paired well
with Planetscale. Just before the point of adding the ORM, I found out about
Drizzle ORM, a brand new Typescript ORM that also has specific integrations with
Planetscale. I decided to give this new tool a shot and although it had it's
bumps, I ultimately enjoyed working with it. I learned a lot from the challenge
of using a tool for which documentation and other online resources were limited.

## Development

Development started with create-next-app and then I added Tailwind and Prettier.
After that came the basic structure of an application. I created a simple layout
with a sidebar, header and footer, landing page, an exercieses page with a list
of workouts, and the form modal to add a new workout. This was all stored
locally with hard coded data as the auth and database had not been hooked up
yet.

### Auth

Auth was the first big hurdle, adding Clerk and setting it up for local dev
within the Next project was easy enough, but configuring the DNS to work in prod
was an entirely different story. Eventually after an email to Clerk support and
setting up another domain, then configuring Gmail auth in GCP, I had auth
working and I had the userId I needed for my database queries.

### Database

Next up was the fun part - hooking up the database to allow my application to
function fully. Updating the Drizzle config to connect to Planetscale was pretty
straightfoward. I set up a simple table and query to verify that everything was
working. Then I had to actually create the tables and begin writing the queries.
Over the course of several pull requests, I built out the core functionality:
implementing the add workout query, followed by get workouts, then delete and
update logic. Each change was a focused addition that brought me closer to a
fully functional app. By late June 2023, I had completed the MVP with full CRUD
operations for workouts.

With the core functionality in place, I deployed the initial version to Vercel
and began using it daily for my own workouts. My personal real-world usage has
driven continuous development and feature additions over the following two
years.

## Reflections

Building Lifting Log from scratch taught me far more than any tutorial or course
could have. The experience of taking an application from initial commit to a
fully deployed MVP provided invaluable lessons about the entire software
development lifecycle. I learned to make architectural decisions with real
tradeoffs - choosing between different database providers, weighing the risks of
using a brand new ORM, and deciding how to structure my data schema for optimal
performance.

Working with newer tools like Drizzle ORM, where Stack Overflow answers were
scarce and documentation was still evolving, forced me to develop stronger
problem-solving skills and read source code directly when answers weren't
readily available. Implementing authentication was also a major learning
experience, as it was my first time working deeply with auth in production - I
learned about OAuth flows, session management, and securing routes. The
challenges I faced - from DNS configuration issues with Clerk to understanding
how to properly structure database queries - were the kinds of real-world
problems that tutorials often gloss over but are crucial to building production
applications.

Most importantly, I learned that shipping something functional is far more
valuable than endlessly planning the perfect architecture. By focusing on the
core features first and deploying early, I had a working product I could
actually use and learn from. This hands-on experience with modern web
technologies like Next.js, TypeScript, and serverless deployment has been
invaluable for my growth as a developer, and the app continues to serve as both
a useful tool and a platform for experimenting with new techniques.
