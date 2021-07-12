# player-archive
---
An application that displays information for athletes such as age, role etc. 
The data been fetched from a sample database and was actualized for the completion of a coding challenge. 
 
Implementation time: about 30 hours from scratch.
 
## About this repository
---
This repository consists of a client application:
 
- `backend` - express server written in Typescript, fetching data from json files. Data entries been copied from the given samle APIs and served under /data and /profile routes.

- `client` - React client, written in Typescript. The app is only functional with this specific dataset. 

- Tests
Tests have been implemented for different item types that our application receives from the API.

- Responsive and configurable ui
The application is fully responsive.
Configurable ui for the user(light/dark mode).
Configurable ui for the developer through configUI file with primary and secondary format for purposes like A/B testing. 

- Host and serve the profile data/profile with a nodejs server
- In the production build, the react app been served from the same backend server.
 
- Acceptance criteria:
Type "fabio" in the form, the player with id fabio and its profile are displayed.
Type "giorgio" in the form, a message saying the player is not available is displayed
Type "francesco" in the form, a message saying that you should type a valid player's id is displayed

## Remote Server or Local Docker run (Production build)
---
You need to have [`docker`], [`docker-compose`] installed on the workstation.
```
docker-compose build
docker-compose up
```
- Free ports on localhost 80.
- The application is running on localhost:80.
- The port can be amended from docker-compose-yml.
 
## Run for local development
---
You need to have [`node`] and [`yarn`] installed on the workstation.
- `backend`
```
cd express-server
yarn
yarn dev
```
- `client`
new terminal
```
cd player-archive
yarn
yarn start
```
- Free ports on localhost: 3000.
- The application is running on localhost:3000.
 
## Run the client tests
---
```
cd player-archive
yarn
yarn test
```
