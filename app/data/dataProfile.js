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

DataProfile.add = async function (pdata) {
    let config = {
        method: "POST", 
        body: pdata 
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addprofile", config);
    let data = await answer.json();
    return data;
}

DataProfile.update = async function (pdata) {
    let config = {
        method: "POST", 
        body: pdata 
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=updateprofile", config);
    let data = await answer.json();
    return data;
}

DataProfile.currentProfile = function(pdata, id_profile){
        let currentProfile = null;
        for (let p of pdata) {
        if (p.id == id_profile) {
            currentProfile = p; 
        }
        return currentProfile;
}
}

export { DataProfile };