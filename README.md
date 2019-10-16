# FriendFinder
Friend Finder implements friend matching based on the user's responses to a ten question survey. The user responds to questions with values from 1 (Strongly Disagree) to 5 (Strongly Agree). When the survey is submitted, an existing user record closest to the current user's responses is found and returned. The closest set of user responses is defined as the set with the lowest absolute difference for all ten questions combined.

# Overview
FriendFinder's purpose is to simulate a very basic dating app. The application is implemented using Node.js/Express server on the 
back end and use Materialize framework on the front end.

# Heroku 
FriendFinder is deployed to Heroku. Please check it out here.
https://friendfinder89.herokuapp.com/

# Install
For installation - :
clone this git hub repo: git@github.com:WDuesenberg/FriendFinder.git
cd to FriendFinder in terminal/GitBash
npm install express, path, body-parser

# Application Use
To run the FriendFinder application you must set the 'PORT' environment variable to the value of your choice.
(EX: 8000, 3030, 8080, etc.)
Then while using your Terminal/GitBash, run the this command: node server.js
Terminal/GitBash should respond with the following: Friend Finder app is listening on PORT: 3000(whatever you set as the PORT variable)
Now, you can access the application locally from the browser URL. so in my case, localhost:PORT3000 
