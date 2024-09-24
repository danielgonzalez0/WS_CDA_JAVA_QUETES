import { Movie, recentMovies } from './data';

const filterByTitle = (movies: Movie[], searchedTitle: string):Movie[] => {

  const title = searchedTitle.toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(title)
  );

  return filteredMovies;
};
console.log("------------------");
console.log("test", filterByTitle(recentMovies, 'test'));
console.log("------------------");
// console.log("test", filterByTitle('recentMovies', 'test'));
// console.log("------------------");
// console.log("number", filterByTitle(recentMovies, 123));
console.log("------------------");
console.log('The great Adventure', filterByTitle(recentMovies, 'The great Adventure'));
console.log("------------------");
console.log('the',filterByTitle(recentMovies, 'The'));
console.log("------------------");
console.log('WORLD',filterByTitle(recentMovies, 'WORLD'));
