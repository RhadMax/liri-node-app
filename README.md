# Liri Node Application

### Purpose
This is a javascript application which will serve as a language interpretation and recognition interface. It will run in node and will take inputted key words and return results from several API's depending on what is inputted. The function of this project, beyond the scope of providing me the developer with practice in learned skills as well as finding new things out, will be to provide a means for the user to acquire data regarding music venues, music and artist information, and also information regarding movies. 

---

### Overview
Liri will consist of several axios blocks of code which will communicate with the appropriate API's to return data depending on the queries inputted by the user. In order for the app to determine what API to request data from there will need to be some conditional blocks into which the axios calls will be nested. Further nested inside of those calls to the API will be the blocks of code which will format the outgoing information heading back to the user, which will be displayed in the terminal for their view.

---

### Usage
In order to run the Liri application in the node runtime environment, the user needs to open their terminal in its containing directory and pass arguments using the node command. The application will interpret the command inputted in the third index of arguments, and will interpret the fourth index as the content to search for. In other words, the user must type in "node liri.js <command> <search content>". Search content can be formatted in almost any way and will be parsed, though results may vary depending on the package/API being queried.  
* Accepted commands are:

  * **concert-this** ::         Returns upcoming venues where a band will be playing by venue name, venue location, and date of event.
  * **spotify-this-song** ::    Returns all results with each result's artist name, song name, a link to a preview sound file, and the album
  * **movie-this** ::           Returns data from OMDB with the movie title, release date, IMDB and rotten tomatoes ratings, country of release,                               languages, plot and actors
  * **do-what-it-says** ::      Takes text data found in the local file random.txt and passes it into the liri function, returning results if found.

---

### Examples
Here are some examples of the application in action:

* Images:
  * [Concert-This Command]()
  * [Spotify-This-Song Command]()
  * [Movie-This Command]()
  * [Log File With Results]()
  * [Test Cases Showing No Input for OMDB/Spotify]()
* Video:
  * [Screencastify Demonstration]()

---
As this application is built purely for the node run-time environment, there is no deployed link. However, please feel free to inspect the code here in the GitHub repository and view the sample images or video above. You can also recreate it locally to be run in node for yourself but will need to create an .env file with the appropriate keys for the API's used (notably, Spotify).

---

### Technologies
This application makes use of the following technologies:

1. Javascript
2. NodeJS
3. GitHub, gitIgnore
4. npmJS Packages
    * nodeFS
    * moment
    * node-spotify-api
    * dotenv
    * axios (OMDB API, BandInTown API)
---

### Credits
This application was developed exclusively by myself, Max Patten. I made use of skills and references taught to and provided to me by the UCSD Extension Full Stack Coding Bootcamp. The instructions for setting up the application as well as a description of its intended functionality were also provided to me by the Bootcamp. The extent of my developing the application was the writing of the liri.js file in its entirity.