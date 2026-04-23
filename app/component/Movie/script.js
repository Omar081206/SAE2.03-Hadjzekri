let templateFile = await fetch("./component/Movie/template.html");
let template = await templateFile.text();
let templateLiFile = await fetch("./component/Movie/templateLi.html");
let templateLi = await templateLiFile.text();

let Movie = {};

Movie.format = function (data) {
  let html = template;
  
  if(data.length == 0){
    return html.replaceAll("{{MovieList}}", "<p>caca</p>");
  }
  else{
  let htmlList = "";
  for(let card of data){
    let li = templateLi;
    li = li.replaceAll("{{MovieImg}}", "../server/images/" + card.image);
    li = li.replaceAll("{{MovieTitle}}", card.name);
    htmlList += li;
  }

  html = html.replaceAll("{{MovieList}}", htmlList);
  return html;
  }


};

export { Movie };
