"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ("Сколько фильмов вы уже посмотрели?","");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

 function rememberMyFilms(){
     for (let i = 0; i < 2; i++) {
         const a = prompt ("Один из последних просмотренных фильмов?",""),
             b = prompt ("На сколько оцените его?", "");

         if ( a != null && b != null && a !== "" && b !== "" && a.length <50) {
             personalMovieDB.movies[a] = b;
             console.log("done");
         } else {
             alert ("где то пустая строка, повторим!");
             console.log ("error");
             i--;
         }
     }
 }
rememberMyFilms();

    function detectedPersonalLevel(){
        if ( personalMovieDB.count < 10) {
            console.log("Просмотрено мало фильмов")}
        else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("вы классический зритель")}
        else if (personalMovieDB.count >= 30 ) {
            console.log("Вы киноман")}
        else {
            console.log("ничего нет")
        }
    }
    detectedPersonalLevel();

    function showMyDb (hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    }
    showMyDb(personalMovieDB.privat);

function writeForGenres (){
    for (let i = 1; i <=3; i++){
        const genre = prompt(`Ваш любимый жанр по порядку ${i}`);
        personalMovieDB.genres[i -1] = genre;
    }
}
writeForGenres();



