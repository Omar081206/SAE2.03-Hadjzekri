let templateFile = await fetch('./component/UpdateProfile/template.html');
let template = await templateFile.text();
let templateLiFile = await fetch('./component/UpdateProfile/templateLi.html');
let templateLi = await templateLiFile.text();


let UpdateProfile = {};

UpdateProfile.format = function(data, handler){
    let html= template;
    html = html.replace('{{handler}}', handler);
    
    let htmlList = "";
    for(let profile of data){
        let li = templateLi;
        li = li.replaceAll("{{id}}", profile.id);
        li = li.replaceAll("{{profile}}", profile.name);
        htmlList += li;
    }

    html = html.replaceAll("{{ProfileList}}", htmlList);
    return html;
}


export { UpdateProfile };