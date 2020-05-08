let nombre;

function saludar(nombre){
    if (nombre){
        alert("Hola, " + nombre);
    }else{
        alert("Hola, anonimo");
    }
}

saludar("Lucy");
saludar();