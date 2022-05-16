class Producto{
    constructor(producto){
        this.id = producto.id
        this.nombre = producto.nombre;
        this.cantidad = 1;
        this.precio = producto.precio;
        this.precioTotal = producto.precio;
    }
    agregarUnidad() {
        this.cantidad++;
    }
    
    quitarUnidad() {
        this.cantidad--;
    }
    
    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

const budines = [
    {id: 0,
    nombre: "Budin de limón",
    cantidad: 1,
    precio: 300,
    imagen: "budinLimon.jpg"
    },
    {id: 1,
    nombre: "Budin de frutos rojos",
    cantidad: 1,
    precio: 300,
    imagen: "budinFrutos.jpeg"
    },
    {id: 2,
    nombre: "Budin de chips de chocolate relleno de DDL",
    cantidad: 1,
    precio: 300,
    imagen: "budinChips.jpg"
    },
]

const combos = [
    {id: 3,
    nombre: "Combo dulce",
    cantidad: 1,
    precio: 2000,
    imagen: "combo1.jpeg"
    },
    {id: 4,
    nombre: "Combo desayuno",
    cantidad: 1,
    precio: 2000,
    imagen: "combo2.jpeg"
    },
    {id: 5,
    nombre: "Combo brunch",
    cantidad: 1,
    precio: 2000,
    imagen: "combo3.jpeg",
    },
]






