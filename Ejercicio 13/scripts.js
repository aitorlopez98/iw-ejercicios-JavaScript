let mierda = {
    nombre: "Web App Industrial",
};

console.log(mierda);

mierda.puerto = 8000;
mierda.hostname = "localhost";

console.log(mierda);

delete mierda.hostname;
console.log(mierda);