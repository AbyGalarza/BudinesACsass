let listadoCarrito = document.getElementById('carrito');
let total = document.getElementById('total');

localStorage.setItem('Carrito', 'Total')

localStorage.setItem('budines',JSON.stringify(budines))
console.log(budines);

localStorage.setItem('combos',JSON.stringify(combos))
console.log(combos);


let seccionBudines = document.getElementById('seccionBudines');
let seccionCombos = document.getElementById('seccionCombos');
 
function crearSeccionBudines (){
    let budines = JSON.parse(localStorage.getItem('budines'));
    for (let i = 0; i < budines.length; i++) {
        let div = document.createElement('div');
        div.className = "card";
        div.innerHTML = 
                        `<img src="img/${budines[i].imagen}" alt="Combo1">
                        <h2>${budines[i].nombre}</h2>
                        <p class="price" id="price1">$${budines[i].precio}</p>
                        <p><button id="btn${budines[i].id}" type="button">Comprar</button></p>`
        seccionBudines.append(div);
        let btnBudin = document.getElementById(`btn${budines[i].id}`);
        btnBudin.onclick = ()=> agregarAlCarrito (budines[i].id);
    }
}

function crearSeccionCombos2(){
    let combos = JSON.parse(localStorage.getItem('combos'));
    combos.forEach(combo => {
        let div = document.createElement('div');
        div.className = "card";
        div.innerHTML = 
        `<img src="img/${combo.imagen}" alt="Combo1">
        <h2>${combo.nombre}</h2>
        <p class="price" id="price1">$${combo.precio}</p>
        <p><button id="btn${combo.id}" type="button">Comprar</button></p>`
        seccionCombos.append(div);
        let btnCombo = document.getElementById(`btn${combo.id}`);
        btnCombo.onclick = ()=> agregarAlCarrito (combos.id);
    });
}

if (localStorage.getItem('budines')) {
    crearSeccionBudines();
} else {
    localStorage.setItem('budines',JSON.stringify(budines));
    crearSeccionBudines();
}

if (localStorage.getItem('combos')) {
    crearSeccionCombos2();
} else {
    localStorage.setItem('combos',JSON.stringify(combos));
    crearSeccionCombos2();
}


let carrito = [];
let precioTotal;

function obtenerPrecioTotal(array){
    return array.reduce((total,elemento) => total + elemento.precioTotal, 0);
}

function agregarAlCarrito (idProducto){
    let productoEnCarrito = carrito.find((elemento) => elemento.id === idProducto);

    if (productoEnCarrito) {
        let index = carrito.findIndex((elemento) => elemento.id === productoEnCarrito.id);

        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    }else{
        carrito.push(new Producto(budines[idProducto]));
    }
    localStorage.setItem("carritoEnStorage",JSON.stringify(carrito));
    imprimirTabla(carrito);
}

function eliminarDelCarrito(id){
    let combo = carrito.find((combo) => combo.id === id);
    let index = carrito.findIndex((element) => element.id === combo.id);

    if (combo.cantidad > 1) {
        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        carrito.splice(index, 1);
    }
}

let tabla = document.getElementById('carrito');
    tabla.innerHTML =
    `<table id= "tablaCarrito" class="table table-striped">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Acción</th>
            </tr>
        </thead>

        <tbody id="bodyTabla"> 

        </tbody>

    </table>`;

    let bodyTabla = document.getElementById('bodyTabla');

    for (let combos of array) {
        let datos = document.createElement("tr");
        datos.innerHTML =
        `<td>${combos.nombre}</td>
        <td>${combos.cantidad}</td>
        <td>${combos.precioTotal}</td>
        <td><button id="eliminar${combos.id}" class="btn">Eliminar</button></td>`;
        bodyTabla.appendChild(datos);

        let botonEliminar = document.getElementById(`eliminar${combos.id}`);
        botonEliminar.onclick = ()=> eliminarDelCarrito(combos.id);
    }

    let accionesCarrito = document.getElementById("acciones-carrito");
    accionesCarrito.innerHTML = `
    <p>Precio total: $${precioTotal} </p>
    <button id="vaciarCarrito" onclick= "eliminarCarrito()" class="btn">Vaciar</button>`

function chequearCarritoEnStorage(){
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));

    if (contenidoEnStorage) {
        for (const objeto of contenidoEnStorage) {
            let combo = new Producto(objeto, objeto.cantidad;
            combos.actualizarPrecioTotal();
            carrito.push(combo);

            imprimirTabla(carrito);
        }
    }
}
btnBudin.onclick = ()=> agregarAlCarrito (budines[i].id){
    let precio = document.getElementById('price1').innerText;
    //console.log(precio)
    let position = carrito.findIndex(elem => elem.producto === 'Combo desayuno');
    if(position!=-1){
        carrito[position].cantidad = carrito[position].cantidad + 1;
    }else{
        carrito.push({producto: 'Combo desayuno', precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

btnCombo.onclick = ()=> agregarAlCarrito (combos.id){
    let precio = document.getElementById('price2').innerText;
    let position = carrito.findIndex(elem => elem.producto === 'Combo dulce');
    if(position!=-1){
        carrito[position].cantidad = carrito[position].cantidad + 1;
    }else{
        carrito.push({producto: 'Combo dulce', precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

const renderizarElemento = ()=>{
    listadoCarrito.innerHTML = '';
    let sumaTotal = 0;
    if(carrito.length > 0){
        for (let index = 0; index < carrito.length; index++) {
            let elemento = document.createElement('div');
            elemento.innerHTML = `<p>
                            Producto: ${carrito[index].producto}
                            Cantidad: ${carrito[index].cantidad}</p>`;
            console.log(carrito[index].cantidad)
            console.log(carrito[index].precio)
            sumaTotal = sumaTotal + (Number(carrito[index].precio.substring(1)) * carrito[index].cantidad);  
            listadoCarrito.append(elemento);
            total.innerText = `Total a pagar: $${sumaTotal}`;  
        }
    }
}



