# liri-node-app

Liri Node Application

This is a javascript application which will serve as a lanuage interpretation and recognition interface. It will run in node and will take inputted key words and return results from several API's depending on what is inputted. The function of this project, beyond the scope of providing me the developer with practice in learned skills as well as finding new things out, will be to provide a means for the user to acquire data regarding music venues, music and artist information, and also information regarding movies. 

Liri will consist of several axios blocks of code which will communicate with the appropriate API's to return data depending on the queries inputted by the user. In order for the app to determine what API to request data from there will need to be some conditional blocks into which the axios calls will be nested. Further nested inside of those calls to the API will be the blocks of code which will format the outgoing information heading back to the user, which will be displayed in the terminal for their view.

In order to run the Liri application in the node runtime environment, the user needs to open their terminal in its containing directory and pass arguments using the node command. The application will interpret the command inputted in the third index of arguments, and will interpret the fourth index as the content to search for. In other words, the user must type in "node liri.js <command> <search content>". Search content can be formatted in almost any way and will be parsed, though results may vary depending on the package/API being queried.  
* Accepted commands are:
* **concert-this** ::         Returns upcoming venues where a band will be playing by venue name, venue location, and date of event.
* **spotify-this-song** ::    Returns all results with each result's artist name, song name, a link to a preview sound file, and the album
* **movie-this** ::           Returns data from OMDB with the movie title, release date, IMDB and rotten tomatoes ratings, country of release,                               languages, plot and actors
* **do-what-it-says** ::      Takes text data found in the local file random.txt and passes it into the liri function, returning results if found.





Clearly state the problem the app is trying to solve (i.e. what is it doing and why)
Give a high-level overview of how the app is organized
Give start-to-finish instructions on how to run the app
Include screenshots, gifs or videos of the app functioning
Contain a link to a deployed version of the app
Clearly list the technologies used in the app
State your role in the app development