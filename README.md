# Lumina Learning - Assignment

The front-end movie app is built by React.js and using redux to manage status. Server is built by Node.js, mysql is used as database.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### How to run it

#### Server:

Go to `db.js` file, change the code and connect to your local database

```js
const sequelize = new Sequelize("[database]", "[username]", "[password]", {
  host: "localhost",
  dialect: "mysql",
  logging: (msg) => {
    sqlLogger.debug(msg);
  },
});
```

 Open `Server` folder in terminal and run the commands below

Install the dependency

```
npm install
```

Run the server

```
npm run
```

#### Movie app:

Go to `movie-app` folder

Install the movie app dependency

```
yarn
```

Run the front-end app

```
yarn start
```

And then all done 👍

## Preset

1. There is a `authenticated` column added in data structure to achieve user authentication feature. Authenticated user is able to view other users' favourite movies but can't edit. Only their own favourite movie list can be added and removed.

2. New movie needs to be added via movie OMDb id on the left side input field and press enter to confirm add.

3. The user profile on the right is to switch account.

   ![](https://i.loli.net/2021/03/07/gvbpBWPnIUETtcD.png)

4. All the basic quirements are fulfilled, client side framework and user authentication are added as extra bonus task.

## Reflections

#### Server & Database

1. **Sequelize Used** 

   A promise-based Node.js ORM to produce a repeatable set of queries which allow efficient retrieval of associated data using various fetching strategies.

2. **RESTful API** 

   It makes easier to know the purple of a request.

3. **Log printing feature** 

   Easy for troubleshooting.

4. **Clean and clear file structure.**

#### Front-end app

1. **It meets DRY and KISS principles**

   Once the code used more than twice I've wrapped it up as a separate function to be called at any point when required. The api requests also have been splited to services folder to meet the KISS principle.

2. **Redux used** 

   Easy for data management and api requests, it makes the code easy to read and reduced the complexity.

3. **Material UI libaray** 

   To create a consistency look of an application is important!

#### Next steps

1. A popup or alert to show movie ID exist if user made a duplication.
2. A popup or alert to show a successful message if user removed/added a movie.

