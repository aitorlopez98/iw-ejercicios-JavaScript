let cuenta_corriente = {
    saldo_inicial: 1500,
    compras: -300,
    alquiler: -800,
};

function suma(){
    let resultado = 0;
    for (m in cuenta_corriente){
        resultado += cuenta_corriente[m];
    };
    return resultado;
}

console.log(suma(cuenta_corriente));
