productos = [
    {"id": 0,
    "tipo": "Budin de",
    "sabor": "limón",
    "precio": 300,
    "imagen": "budinLimon.jpg"
    },
    {"id": 1,
    "tipo": "Budin de",
    "sabor": "frutos rojos",
    "precio": 300,
    "imagen": "budinFrutos.jpeg"
    },
    {"id": 2,
    "tipo": "Budin de",
    "sabor": "chips de chocolate",
    "relleno": "dulce de leche",
    "precio": 300,
    "imagen": "budinChips.jpg"
    },
    {"id": 3,
    "tipo": "Combo",
    "sabor": "dulce",
    "precio": 2000,
    "imagen": "combo1.jpeg"
    },
    {"id": 4,
    "tipo": "Combo",
    "sabor": "desayuno",
    "precio": 2000,
    "imagen": "combo2.jpeg"
    },
    {"id": 5,
    "tipo": "Combo",
    "sabor": "brunch",
    "precio": 2000,
    "imagen": "combo3.jpeg",
    },
]

localStorage.setItem('productos',JSON.stringify(productos))
console.log(productos)

const selectType = (type) => {
    return productos.filter((producto) => producto.tipo === type);
};


const budines = selectType('Budin de');
const combos = selectType('Combo');
console.log(budines);


let seccionBudines = document.getElementById('seccionBudines');
let seccionNovedades = document.getElementById('seccionNovedades');

const crearSecciones = ()=>{
    let stockProductos = JSON.parse(localStorage.getItem('productos'));
    for (let i = 0; i < stockProductos.length; i++) {
        let div = document.createElement('div');
        div.className = "card";
        div.innerHTML = stockProductos[i].relleno ? (
                        `<img src="../img/${budines[i].imagen}" alt="Combo1">
                        <h2>${budines[i].tipo} ${budines[i].sabor} relleno de ${budines[i].relleno}</h2>
                        <p class="price" id="price1">$${budines[i].precio}</p>
                        <p><button class="click_1" id="btn1" type="button">Comprar</button></p>`) : 
                        (`<img src="../img/${budines[i].imagen}" alt="Combo1">
                        <h2>${budines[i].tipo} ${budines[i].sabor}</h2>
                        <p class="price" id="price1">$${budines[i].precio}</p>
                        <p><button class="click_1" id="btn1" type="button">Comprar</button></p>`)
        seccionBudines.append(div);
    }
}








if (localStorage.getItem('productos')) {
    crearSecciones();
} else {
    localStorage.setItem('productos',JSON.stringify(productos));
    crearSecciones();
}





