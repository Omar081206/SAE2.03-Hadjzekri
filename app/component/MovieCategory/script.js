import { Movie } from "../Movie/script.js";

let templateFile = await fetch("./component/MovieCategory/template.html");
let template = await templateFile.text();

let MovieCategory = {};

MovieCategory.format = function(groupedData) {
    let finalHtml = "";
    
    for (let categoryObj of groupedData) {
        
        let html = template; 
        
        let moviesHtml = Movie.format(categoryObj.movies);
        
        html = html.replaceAll("{{titleCategory}}", categoryObj.label);
        html = html.replaceAll("{{movies}}", moviesHtml);
        
        finalHtml += html;
    }
    
    return finalHtml;
};

export { MovieCategory };