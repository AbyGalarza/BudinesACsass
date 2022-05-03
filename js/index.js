let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');

let listadoCarrito = document.getElementById('carrito');
let total = document.getElementById('total');

localStorage.setItem('Carrito', 'Total')

let carrito = [];

btn1.onclick = function(){
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

btn2.onclick = function(){
    let precio = document.getElementById('price2').innerText;
    //console.log(precio)
    let position = carrito.findIndex(elem => elem.producto === 'Combo dulce');
    if(position!=-1){
        carrito[position].cantidad = carrito[position].cantidad + 1;
    }else{
        carrito.push({producto: 'Combo dulce', precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

btn3.onclick = function(){
    let precio = document.getElementById('price3').innerText;
    //console.log(precio)
    let position = carrito.findIndex(elem => elem.producto === 'Combo brunch');
    if(position!=-1){
        carrito[position].cantidad = carrito[position].cantidad + 1;
    }else{
        carrito.push({producto: 'Combo brunch', precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

const agregarProductoAlCarrito = (precioProducto, producto)=>{
    let precio = document.getElementById(precioProducto).innerText;
    let position = carrito.findIndex(elem => elem.producto === producto);
    if(position!=-1){
        carrito[position].cantidad = carrito[position].cantidad + 1;
    }else{
        carrito.push({producto: 'Combo brunch', precio:precio, cantidad: 1});
    }
    renderizarElemento()
}

const renderizarElemento = ()=>{
    listadoCarrito.innerHTML = ' ';
    let sumaTotal = 0;
    if(carrito.length > 0){
        for (let index = 0; index < carrito.length; index++) {
            let elemento = document.createElement('div');
            elemento.innerHTML = `<p>
                            Producto: ${carrito[index].producto}
                            Cantidad: ${carrito[index].cantidad}</p>`;
        sumaTotal = sumaTotal + carrito[index].precio * carrito[index].cantidad;
        listadoCarrito.append(elemento);
        total.innerText = `Total a pagar: ${sumaTotal}`;
        }
    }
}

localStorage.setItem('Carrito', );


let click_1 = document.getElementsByClassName('click_1');

click_1.onclick = ()=>{
    Swal.fire({
        text: 'Se agregó al carrito',
        icon: 'success',
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: 'aceptar',
    })
}

fetch('https://www.thecocktaildb.com/')
.then(response => response.json())
.then(json => console.log(json))


