import {korokletrehoz} from './jatek.js'
$(document).ready(function(){
    foprogram();
    
});
function foprogram() {
    const jatekter=$('#mezo');
    jatekter.html(korokletrehoz());
}
