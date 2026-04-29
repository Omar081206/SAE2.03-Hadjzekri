let templateFile = await fetch("./component/MovieDetail/template.html");
let template = await templateFile.text();

let MovieDetail = {};

MovieDetail.format = function (data) {
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
  return html;
};

export { MovieDetail };
