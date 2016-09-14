async function getMovies(name) {
  var movies = {};
  try {
    let response = await fetch(`http://www.omdbapi.com/?s=${name}`);
    var responseJson = await response.json();
    movies = responseJson.Search;
  } catch(error) {
    movies ={};
    console.log(error);
  }

  console.log("here");
  return movies;
}


// async function getMovies(name) {
//   var movies = {};
//   console.log("here")
//   try {
//     let response = await fetch(`http://www.omdbapi.com/?s=${name}`);
//     var responseJson = await response.json();
//     movies = responseJson.Search;
//   } catch(error) {
//     movies ={};
//     console.log(error);
//   }
//   return movies;
// }

// function getMovies(name) {
//   var movies = {};
//   console.log("here")
//   try {
//     var data = fetch(`http://www.omdbapi.com/?s=${name}`)
//     var responseJson= data.then(response => response.json())
//     responseJson.then(json => {
//       console.log(json.Search);
//       movies = json.Search
//       });
//     console.log(movies)
    
//   } catch(error) {
//     movies ={};
//     console.log(error);
//   }
//   return movies;
// }



export var getMovies = getMovies;