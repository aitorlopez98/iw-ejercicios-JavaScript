let edad = 15;
let resta;
while (edad != "fin"){
    if (edad >= 18){
        alert("Con " + edad + " años puedes votar");
        console.log("Con " + edad + " años puedes votar");
        edad = "fin"
    }else{
        resta = 18-edad;
        alert("Aun te quedan " + resta + " años");
        console.log("Aun te quedan " + resta + " años")
        edad = 50;
        alert("Edad: " + edad)
    }
}
