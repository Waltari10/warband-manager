# Unofficial Warband Manager

## Why?

I found that while the Mordheim roster sheet is handsome and compact, it is not the easiest to read, and it doesn't enforce any rules. Also having a digital warband roster was even less practical. This is why I decided to make Unofficial Warband Manager. 

Unofficial Warband Manager provides clear UI, saving warbands into cloud, and enforcing Mordheims rules so your warband is more likely to stay legal. It is also intended to work on mobile and desktop. Unofficial Warband Manager is a non-profit open-source project.

## Contributing to Unofficial Warband Manager

As Unofficial Warband Manager is an open-source projects, contributions are more than welcome. Feel free to clone and/or fork this repository, and make a pull request. Also submitting issues, testing and a lot of other activities are highly welcomed and beneficial. This project is licensed under the highly permissive MIT license.

## Trello board (features/tasks)

https://trello.com/b/dScJQVUE/warband-manager

## Development environment setup 

1. Install Nodejs/npm
2. Clone repo
3. Run "npm ci" in terminal at project folder
4. Run "npm start" in terminal at project folder
5. App should now start up in localhost:3000
6. Setup Firestore (instructions below)

## Setting up Firestore (document database)

<b>This instruction was written on 23.5.2020. Setting up Firestore might have changed since then.</b>

1. Go to https://console.firebase.google.com/ and add a new project.
2. Set name of your choosing
3. Enable google analytics
4. Wait to create project
5. Go to authentication
6. Set-up sign in method
7. Enable email/password and Google sign-in providers
8. Next go to Database tab
9. Select Create database (We want Firestore, not Firebase)
10. Select start in test mode (if you are only setting the project up for yourself)
11. Select database location closest to you
12. Once database is created, click on the gear next to "Project overview"
13. Then click "</>" next to "There are no apps in your project", in order to add web config
14. Add nickname for project of your choosing
15. Copy paste config and paste it into src/utils/firebase.js in your cloned warbandmanager project in the DEVELOPMENT || TEST if clause
16. You should be good to go! See if you can sign up with Google now.


# React Create app documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
