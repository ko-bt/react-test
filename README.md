# Worker Exercise
The goal of this exercise is to establish the ability to understand a brief and demonstrate general web development skills.\
You are not expected to complete all aspects of the brief, because realistically this would take a few hours to tackle all the problems described below.


## Expectations
Worker is a web app that allows user to manage _workloads_. \
Workloads are jobs which run in the cloud. \
They are created with a complexity number which is just the time it takes to complete. \
A workload will complete with a success or failure status.

The app should allow users to:

- View their workloads
- Create new workloads
- View a workload’s up-to-date status
- Cancel workloads that are incomplete

## The code we have provided
What’s included:

- A Next.js app
- A `mock-service.ts` class which behaves like a backend service. It offers Typescript interfaces of the data the service returns.
- Some functional UI components .
- A functional `Form` component.
- An incomplete `AppController` class which is built with Zustand.

## Problems to solve
We would like for you to demonstrate a range of web development skills by solving a few different problems.

- State management
  - Wire-up the `Form` component so that users can create workloads
  - Give users feedback if there was an error when creating a workload
- Interaction
  - Display an updating count-down of the time remaining until a workload completes
  - Give users the ability to cancel a workload only before it is complete

## Getting started with the code

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
