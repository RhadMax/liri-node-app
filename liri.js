require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var spotify = new Spotify({
//     id: process.env.SPOTIFY_ID,
//     secret: process.env.SPOTIFY_SECRET
// });
var moment = require("moment");
var axios = require("axios");
var fs = require("fs");

var input = process.argv.slice(3).join(" ");
console.log("You searched for: " + input)
var command = process.argv[2];

function liri() {
    // console.log("liri running with input: "+ input+" and command: " +command)
    if (command === "spotify-this-song") {
        if (input === "") {
            input = "The Sign"
        }
        spotify.search({ type: 'track', query: input }, function (err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            var items = data.tracks.items
            var results = [];
            for (var i = 0; i < items.length; i++) {
                const artistName = data.tracks.items[i].album.artists[0].name;
                const songName = data.tracks.items[i].name;
                const songUrl = data.tracks.items[i].preview_url;
                const songAlbum = data.tracks.items[i].album.name
                // console.log(data.tracks.items[0])
                var result = "----- \n Artist: " + artistName + "\n Song: " + songName + "\n Preview URL: " + songUrl + "\n Album: " + songAlbum + "\n -----"
                console.log(result);
                results.push(result);
            }
            logger(command,input,results)
        });
    }
    if (command === "movie-this") {
        if (input === "") {
            input = "Mr. Nobody"
        }
        var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
        axios.get(queryUrl).then(
            function (response) {
                console.log(response.data.Ratings[1])
                var result = "----- \n Title: " + response.data.Title + "\n Released: " + response.data.Released + "\n IMDB Rating: " + response.data.Ratings[0].Value + "\n Rotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\n Country of Production: " + response.data.Country + "\n Language(s): " + response.data.Language + "\n Plot: " + response.data.Plot + "\n Actors: " + response.data.Actors + "\n -----";
                console.log(result)
                logger(command,input,result);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    if (command === "concert-this") {
        var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
        axios.get(queryUrl).then(
            function (response) {
                // console.log("concert-this request received")
                // console.log(response.data[0]);
                const data = response.data;
                var results = []
                for (var i = 0; i < data.length; i++) {
                    const venue = data[i].venue.name;
                    const city = data[i].venue.city;
                    const country = data[i].venue.country;
                    const date = moment(data[i].datetime, "YYYY-MM-DD").format("MM/DD/YYYY");
                    var result = "-----\n Venue: " + venue + "\n Location: " + city + ", " + country + "\n Date: " + date + "\n";
                    console.log("-----\n Venue: " + venue + "\n Location: " + city + ", " + country + "\n Date: " + date);
                    results.push(result);
                }
                logger(command,input, results)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    if (command === "do-what-it-says") {
        fs.readFile("random.txt", "utf8", function (error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",");
            command = dataArr[0];
            input = dataArr[1];
            input = input.split('"').join('');
            console.log(command, input);
            liri();
        });
    }
}

function logger(command, input, result) {
    fs.appendFile("log.txt", "------------------------------\r\n Performed command: "+command+ "\r\n Searched for: "+input+"\r\n Found results: \r\n"+result+"\r\n------------------------------\r\n", function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

liri();
//Make it so liri.js can take in one of the following commands:
// concert-this
// node liri.js spotify-this-song 
// node liri.js movie-this
// do-what-it-says


// What Each Command Should Do

// node liri.js concert-this <artist/band name here>

// This will search the Bands in Town Artist Events API ("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp") for an artist and render the following information about each event to the terminal:

// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")

// node liri.js spotify-this-song '<song name here>'

// This will show the following information about the song in your terminal/bash window

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from

// If no song is provided then your program will default to "The Sign" by Ace of Base.