

/**document.getElementById('button').onclick = function() {console.log("capturamos el evento click")
document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS"}


document.addEventListener('click', function () {
    console.log("hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS;";
} )*/

/*document.getElementById('button').addEventListener('click', function () {
    console.log("hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en JS;";
} )

document.getElementById('button-color').addEventListener('click', function () {document.body.style.backgroundColor = '#FF0000';
});

document.getElementById('button-default').addEventListener('click', function () {document.body.style.backgroundColor = 'blue';
    
} )*/

document.getElementById('button-ocultar').addEventListener('click', function () { document.getElementById('large_img').style.display = 'none'; }) 

function bigImg(x) {
  x.style.height = "128px";
  x.style.width = "128px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}


