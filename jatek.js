export function korokletrehoz() {
    let txt = "";

  for (let index = 0; index < 9; index++) {
    txt += `<button id="${index}"></button>`;
  }
  return txt;
}
