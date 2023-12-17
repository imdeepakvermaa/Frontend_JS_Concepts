// using bind method 👇

// let favSongs = function(songname , artistname) {
//     console.log("Favourite song : " + songname + " by " + artistname );
// }

// let output = favSongs.bind(this,"Galat Karam");
// output("Panther and Raga");

// using Closures 👇

let favSongs = function (songname) {
  return function (artistname) {
    console.log("Favourite song : " + songname + " by " + artistname);
  };
};

let output = favSongs("Galat Karam");
output("Panther and Raga");
