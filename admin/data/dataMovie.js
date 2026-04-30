// URL où se trouve le répertoire "server" sur mmi.unilim.fr
let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataMovie = {};


DataMovie.addmovies = async function (fdata) {
  
    let config = {
        method: "POST", 
        body: fdata 
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addmovies", config);
    let data = await answer.json();
    return data;
}

DataMovie.requestcategories = async function() {
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readcategory");
    let data = await answer.json();
    return data;    
}

export { DataMovie };
