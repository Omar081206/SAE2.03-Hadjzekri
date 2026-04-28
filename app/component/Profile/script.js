let templateFile = await fetch("./component/Profile/template.html");
let template = await templateFile.text();
let templateLiFile = await fetch("./component/Profile/templateLi.html");
let templateLi = await templateLiFile.text();

let Profile = {};

Profile.format = function (data) {
  let html = template;

  let htmlList = "";
  for(let profile of data){
    let li = templateLi;
    li = li.replaceAll("{{id}}", profile.id);
    li = li.replaceAll("{{ProfileImg}}", "../server/images/" + profile.image);
    li = li.replaceAll("{{ProfileTitle}}", profile.name);
    htmlList += li;
  }

  html = html.replaceAll("{{ProfileList}}", htmlList);
  return html;
  }


;

export { Profile };
