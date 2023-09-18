const cards = document.getElementById(`cards`)
const checkboxs = document.getElementById(`checkboxs`)

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

function cargarCards(data, cards){
    let html = ""
    let eventos = Array.from(data.events) 
    eventos.forEach(element => {
        html+= crearCard(element)
    });
    cards.innerHTML = html
}

function devolverCategorias(data){
    let eventos = Array.from(data.events);
    return eventos.map(evento => evento.category).filter((category,indice,categories)=> categories.indexOf(category)===indice);
}

function crearCheckbox(categoria){
    return `<input type="checkbox" name="${categoria}" id="${categoria}"       value="${categoria}"><label class="p-1" for="${categoria}">${categoria}</label>`
}

function cargarChecboxs(categorias, checkboxs) {
    let html = "";
    categorias.forEach(categoria => {
      html += crearCheckbox(categoria);
    });
    console.log(checkboxs)
    checkboxs.innerHTML = html;
}




cargarCards(data,cards)
let categorias = devolverCategorias(data)
cargarChecboxs(categorias,checkboxs)
