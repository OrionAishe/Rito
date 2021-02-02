var
height = 0;
result = 0;

document.getElementById("submit").addEventListener("click", Conversor);

function Conversor(){
height = document.getElementById("height");
result = height/1.54;
alert(result);
}