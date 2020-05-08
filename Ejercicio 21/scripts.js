const tareas = [
    {
        id : 1,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Mikel',
        fecha : '03-10-2020'
    },
    {
        id : 2,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Unai',
        fecha : '12-08-2020'
    },
    {
        id : 3,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Ane',
        fecha : '11-12-2020'
    },
    {
        id : 4,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Nora',
        fecha : '07-06-2020'
    }
];

function crearTabla(tareas){
    let tabla = `
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Descripcion</td>
                    <td>Responsable</td>
                    <td>Fecha</td>
                </tr>
            </thead>
            <tbody>`;

    for (tarea in tareas){
        tabla += crearTarea(tarea.id, tarea.descripcion, tarea.responsable, tarea.fecha);
    }
    tabla += `</tbody></table>`;
    return tabla;
}

function crearTarea(id, descripcion, responsable, fecha){
    return `
        <tr>
            <td>${id}</td>
            <td>${descripcion}</td>
            <td>${responsable}</td>
            <td>${fecha}</td>
        </tr>`;
}

let tabla = crearTabla(tareas);
document.getElementById('content').innerHTML = tabla;
