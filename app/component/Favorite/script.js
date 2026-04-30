let templateFile = await fetch("./component/Favorite/template.html");
let template = await templateFile.text();
let templateLiFile = await fetch("./component/Favorite/templateLi.html");
let templateLi = await templateLiFile.text();

let Favorite = {};

Favorite.format = function(data) {    
    let html = template;
    let htmlList = "";
    
    for (let movie of data) {
        let li = templateLi;
        li = li.replaceAll("{{id}}", movie.id);
        li = li.replaceAll("{{name}}", movie.name);
        htmlList += li;
    }
    
    html = html.replaceAll("{{FavoriteList}}", htmlList);
    return html;
};

export { Favorite };
