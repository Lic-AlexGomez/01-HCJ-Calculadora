let screen = document.getElementById('scren');

function agregar(num) {
    if(screen.value == 0){screen.value ="";}
    screen.value += num;
}
function borrar() {
    screen.value = "0";
}
function calcular(){
    screen.value = eval(screen.value);
}



function raiz(){
    screen.value = Math.sqrt(screen.value);
}
function potencia(){
    screen.value = Math.pow(screen.value,2);
}
function aboluto(){
   
        screen.value = screen.value*-1;  
}

function listeninig(){
    screen.value = screen.value/100;
}