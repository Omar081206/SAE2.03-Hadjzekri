let HOST_URL = "..";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataFavorite = {};

DataFavorite.requestfavorites = async function(id_profile){
    let url = "/server/script.php?todo=readfavorites&id_profile=" + id_profile;
    let answer = await fetch(HOST_URL + url);
    let data = await answer.json();
    return data;
}
DataFavorite.addFavorite = async function(id_profile, id_movie) {
    let url = "/server/script.php?todo=addfavorite&id_profile=" + id_profile + "&id_movie=" + id_movie;
    let answer = await fetch(HOST_URL + url);
    let data = await answer.json();
    return data;
}
DataFavorite.removeFavorite = async function(id_profile, id_movie) {
    let url = "/server/script.php?todo=removefavorite&id_profile=" + id_profile + "&id_movie=" + id_movie;
    let answer = await fetch(HOST_URL + url);
    let data = await answer.json();
    return data; 
};

export { DataFavorite };