/* console.log(document)

let cards = document.getElementsByClassName("card")

console.log(cards.length) */
//! console.table(evento) //muestra los contenidos de la tabla

// let matematica = [12,5,35,45,548,3]
// let matematicaOrdenada = matematica.sort()

// console.log(matematica)
// console.log(matematicaOrdenada)

// console.log(matematica)

let checkboxs = document.querySelector("#checkboxs")
let cards =document.querySelector("#cards")
let categorias
cargarCheckbox()
filtrar()

//*DEVUELVE LAS CATEGORIAS 
// function devolverCategorias(){
//     let auxiliar = []
//     let i = 0

//     for(evento of data.events){
//         auxiliar[i]=evento.category
//         i++
//     }

//     categorias = Array.from(new Set(auxiliar)) 
//     return categorias    
// }

//*CARGA LOS CHECKBOX CON A LAS CATEGORIAS
function cargarCheckbox(){
    categorias = devolverCategorias();
    categorias.forEach(elemento => {
        const input = document.createElement("input")
        const label = document.createElement("label");
        console.log(elemento);
        input.type = "checkbox";
        input.name = `${elemento.toLowerCase()}`;
        input.id = `${elemento.toLowerCase()}`;
        input.value = `${elemento.toLowerCase()}`;
        //input.onclick ="filtra()"
        label.classList = "p-1 checkbox"
        label.for= `${elemento.toLowerCase()}`;
        label.textContent = `${elemento}`;
        checkboxs.appendChild(input);
        checkboxs.appendChild(label);
    });
}

 
//*FILTRAR
function filtrar(){
    checkboxs.addEventListener ("click", (e)=>{
        console.log(e)
    })
}

const miCheck = document.querySelector("#cinema")
miCheck.addEventListener("click",filtrar )



//*CARGAR CARDS

// for(evento of data.events){
//     const card= document.createElement("div")
//     card.classList ="card"
//     card.style.width ="18rem"
//     card.innerHTML = `<img src="${evento.image}" alt="imagen de evento"> <div class="card-body"><h5 class="card-title">${evento.name}</h5><p class="card-text">${evento.description}</p><div class="price justify-content-around"><h5 class="card-text ">${evento.price}</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>`
//     cards.appendChild(card)
// }

function crearTarjeta(elemento){
    return `<div class="card" style="width: 18rem;">
                    <img src="./assets/images/books.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <div class="price justify-content-around">
                            <h5 class="card-text">Price</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`        
}

function cartarTarjetas(arreglo, cards){
    let html = ""
    arreglo.forEach(element=>{
        html+= crearTarjeta(element)
    });
    cards.innerHTML= html
}