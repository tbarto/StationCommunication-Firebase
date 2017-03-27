# React-Redux example with Firebase including authentication 
Real-time communication example for restaurants. It uses firebase database to enable real-time communication between users and central 'stations'.

## Working Demo
[https://jeogiyo.herokuapp.com/](https://jeogiyo.herokuapp.com/)

## How It's Made
**Tech used:** react js, redux, node js, firebase, webpack, babel, es6, material-ui css

This example uses redux in a react app. Thunk middleware is used to handle asynchronous calls to the firebase database. Material-ui css, which has built-in react components, was used for most of the major css styling.

## Lessons learned
When using protected routes in react, users refreshing a page can be a concern. When a user refreshes a page, an asynchronous call is made to the firebase database, and before it returns, the user is assumed to be logged out and redirected to another page. There has to be a way for an app to either wait for the async call to return before redirecting or check local storage for a token to determine if a user is authenticated. If there are any suggestions to my solution, let me know!

## Use Cases and Screenshots
How do you get your waiter's attention??

![the_ignorant_waiter_185325](https://cloud.githubusercontent.com/assets/9302397/23676251/1bb6bc68-034a-11e7-8c66-cdb72789ae1c.jpg)

Why does your waiter keep coming by when you don't need him??

![rsz_cartoon_waiting](https://cloud.githubusercontent.com/assets/9302397/23676969/5aa2d0f4-034c-11e7-97d0-5ccbf15a9d9a.jpg)

You need an out-dated table pager system like this

![rsz_table_buzzer](https://cloud.githubusercontent.com/assets/9302397/23677277/7ef91a48-034d-11e7-8b7a-371a6f1e008f.jpg)

Or a software version - jeogiyo

![iphone-jeogiyo](https://cloud.githubusercontent.com/assets/9302397/23678361/d0e89352-0351-11e7-8cd4-9a077b718159.png)

![station_full](https://cloud.githubusercontent.com/assets/9302397/23678352/caba8abc-0351-11e7-930c-e8be6ec64bec.png)

## Installing and running it

1. Grab the dependencies:

	npm install

2. Build the applicaiton:

	npm run build

3. Then run the app:

	npm start

## Authors
- Tom Barto




