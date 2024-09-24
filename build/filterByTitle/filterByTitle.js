"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const filterByTitle = (movies, searchedTitle) => {
    const title = searchedTitle.toLowerCase();
    const filteredMovies = movies.filter((movie) => movie.title.toLowerCase().includes(title));
    return filteredMovies;
};
console.log("------------------");
console.log("test", filterByTitle(data_1.recentMovies, 'test'));
console.log("------------------");
console.log('The great Adventure', filterByTitle(data_1.recentMovies, 'The great Adventure'));
console.log("------------------");
console.log('the', filterByTitle(data_1.recentMovies, 'The'));
console.log("------------------");
console.log('WORLD', filterByTitle(data_1.recentMovies, 'WORLD'));
