let can1;
let can2;

function sumarConInteres(can1, can2){
    let suma = can1 + can2;
    if(suma <= 10){
        suma += 1;
    }else if (suma > 10){
        suma += 2;
    }
    alert(suma);
}

sumarConInteres(5,7);
sumarConInteres(2,3);