



let arrcard = [
    {
        id:1,
        title: "watch offwhite",
        imageUrl :"image/shoppingcard.png",
        disc:"hand clock stock photos and images available, or search for hand clock icon or woman hand clock to find more great stock photos and pictures.",
        coloe:"offwhite",
    },
    {
        id:2,
        title: "watch black",
        imageUrl :"image/shopping.png",
        disc:"hand clock stock photos and images available, or search for hand clock icon or woman hand clock to find more great stock photos and pictures.",
        coloe:"black",
    },
    {
        id:3,
        title: "watch white",
        imageUrl :'image/shopping2.png',
        disc:"hand clock stock photos and images available, or search for hand clock icon or woman hand clock to find more great stock photos and pictures.",
        coloe:"white",
    },
    {
        id:4,
        title: "watch red",
        imageUrl :'image/shopping4.png',
        disc:"hand clock stock photos and images available, or search for hand clock icon or woman hand clock to find more great stock photos and pictures.",
        coloe:"red",
    },
    {
        id:5,
        title: "watch gray",
        imageUrl :'image/shopping3.png',
        disc:"hand clock stock photos and images available, or search for hand clock icon or woman hand clock to find more great stock photos and pictures.",
        coloe:"gray",
    },
]
let cards = document.querySelector(".cards")

function draw_card(){
    let y = arrcard.map(function(e){
    return `<div class="box">
    <img src=${e.imageUrl}>
    <div class="disk">
        <h2>${e.title}</h2>
        <p>${e.disc}</p>
        <span>color : ${e.coloe}</span>
    </div>
    <div class="fav">
        <button class="btn" onclick='addToCard(${e.id})'>add to card</button>
        <i class="far fa-heart"></i>
    </div>
</div>`
       
    })
    cards.innerHTML = y
}
draw_card()
let card_pro = document.querySelector(".card_pro div")
let num = document.querySelector(".num")
num.style.display = 'none'
// let productArr = []

let productArr  = localStorage.getItem('product')? JSON.parse(localStorage.getItem('product')):[]
if(productArr){
   productArr.map((i)=>{
    card_pro.innerHTML += `<p>${i.title}</p>`
    num.style.display = 'block'
    num.innerHTML =productArr.length
   })
}


    if(localStorage.getItem('name')){
        function addToCard(id){
            findarr = arrcard.find((item)=> item.id == id)
           card_pro.innerHTML += `<p>${findarr.title}</p>`
          
          productArr = [...productArr , findarr]
          localStorage.setItem('product' , JSON.stringify(productArr))
            let plength = document.querySelectorAll(".card_pro div p")
            num.style.display = 'block'
            num.innerHTML = plength.length
        
           }
     }
     else{
         window.location = "index.html"
       
     }



let card_container = document.querySelector(".card_pro")
let icon = document.querySelector(".icon1")
icon.addEventListener('click',function(){
    if(card_pro.innerHTML !=''){
        if(card_container.style.display =='block'){
            card_container.style.display = 'none'
        }
        else{
            card_container.style.display = 'block'
        }
    }
})
////////////

  