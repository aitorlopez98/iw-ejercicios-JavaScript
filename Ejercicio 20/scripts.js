const estudiante = {
    nombre : 'Amaia',
    apellidos : 'Jainaga Urrutia',
    edad : 27,
    email : 'amaia@email.com',
    telefono : '900123456',
}

let content = document.getElementById('content');
content.innerHTML = '<h1>Ejercicio 20: Lista'
 
let title = document.createElement('h2');
title.textContent = 'Datos de estudiante';
content.append(title);

let lista = document.createElement('ul')
content.append(lista);

for (est in estudiante){
    let atr = document.createElement('li');
    atr.textContent =est + ": " + estudiante[est];
    content.append(atr);
}
