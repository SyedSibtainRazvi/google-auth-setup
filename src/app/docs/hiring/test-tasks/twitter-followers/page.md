---
title: Twitter Followers
nextjs:
  metadata:
    title: Twitter Followers
    description: Twitter Followers
---

This interview problem is meant to be tackled as multiple levels over 2 days.

Your task would be evaluated considering the following 5 levels:
1. API design
2. Data modeling
3. Writing business logic
4. Creating a UI
5. Deployment

## Requirement specification
To complete this round of the interview process, you are expected to complete the following user stories. For each user story, make sure you create a git commit/branch. The reviewer would be interested in understanding the progression of the code over time.

### User Story 1
As a new user, I should be able to signup using my Twitter account.

### User Story 2
As a registered user, I should be able to login and log out.

### User Story 3
As a logged in user, I should be able to see my total number of tweets, total number of followers and total number of users I follow.

### User Story 4
As a logged in user, I should be able to enable/disable weekly report generation for followers statistics. The report then should be generated on every Sunday, starting with one generated instantly once enabled.

It should contain the following details:
* Total number of unfollows in last 7 days
* Username and Profile URL of the accounts that unfollowed

### User Story 5
As a logged in user, I should be able to see all my previous weekly reports which were generated.

### Deployment
When all of the above user stories are completed, deploy the app to Heroku or any cloud instance. Please provide the URL to the hosted application for us to review, when submitting the task.


### Testing:
You are expected to write test cases (RSpec or Minitest) for all of the user stories above.

### Bonus
1. Using React for UI
2. App is dockerised
3. Github actions configured for CI/CD
