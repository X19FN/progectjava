"use strict";

const numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","");
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt ("Один из последних просмотренных фильмов?",""),
//       b = prompt ("На сколько оцените его?", ""),
//       c = prompt ("Один из последних просмотренных фильмов?",""),
//       d = prompt ("На сколько оцените его?", "");
//
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;



for (let i = 0; i < 2; i++) {
    const a = prompt ("Один из последних просмотренных фильмов?",""),
          b = prompt ("На сколько оцените его?", "");

    if ( a != null && b != null && a != "" && b != "" && a.length <50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        alert ("где то пустая строка, повторим!");
        console.log ("error");
        i--;
    }
}


if ( personalMovieDB.count < 10) {
    console.log("Просмотрено мало фильмов")}
        else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("вы классический зритель")}
        else if (personalMovieDB.count >= 30 ) {
            console.log("Вы киноман")}
    else {
        console.log("ничего нет")
}







console.log(personalMovieDB);




