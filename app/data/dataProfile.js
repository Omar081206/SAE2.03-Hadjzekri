let HOST_URL = "https://mmi.unilim.fr/~hadj-zekri1/SAE2.03-Hadjzekri";//"http://mmi.unilim.fr/~????"; // CHANGE THIS TO MATCH YOUR CONFIG

let DataProfile = {};

DataProfile.requestProfiles = async function(){
    let answer = await fetch(HOST_URL + "/server/script.php?todo=readprofiles");
    let data = await answer.json();
    return data;
}