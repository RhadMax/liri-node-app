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
var input = process.argv.slice(3).join(" ");
console.log("You searched for: " + input)
const command = process.argv[2];

if (command === "spotify-this-song") {
    spotify.search({ type: 'track', query: input }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var items = data.tracks.items
        for (var i = 0; i <= items.length; i++) {
            const artistName = data.tracks.items[i].album.artists[0].name;
            const songName = data.tracks.items[i].name;
            const songUrl = data.tracks.items[i].preview_url;
            const songAlbum = data.tracks.items[i].album.name
            // console.log(data.tracks.items[0])
            console.log("----- \n Artist: " + artistName + "\n Song: " + songName + "\n Preview URL: " + songUrl + "\n Album: " + songAlbum + "\n -----");
        }
    });
}
if (command === "movie-this") {
    var queryUrl = "http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl).then(
        function (response) {
            // console.log(response.data.Ratings)
            console.log("----- \n Title: " + response.data.Title + "\n Released: " + response.data.Released + "\n IMDB Rating: " + response.data.Ratings[0] + "\n Rotten Tomatoes Rating: " + response.data.Ratings[1] + "\n Country of Production: " + response.data.Country + "\n Language(s): " + response.data.Language + "\n Plot: " + response.data.Plot + "\n Actors: " + response.data.Actors + "\n -----");
        })
        .catch(function (error) {
            console.log(error);
        });
}
if (command === "concert-this") {
    var queryUrl = "https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp";
    axios.get(queryUrl).then(
        function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
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