## Capstone Project: Mighty Mail

## Intro

> A simple and easy way to gather valuable feedback that you can use to help improve your business.

> You can see the live version here [Mighty Mail](https://blooming-atoll-29030.herokuapp.com/)

> You can take a look at some of the diagrams that helped me achieve this capstone. [Diagrams](/Diagrams)


![Alt text](/Diagrams/Mighty-mail-readme.png?raw=true 'Mighty Mail')


## Setup

Clone the repo in your terminal:

```
git clone git@github.com:chantal66/mighty-mail.git
```

Navigate to the project with:
```
cd mighty-mail
```
> Note for this project to run properly you need to:
>* install the dependencies on the server and client side.
>* create a dev.js file under the config folder and setup your keys like so:

```
module.exports = {
  googleClientID:
  googleClientSecret:
  mongoURI:
  cookieKey:
  stripePublishableKey:
  stripeSecretKey:
  sendGridKey:
  redirectDomain:
}
* Don't forget to add a comma after each key and each key needs to be inside quotes. 
```

Install dependencies from root:
```
$ npm install
```

Then install the client side:

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
- User can buy credits via Stripe checkout.
- Users can create campaigns to gather feedback from their clients.
- Surveys can be sent with a bulk list of emails separated with a comma.
- Users can see the results of their campaigns on the Dashboard.
- After users click submit the remaining credits are shown on navbar.

## Stack

React, Redux, Redux Forms, Express, Stripe, Passport JS, MongoDB and Node JS.

## Author

[Chantal Justamond](https://github.com/chantal66)



