# Unofficial Warband Manager

## Why?

I found that while the Mordheim roster sheet is handsome and compact, it is not the easiest to read, and it doesn't enforce any rules. Also having a digital warband roster was even less practical. This is why I decided to make Unofficial Warband Manager. 

Unofficial Warband Manager provides clear UI, saving warbands into cloud, and enforcing Mordheims rules so your warband is more likely to stay legal. It is also intended to work on mobile and desktop. Unofficial Warband Manager is a non-profit open-source project.

## Contributing to Unofficial Warband Manager

As Unofficial Warband Manager is an open-source projects, contributions are more than welcome. Feel free to clone and/or fork this repository, and make a pull request. Also submitting issues, testing and a lot of other activities are highly welcomed and beneficial. This project is licensed under the highly permissive MIT license.

## Development environment setup 

1. Install Nodejs/npm
2. Clone repo
3. Run "npm ci" in terminal
4. Run "npm start" in terminal
5. App should now start up in localhost:3000
6. Setup Firestore (instructions below)

## Setting up Firestore (document database)

TODO: Add how to setup Firestore locally with Firestore Emulator


## Exporting and importing backups from Firestore

Retrieving Google Cloud Account Credentials
- Visit the Firebase Console
- Select your project
- Navigate to Project Settings (at the time of writing the gear icon button at the top left of the page).
- Navigate to Service Accounts
- Click Generate New Private Key
- Move file to projet root and rename it credentials.json
- run "npm run database:import" or "npm run database:export"

This downloaded json file contains the proper credentials needed for node-firestore-import-export to authenticate.


# React Create app documentation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
