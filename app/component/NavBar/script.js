let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/NavBar/templateProfile.html");
let templateLi = await templateLiFile.text();

let NavBar = {};

NavBar.format = function(hHome, hLogout, profilesData) {
    let html = template;
    
    html = html.replaceAll("{{hHome}}", hHome)
                .replaceAll("{{hLogout}}", hLogout);

    let htmlList = "";
    
    for (let p of profilesData) {
        let li = templateLi;
        li = li.replaceAll("{{ProfileId}}", p.id);
        li = li.replaceAll("{{ProfileName}}", p.name);
        htmlList += li;
    }

    html = html.replaceAll("{{ProfileList}}", htmlList);

    return html;
};

export { NavBar };