
let name = document.querySelector(".name2")
let info_main = document.querySelector(".info")
let logOut = document.querySelector(".log")
if(localStorage.getItem('name')){
    info_main.style.display = "none"
    name.style.display = "flex"
    name.innerHTML = localStorage.getItem('name')

}
logOut.onclick = function(){
    localStorage.clear()
    setTimeout(() => {
        window.location = 'rigester.html'
    }, 1000);
}
