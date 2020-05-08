let inversiones = {
    fondos: 300,
    oro: 400,
};

function operacion (num){
    for (m in inversiones){
        let resultado = 0;
        resultado = num * inversiones[m];
        console.log(m + ": " + resultado);
    };
};

operacion(2, inversiones);