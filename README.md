# DineTonight

> One-click random restaurant suggestion for the not-picky eater :)

Since my wife can never decide where she wants to go out to eat - I had to create an elegent solution we can both agree on, so...

I've built a mobile first, MERN web app that picks a highly-rated, (pseudo)random restaurant near your current location with a click of a button.

What else this app does? It lets you select a search radius ( = how much you are willing to travel) and after creating a user account (and logging in) you will be able to store the places you visited/liked and write notes on them describing the experience for your future-self.

## What I used

This web app was created using [React.js](https://reactjs.org/), Node.js & [Express router](https://expressjs.com/en/4x/api.html#router), [Passport.js](http://www.passportjs.org/) (with a custom middleware for user auth), MongoDB & [Mongoose](https://mongoosejs.com/) (ODM).

## Data!

The app uses the user current location telemetry (geolocation from you mobile device / browser) to request the relevant data from popular restaurant rating services ([Zomato](https://developers.zomato.com/api) & [Yelp](https://www.yelp.com/fusion)). Next, the data is re-parsed and aggregated to fit our predetermined parameters (avg-rating, number of votes, distance, etc...) and then displayed to the user (after being shuffled and randomized).

We use [Google Maps & Places](https://developers.google.com/maps/documentation/urls/guide) to display the restaurant location and allow navigation to the restaurant (from your current location) upon clicking on the address link.

The resultant phone number is clickable - you can "click to call" on the number on mobile devices (["tel" URI scheme](https://tools.ietf.org/html/rfc3966)).

## Demo

Deployed to Heroku: [https://dntn.herokuapp.com/](https://dntn.herokuapp.com/)

[![Screenshot Dine-Tonight](https://i.postimg.cc/3RJjVW9P/Screenshot-2018-12-09-Dine-Tonight.png)](https://dntn.herokuapp.com/)

[![iPhone-X Screenshot ](https://i.postimg.cc/d3gxJGx7/iphone-x-screenshot.png)](https://dntn.herokuapp.com/)

### Note

This app is still work-in-progress [WIP] and therefor does not have the full intended functionality (yet).

Currently in development:

- [x] User Auth (passport)
- [x] Database integration

Future development:

- [ ] Additional data sources
- [ ] Statistics
