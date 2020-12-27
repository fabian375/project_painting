var btn;
btn = document.getElementById("btn-del-first");

btn.addEventListener("click", function deletefirst() {

    document.getElementById("image-left").src = "images/sin_imagen.png";
});

var btn;
btn = document.getElementById("btn-del-second");

btn.addEventListener("click", function deletesecond() {

    document.getElementById("image-right").src = "images/sin_imagen.png";
});
var btn;
btn = document.getElementById("btn-del-all");

btn.addEventListener("click", function deleteall() {

    document.getElementById("image-left").src = "images/sin_imagen.png";

    document.getElementById("image-right").src = "images/sin_imagen.png";
});
