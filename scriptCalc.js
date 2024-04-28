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


