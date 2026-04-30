let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (data, favorites = []) {
  let html = template;
  html = html.replaceAll("{{affiche}}", "../server/images/" + data.image);
  html = html.replaceAll("{{titre}}", data.name);
  html = html.replaceAll("{{desc}}", data.description);
  html = html.replaceAll("{{real}}", data.director);
  html = html.replaceAll("{{année}}", data.year);
  html = html.replaceAll("{{caté}}", data.category_name);
  html = html.replaceAll("{{restri}}", data.min_age);
  html = html.replaceAll("{{id}}", data.id);
  html = html.replaceAll("{{trailer}}", data.trailer);
  
  // Vérifier si le film est dans les favoris
  let isFavorite = favorites.some(fav => fav.id == data.id);
  let buttonText = isFavorite ? "Enlever des favoris" : "Ajouter aux favoris";
  let buttonHandler = isFavorite ? `C.handlerRemoveFavorite('${data.id}')` : `C.handlerAddFavorite('${data.id}')`;
  let favoriteButton = `<button class="moviedetail__btn" onclick="${buttonHandler}">${buttonText}</button>`;
  
  html = html.replaceAll("{{favoriteButton}}", favoriteButton);
  return html;
};

export { MovieDetail };
