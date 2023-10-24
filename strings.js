let caja = document.getElementById("caja");
let boton = document.getElementById("boton");
const boton1=document.querySelector('#boton1');
boton.onclick = function () {
    caja.style.backgroundColor = "red";
    
};


boton1.addEventListener('click',function(){
    alert('boton clickeado!');
    window.alert("hola josue!!!");
    //boton1.style.backgroundColor = "white";
    console.log('fffff');
});


