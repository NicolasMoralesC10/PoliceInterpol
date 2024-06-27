//let datos =[9,"juan","arias","juan@gmail.com"]
let datos =[ 
  {
    id: 1234,
    first: "juan",
    last: "perez",
    handle: "juan@gmail.com",
  },
  {
    id: 12,
    first: "luiz",
    last: "monda",
    handle: "Vale@gmail.com",
    eataActivo: false,
  },
  {
    id: 11,
    first: "Elver",
    last: "Gazo",
    handle: "EEMENTIRAA@gmail.com",
  },
  {
    id: 2,
    first: "Jai",
    last: "Burro",
    handle: "OA@gmail.com",
  },
];

//capturamo el elemento html a interactuar
let miTabla = document.getElementById("miTabla");

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
   `;
  //actualizamos el elemento dom (la pagina html especificamente la tabla)
  miTabla.innerHTML += fila;
}
