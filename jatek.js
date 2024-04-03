export function ujjatek() {
  $("#uj").on("click", function () {
    const kivalasztott = $("#valaszt");
    const indexe = kivalasztott.val();
    const jatekter = $("#mezo");
    jatekter.html(korokletrehoz(indexe));
    jatekter.addClass(`mezo${indexe}`);

    const gombok = $(".gomb");
    gombok.on("click", function () {
      console.log(this);
      $(this).toggleClass("sarga");
    });
  });
}
export function korokletrehoz(db) {
  let txt = "";
  for (let index = 0; index < db; index++) {
    txt += `<button class="gomb" id="${index}"></button>`;
  }
  return txt;
}
