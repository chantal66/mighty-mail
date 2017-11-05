## Capstone Project: Mighty Mail

## Intro

> A simple and easy way to gather valuable feedback that you can use to help improve your business.

> you can see the live version here [Mighty Mail](https://blooming-atoll-29030.herokuapp.com/)

![Alt text](/Diagrams/Mighty-mail-readme.png)
## Setup

Clone the repo in your terminal:

```
git clone git@github.com:chantal66/mighty-mail.git
```

Navigate to the project with:
```
cd mighty-mail
```
> Note for this project to run properly you need to install the dependencies on the
server and client side.

Install dependencies from root:
```
$ npm install
```

Then for the client side:

```
cd client
```

```
npm install
```

To run the app:

```
npm run dev
```

no need to build static files, everytime we push to heroku there's a script to handle this step.


## Features
- Users can login with their Google Account.
- User can by credits via Stripe checkout.
- Users can create campaigns to gather feedback from their clients.
- Surveys can be send with a bulk list of emails separated with a comma.
- Users can see the results of their campaigns on the Dashboard.
- After users click submit the remaining credits are shown on navbar.

## Stack

React, Redux, Redux Forms, Express, Stripe, Passport, MongoDB and Sendgrid.

## Author

[Chantal Justamond](https://github.com/chantal66)



