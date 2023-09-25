const cards = document.getElementById(`cards`)
const checkboxs = document.getElementById(`checkboxs`)
const buscador = document.getElementById(`search`)
const formulario = document.forms[0]
let eventos= Array.from(data.events)
cargarCards(eventos,cards)
let categorias = devolverCategorias(eventos)
cargarChecboxs(categorias,checkboxs)

checkboxs.addEventListener("change",()=>{
    let filtroCheck = filtrarPorCategoria(eventos)
    let filtroTexto  = filtrarPorTexto(filtroCheck,buscador.value) 
    cargarCards(filtroTexto,cards)
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault()
    let filtroCheck = filtrarPorCategoria(eventos)
    let filtroTexto  = filtrarPorTexto(filtroCheck,buscador.value) 
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

function filtrarPorTexto(arreg,texto){
    let eventosFiltradosTex = arreg.filter(evento => evento.name.toLowerCase().includes(texto.toLowerCase()) || evento.description.toLowerCase().includes(texto.trim().toLowerCase())) 
    return eventosFiltradosTex
}

function filtrarPorCategoria(arreg){
    let cateCheckboxes = Array.from(document.getElementsByClassName("categoriaCheck"))
    let checkSeleccionados = cateCheckboxes.filter( check => check.checked)
    let selecionados = checkSeleccionados.map(checkSel => checkSel.value)
    if(selecionados.length == 0){
        return arreg
    }
    let eventosFiltradosCheck = arreg.filter(evento => selecionados.includes(evento.category))
    return eventosFiltradosCheck 
}




