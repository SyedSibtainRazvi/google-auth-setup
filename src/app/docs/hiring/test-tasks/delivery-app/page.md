---
title: Delivery App
nextjs:
  metadata:
    title: Delivery App
    description: Delivery App
---

This interview problem is meant to be tackled as multiple levels over two days.

This involves 5 levels:

1. API design
2. Data modeling
3. Writing business logic
4. Creating a UI
5. Deployment

## Requirement specification

### User story 1
As a new user, I should be able to register using my email and password

### User story 2
As a registered user, I should be able to log in

### User story 3
As a logged in user, I should be able to create an order for delivery

Steps:

1. Provide pickup address
2. Provide delivery address (select from existing address or create a new address)

### User story 4
As a user who has placed an order, I should get the following live updates:

1. Name, phone number and location of delivery agent
2. Delivery status - "pending pickup", "in transit" or "delivered"

There is a device with the delivery agent which will send HTTP requests to your server
with the above data and status updates.
The server endpoint URLs will be created by you and will be provided to the device manufacturer.

## Levels

For each level, make sure you create a git commit/branch. The reviewer would be interested in understanding the progression of the code over time.

### Level 1. API (Day 1)

Write HTTP endpoints in the server to support the above functionality.
No need for actual business logic.
No need to use a database. Hardcoded data is fine.

### Level 2. Data modeling (Day 1)

Design the database tables and relations to support the user stories. Use postgres or mysql.

### Level 3. Business logic (Day 1)

Write controller logic to make the APIs work with real data from the database.

### Level 4. UI (Day 2)

Create a web UI that makes use of the API endpoints. Bonus points for using React JS.

### Level 5. Deployment (Day 2)

Deploy the app to heroku or any cloud instance.
