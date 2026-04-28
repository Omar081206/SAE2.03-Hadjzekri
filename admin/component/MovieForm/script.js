let templateFile = await fetch('./component/MovieForm/template.html');
let template = await templateFile.text();
let templateLiFile = await fetch('./component/MovieForm/templateLi.html');
let templateLi = await templateLiFile.text();


let MovieForm = {};

MovieForm.format = function(data, handler){
    let html= template;
    html = html.replace('{{handler}}', handler);
    
    let htmlList = "";
    for(let card of data){
        let li = templateLi;
        li = li.replaceAll("{{value}}", card.id);
        li = li.replaceAll("{{name}}", card.name);
        htmlList += li;
    }

    html = html.replaceAll("{{ListCategorie}}", htmlList);
    return html;
}


export { MovieForm };

