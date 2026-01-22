---
title: "Creating Lifting Log"
description: "My goal with Lifting Log was to create a tool I could use on a daily basis for my lifting hobby, along with teaching myself about modern web development through the creation of a full stack application."
pubDate: "Feb 22 2024"
heroImage: "../../assets/barbell.png"
---

My goal with Lifting Log was to create an application I could use on a daily
basis for my lifting hobby, along with teaching myself about modern web
development through first hand experience.

My first step was deciding what technology stack I wanted to use for the
application. I already knew I wanted to user Next.JS. A framework growing in
popularity in the industry, I was some thing I wanted to have experience with.
It was also likely the best choice for the application I was making. It would
allow me to get the app up and running quickly, without much overhead, unlike
more established frameworks such as Spring Boot or .NET which I also used at my
day job. Hosting would also not be an issue with Vercel being the most seamless
option and providing a generous free tier. Typescript was another natural
choice, it provides many advantages in terms of developer experience, as well as
being the industry standard for modern web projects.

Things got more interesting when decuding on a database provider and ORM. After
considering a few options such as Supabase, Firebase, and AWS RDS, I decided on
something more in the middle - Planetscale. Planetscale allows me better direct
access to the database than Supabase or Firebase as it is a MySQL database, but
I wouldn't have to worry about the infrastructure like if I were using AWS
directly. Planetscale also offers a generous free tier with 1 billion row reads,
10 million row writes, and 5 GB of storage. This would be more than enough
barring a large influx of users.

When it came to choosing an ORM, I was initially planning to go with Prisma, as
that was a very popular option at the time of creating this app and paired well
with Planetscale. Just before the point of adding the ORM, I found out about
Drizzle ORM, a brand new Typescript ORM that also has specific integrations with
Planetscale. I decided to give this new tool a shot and although it had it's
bumps, I ultimately enjoyed working with it. I learned a lot from the challenge
of using a tool for which documentation and other online resources were limited.

Development started with create-next-app and then I added Tailwind and Prettier.
After that came the basic structure of an application. I created a simple layout
with a sidebar, header and footer. I countinued by adding the structure for what
I thought the app should look like, a landing page, an exercieses page with a
list of workouts, and the form modal to add a new workout. This was all stored
locally with hard coded data as the auth and database had not been hooked up
yet. Auth was the first big hurdle, adding Clerk and setting it up for local dev
within the Next project was easy enough, but configuring the DNS to work in prod
was an entirely different story.

// New paragraph about setting up auth, had to talk with support, buy a new
domain to get things to work.

// Paragraph about Planetscale and Drizzle

...

...

// Paragraph about next steps, maybe mention Planetscale issues
