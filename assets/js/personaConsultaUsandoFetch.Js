//leer un archivo externo tipo json
// javascript object notation : notacion objetos de js

//usamos fetch
fetch("./assets/js/aprendiz.json")
    //parseo de los datos o serealizados
    //.then(function(res) {return res.json()}) 
    //la accion a desarollar  con ese objeto transformado
    //.then(function(res) {console.log(res) })

    .then(res => res.json())
    //acco a realizar con los datos serealizados
    .then(datos => {
    //capturamo el elemento html a interactuar
    let miTabla = document.getElementById("miTabla")
    
    for (let i = 0; i < datos.length; i++) {
       // crear la fila 
       let fila = `
       <tr>
       <th scope="row">${datos[i].id}</th>
       <td>${datos[i].first}</td>
       <td>${datos[i].last}</td>
       <td>${datos[i].handle}</td>
       <td><a href="#"><i class="bi bi-pencil-square"></i></a></td>
        <td><a href="#"><i class="bi bi-trash"></i></a></td>
       </tr>
       `
       //actualizamos el elemento dom (la pagina html especificamente la tabla)
        miTabla.innerHTML += fila
    }}


    )



