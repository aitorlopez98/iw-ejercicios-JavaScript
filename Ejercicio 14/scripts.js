let mierda = {
    nombre: "Web App Industrial",
};

for (m in mierda){
    console.log(m + ":", mierda[m]);
}

mierda.puerto = 8000;
mierda.hostname = "localhost";

for (m in mierda){
    console.log(m + ":", mierda[m]);
}

delete mierda.hostname;
for (m in mierda){
    console.log(m + ":", mierda[m]);
}