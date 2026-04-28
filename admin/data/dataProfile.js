let HOST_URL = "https://mmi.unilim.fr/~hadj-zekri1/SAE2.03-Hadjzekri";

let DataProfile = {};

DataProfile.add = async function (pdata) {
  
    let config = {
        method: "POST", 
        body: pdata 
    };
    let answer = await fetch(HOST_URL + "/server/script.php?todo=addprofile", config);
    let data = await answer.json();
    return data;
}

export { DataProfile };
