
let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let templateLiFile = await fetch("./component/MovieCategory/templateLi.html");
let templateLi = await templateLiFile.text();

let templateLi2File = await fetch("./component/MovieCategory/templateLi2.html");
let templateLi2 = await templateLi2File.text(); 

let MovieCategory = {};

MovieCategory.format = function (data) {
  let html = template;
  let categoryList = "";

  for(let cate of data){
    let li = templateLi;
    let movielist = "";
    
    for(let movie of cate){
        let li2 = templateLi2;
        li2 = li2.replaceAll("{{MovieImg}}", "../server/images/" + movie.image);
        li2 = li2.replaceAll("{{MovieTitle}}", movie.name);
        movielist += li2;
    }
    
    li = li.replaceAll('{{MovieList}}', movielist);
    


    categoryList += li;
  }

  html = html.replaceAll("{{CategoryList}}", categoryList);
  return html;
}

export { MovieCategory };