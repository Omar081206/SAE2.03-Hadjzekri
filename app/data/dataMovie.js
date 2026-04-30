// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};

DataMovie.requestMovies = async function(){
    // fetch permet d'envoyer une requête HTTP à l'URL spécifiée. 
    // L'URL est construite en concaténant HOST_URL à "/server/script.php?direction=" et la valeur de la variable dir. 
    // L'URL finale dépend de la valeur de HOST_URL et de dir.
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmovies");
    // answer est la réponse du serveur à la requête fetch.
    // On utilise ensuite la méthode json() pour extraire de cette réponse les données au format JSON.
    // Ces données (data) sont automatiquement converties en objet JavaScript.
    let data = await answer.json();
    // Enfin, on retourne ces données.
    return data;
}

DataMovie.currentMovies = null;

DataMovie.requestMovieByCategory = async function(min_age){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readmoviesbycategory&min_age=" + min_age);
    let data = await answer.json();
    DataMovie.currentMovies = data;
    return data;
}

DataMovie.requestMovieDetails = async function(id){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readMovieDetails&id=" + id);
    let data = await answer.json();
    return data;
}

DataMovie.clearMovies = function() {
    DataMovie.currentMovies = null;
}

export {DataMovie};
