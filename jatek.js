export function korokletrehoz() {
    let txt = "";

  for (let index = 0; index < 9; index++) {
    txt += `<button class="gomb" id="${index}"></button>`;
  }
  return txt;
}
export function clickevent() {
  const gombok=$('.gomb')
  gombok.on('click',function() {
      
      console.log(this)
  })
}