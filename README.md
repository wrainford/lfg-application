# LFG-App

Hosted on Heroku at https://lfg-application.herokuapp.com/


## MVP Scope

We are planning to create a social media type web application based around gaming for gamers. Think Good Reads for Gaming.

Working Title: LFG | Looking For Gamers

### FEATURES:
Our app will require users to login via a Discord account - using the OAuth from Discord Developer Portal and Passport. 
If the user does not have a Discord account they will be able to create one via the login.
The users will be able to upload a list with multiple field of information on their favorite games and games they have played.
Users will be able to rate each game from 1.0 to 10.0.

### Icebox Features:
The users will have their profile picture or avatar set via Discord, or have the ability to upload an image to be their avatar or profile picture.
The users will be able to add reviews and/or comments about the games.
Using the Discord OAuth we will be able to access different information such as:
Games Currently Played
Games Recently Played
Current “Status” (A custom status via the user’s Discord account)
And more.


## User Stories

### Sprint 1
As a user I want to access the application home page from the given URL.
AAU I want to login to the web application using my existing Discord account.
AAU I will be able to create a Discord account in order to login, if I do not currently have one.
AAU I will be able to have a profile with basic bio information about myself within the application. 
AAU I want to list my favorite games or games I have played.
AAU I want to rate games on a 1-10 scale, with one decimal place. Ex. 5.5/10 
AAU I want to add reviews for games I have played.
Sprint 2 (Icebox)

### Sprint 2 (Icebox)
AAU I want to have information from my Discord account be presented on my profile - including things like current game I am playing, recently played games, and current status.
AAU I want to add or update a new profile picture or avatar.
AAU I want to add comments to games I have played and others have played.
AAU I want to add friends who are also users of the application.
AAU I want to create statuses.
AAU I want to reply to others comments on a game.
AAU I want to like other users statuses and games played.
AAU I want to be suggested games I should play next based on my previously played games.

## Technologies Used

EJS   
JavaScript  
Node.js   
Express   
MongoDB Atlas 

Imported Bootstrap via CDN from:  
https://getbootstrap.com/docs/3.4/css/

## Dependencies

bcrypt    
bcryptjs    
body-parser   
discord-oauth2    
dotenv    
ejs   
express   
express-flash   
express-session   
method-override   
mongoose    
morgan    
multer    
passport    
passport-local    
passport-local-mongoose

## Planning Resources

Wireframe, ERD, and Userflow attached as draw.io files

## To Do

* Rebuild app using react.js framework
* Update UI and UI, as well as to add a more involved CSS process.

# Module Notes
* Unused Modules
- Discord Oauth2
While we installed a number of dependencies in order to fullfill the original scope of our project, many of them were not used as of yet. For example, using the discord-oauth2, went unused for this iteration of our app as we ran into some issues and due to time constraints we were unable to implement it into our login/authentication process. This will be a process we will be using for future versions of our app.

- bcrypt vs. bcryptjs
In addition, certain other node modules went used used such as bcrypt, as we opted to use bcryptjs in its place. As a native C++ module, bcrypt would be faster than bcryptjs which is a JS module. Due to time constraints and the need to implement additional steps in the process for password encryption using bcrypt, we opted for bcryptjs. However, this would be another change we would like to make in the future. 

# Password Authentication & Encryption
- Using bcryptjs, we were able to provide our app with the ability to encrypt passwords and have them stored as a hash within the database as opposed to a normal string easily read by anyone in the event of a hack. Using bcrypt we were able to hash the password the user enters, then upon login, the hash is then unhashed and compared to the password the user has entered - either granting them access or not.

