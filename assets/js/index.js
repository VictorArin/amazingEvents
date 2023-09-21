const cards = document.getElementById(`cards`)
const checkboxs = document.getElementById(`checkboxs`)
const buscador = document.getElementById(`search`)
let eventos= Array.from(data.events)
cargarCards(eventos,cards)
let categorias = devolverCategorias(eventos)
cargarChecboxs(categorias,checkboxs)

checkboxs.addEventListener("change",()=>{

})


const formulario = document.forms[0]
formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let filtroTexto  = filtrarPorTexto(eventos,buscador.value)
    cargarCards(filtroTexto,cards)
})


function crearCard(evento){
    return `<div class="card" style="width: 18rem;">
                    <img src="${evento.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${evento.name}</h5>
                        <p class="card-text">${evento.description}</p>
                        <div class="price justify-content-around">
                            <h5 class="card-text">${evento.price}</h5>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>`        
}

function cargarCards(eventos, cards){
    let html = ""
    eventos.forEach(element => {
        html+= crearCard(element)
    });
    cards.innerHTML = html
}

function devolverCategorias(eventos){
    return eventos.map(evento => evento.category).filter((category,indice,categories)=> categories.indexOf(category)===indice);
}

function crearCheckbox(categoria){
    return  `<input type="checkbox" class="categoriaCheck" name="${categoria}" id="${categoria}" value="${categoria}"><label class="p-1" for="${categoria}">${categoria}</label>`
}

function cargarChecboxs(categorias, checkboxs) {
    let html = "";
    categorias.forEach(categoria => {
      html += crearCheckbox(categoria);
    });
    checkboxs.innerHTML = html;
}

function filtrarPorTexto(eventos,texto){
    let eventosFiltrados = eventos.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()) || evento.description.toLowerCase().includes(texto.trim().toLowerCase())) 
    return eventosFiltrados
}


filtrarPorCategoria(categorias)
function filtrarPorCategoria(arreglo){
    let checkboxes = Array.from.document.getElementsByName("categoriaCheck")
    let checkSeleccionados = checkboxes.filter(check =>check.checks)  
    let selecionados = checkSeleccionados.map(checkSel =)
}




