function evento(event){
    event.preventDefault();

    if(event.type == 'click'){
        alert(event.currentTarget);
    }
}


let enlace = document.getElementsByTagName('a');

for (en in enlace){
    enlace[en].addEventListener('click', evento);
}
