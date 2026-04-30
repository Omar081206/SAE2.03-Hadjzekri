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
  
  let isFavorite = false; 
  
  for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].id == data.id) {
          isFavorite = true; 
      }
  }

  let favoriteHandler = "";
  let favoriteText = "";

  if (isFavorite) {
    favoriteHandler = "C.handlerRemoveFavorite('" + data.id + "')";
    favoriteText = "Enlever des favoris";
  } else {
    favoriteHandler = "C.handlerAddFavorite('" + data.id + "')";
    favoriteText = "Ajouter aux favoris";
  }
  
  html = html.replaceAll("{{favoriteHandler}}", favoriteHandler);
  html = html.replaceAll("{{favoriteText}}", favoriteText);
  return html;
};

export { MovieDetail };
