require("dotenv").config();


var fs = require("fs");



var myMovies = require("./movies.js");



var userCommand=process.argv[2];

var userInput=process.argv.splice(3,process.argv.length).join(' ');



switch (userCommand) {

    case "help":
        console.log("Please type one of these commands\n"+
                    "'movie-this': to search your favorite movie \n"+
                    );
        break;
    case "movie-this":
        myMovies(userInput);
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
 
    default:
        console.log("LIRI doesn't understand that - Please type 'node liri.js help' for more information");
};


function doWhatItSays() {

 
        var dataArr = data.split(",");
        

        } else if(dataArr[0] === "movie-this") {
            var movieName = dataArr[1].slice(1, -1);
            console.log("Movie Name: "+movieName)
            myMovies(movieName);
        }
    });
}