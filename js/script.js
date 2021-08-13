"use strict";
const number0fFilms = +prompt ("Сколько фильмов вы уже посммотрели?");
const personalMovieDB = {
    count:number0fFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false

};

const a = prompt("Один из послдених просмотренных фильмов?",''),
b = prompt('На сколько оцените его?',''),
c = prompt ('Один из послдених просмотренных фильмов?',''),
d = prompt('На сколько оцените его?','');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);