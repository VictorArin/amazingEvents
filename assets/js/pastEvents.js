/* console.log(document)

let cards = document.getElementsByClassName("card")

console.log(cards.length) */
/* 
        <div class="card" style="width: 18rem;">
            <img src="../images/music_concert.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <div class="price justify-content-around">
                    <h5 class="card-text">Price</h5>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
 */

//let cards = document.getElementsByClassName("cards")

/* 
for(evento of data.events){
    const card= document.createElement("div")
    card.classList ="card"
    card.style.width ="18rem"
    card.innerHTML= '<img src="'${evento.image}'" alt="imagen de evento"></div></div>'
    cards.appendChild(card)    

} */



/*
'<img src="'${evento.image}'" alt="imagen de evento"> <div class="card-body"><h5 class="card-title">'${evento.name}'</h5><p class="card-text">'${evento.description}'</p><div class="price justify-content-around"><h5 class="card-text">'${evento.price}'</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>'
    cards.appendChild(card)   
*/

let cards =document.querySelector("#cards")

for(evento of data.events){
    console.table(evento)
    const card= document.createElement("div")
    card.classList ="card"
    card.style.width ="18rem"
    card.innerHTML = `<img src="${evento.image}" alt="imagen de evento"> <div class="card-body"><h5 class="card-title">${evento.name}</h5><p class="card-text">${evento.description}</p><div class="price justify-content-around"><h5 class="card-text">${evento.price}</h5><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>`
    cards.appendChild(card) 
}
