require("dotenv").config();

var keys = require("./keys.js")
var fs = require("fs");
var request = require("request")
var twitter = require("twitter")
var spotify = require("spotify")
var input = process.argv[2];
var input2 = process.argv[3];

//var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);


// Take in command from terminal
//    * `my-tweets`
//    * `spotify-this-song`
//    * `movie-this`
//    * `do-what-it-says`

switch(input) {
    case "my-tweets": tweets();
    break;

    case "spotify-this-song": spotifySong(input2);
    break;

    case "movie-this": getMovie();
    break;

    case "do-what-it-says": doIt();
    break;
}


// Twitter API function

    // function tweets() {
    //     var params = {screen_name: 'HoffHerr'};
    //     client.get('statuses/user_timeline', params, function(error, tweets, response) {
    //         if (!error) {
    //         console.log(tweets);
    //         for(var i = 0; i < tweets.length; i++) {
    //             console.log(tweets[i].text);
    //             console.log("--------------------------");
    //         }
    //         }
    //     });
    // }


// Spotify API fumction
    
    var spotify = new Spotify({
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
    });
    
    function spotifySong(input2) {
        spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
            if (err) {
              return console.log('Error occurred: ' + err);
            }
           
          console.log(data); 
          });
    } 
    


// OMDB API Function

// function getMovie() {

// // Include the request npm package (Don't forget to run "npm install request" in this folder first!)
//     var request = require("request");

// // Then run a request to the OMDB API with the movie specified
//     request("http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy", function(error, response, body) {

// // If the request is successful (i.e. if the response status code is 200)
//     if (!error && response.statusCode === 200) {

// // Parse the body of the site and recover just the imdbRating
// // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
//     console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//     }
// });


// }

// // Do What it Says Function

// function doIt(){

// }