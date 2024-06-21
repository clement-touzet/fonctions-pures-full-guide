let movies = [];

const addMovie = (movie, movies) => {
  // cette fonction est impure
  return movies.push(movie);
};

movies = addMovie("film 1", movies); // string, [] -> [string]
movies = addMovie("film 1", movies); // string, [string] -> [string, string]
console.log("movies ", movies);
