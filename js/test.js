let no_item = document.querySelector('.no_item')
let cards = document.querySelector(".cards");
function draw_card(prod = []){
    let localPro =  JSON.parse(localStorage.getItem("product")) || prod
    if(localPro.length ===0){
        no_item.innerHTML ='There Is No Item'
    }
    let y = localPro.map(function(e){
       
        return `
        <div class="box">
        <img src=${e.imageUrl} alt="">
        <div class="disk">
            <h2>${e.title}</h2>
            <p>${e.disc}</p>
            <span>color : ${e.coloe}</span>
        </div>
        <div class="fav">
        <button class="btn" onclick='removeFromCard(${e.id})'>remove from card</button>
        </div>
    </div>
        `
       
    })
    cards.innerHTML = y
}
draw_card()

function removeFromCard(id){
    let localPro =  localStorage.getItem("product")
    if(localPro){ 
    let items =JSON.parse(localPro)
    let arrfilet = items.filter((task)=>task.id !==id)
    localStorage.setItem('product' , JSON.stringify(arrfilet))
    draw_card(arrfilet)
    
    

}
}
