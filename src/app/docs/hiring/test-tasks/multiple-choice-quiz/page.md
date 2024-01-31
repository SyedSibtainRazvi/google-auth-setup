---
title: Multiple Choice Quiz
nextjs:
  metadata:
    title: Multiple Choice Quiz
    description: Maultiple Choice Quiz
---

This interview problem is meant to be tackled as multiple levels over two days.

Your task would be evaluated considering the following 5 levels:
1. API design
2. Data modeling
3. Writing business logic
4. Creating a UI
5. Deployment

## Requirement specification
To complete this round of the interview process, you are expected to complete the following user stories. For each user story, make sure you create a git commit/branch. The reviewer would be interested in understanding the progression of the code over time.

### User story 1
As a new user, I should be able to register using my email and password

### User story 2
As a registered user, I should be able to log in and log out

### User story 3
As a logged in user, I should be able to create a quiz containing several multiple choice questions

**Expected steps:**
1. Provide an html form for quiz
2. Author can name the quiz, and add questions one by one
3. For each question, author should add 4 options, and assign a score for it to be used during valuation
4. Provide a sharable URL when quiz is created

### User story 4
As an anonymous user, I should be able to view and attend the quiz via the shared URL

### User story 5
As a user taking the shared quiz, I should be able to submit the quiz and see my score instantly.

## Deployment
When all of the above user stories are completed, deploy the app to Heroku or any cloud instance. Please provide the URL to the hosted application for us to review, when submitting the task.

## Bonus
1. Using React for UI
2. App is dockerised
3. Good test coverage
4. Github actions configured for CI/CD
