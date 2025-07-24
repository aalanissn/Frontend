const formulario = document.querySelector('.form');

const campoEntrada = document.querySelector('.input');

const listaUl = document.querySelector('.list');


//Obtener los datos del localStorage

let lista = JSON.parse(localStorage.getItem('lista')) || [];
// console.log(lista);

lista.forEach((tarea) => {
    listaTareas(tarea);
});


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    listaTareas();
});

function listaTareas(tarea){
    //Crear tarea
    let nuevaTarea = campoEntrada.value;
    //LocalStorage
    if(tarea){
        nuevaTarea = tarea.nombre;
    }
    //Se agrega tarea
    const selectLi = document.createElement('li');
    //Local Storage
    if(tarea && tarea.checked){
        selectLi.classList.add('checked');
    }
    //Texto nueva tarea
    selectLi.innerText = nuevaTarea;
    listaUl.appendChild(selectLi);
    campoEntrada.value = '';

//Check botón

const chequearBoton = document.createElement("div");

chequearBoton.innerHTML = `<i class="fas fa-check-square"></i>`;
selectLi.appendChild(chequearBoton);

const trashBoton = document.createElement("div");

trashBoton.innerHTML = `<i class="fas fa-trash"></i>`;
selectLi.appendChild(trashBoton);

//Funcionalidad de tachar tarea
    chequearBoton.addEventListener('click', () => {
        selectLi.classList.toggle('checked');
        actualizarLocalStorage();
    });

//Funcionalidad de eliminar tarea

       trashBoton.addEventListener('click', () => {
        selectLi.remove();
         actualizarLocalStorage();
    });

   

//Función guardar en el localStorage del navegador

function actualizarLocalStorage(){
    const selectList = document.querySelectorAll('li');

    lista = [];

    selectList.forEach((selectLi) => {
        lista.push({
            nombre: selectLi.innerText,
            checked: selectLi.classList.contains('checked'),
        });
    });

     localStorage.setItem("lista", JSON.stringify(lista));
}

   
};


