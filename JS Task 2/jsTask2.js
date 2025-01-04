let txt= document.getElementById("txt");
let fontSizeSelector = document.getElementById("fontSizeSelector");
let fontfamily = document.getElementById("fontfamily");



 
function msg1(greeting){
  greeting.innerHTML= "Can I Help You ? "
}


function msg2(greeting2){
  greeting2.innerHTML= "Hello World !!!"
}





fontSizeSelector.addEventListener("change", function () {
  txt.style.fontSize = fontSizeSelector.value;
});


fontfamily.addEventListener("change", function () {
  txt.style.fontFamily = fontfamily.value;


});



function italic(){
  txt.style.fontStyle= "italic"
}

function bold(){
  txt.style.fontWeight= "bold"
}

function underline(){
  txt.style.textDecoration= "underline"
}













