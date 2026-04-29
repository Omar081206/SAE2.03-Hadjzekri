let HOST_URL = "https://mmi.unilim.fr/~hadj-zekri1/SAE2.03-Hadjzekri";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};

DataProfile.requestProfiles = async function(id = null){
    let url = "/server/script.php?todo=readprofiles";
    if(id){
        url += "&id=" +id;
    }
    let answer = await fetch(HOST_URL + url);
    let data = await answer.json();
    return data;
}

export { DataProfile };