let user_name = document.querySelector("#name")
let user_email = document.querySelector("#email")
let user_password = document.querySelector("#password")
let sign_up = document.querySelector("#sign_up")
sign_up.onclick = function(e){
    e.preventDefault()
    if(user_name.value ==='' ){
        user_name.placeholder = "please write your name"
        user_name.focus()
    }
    if(user_email.value ==='' ){
        user_email.placeholder = "please write your email"
        user_email.focus()
    }
    if(user_password.value ==='' ){
        user_password.placeholder = "please write your password"
        user_password.focus()
    }
    else{
        localStorage.setItem("name" , user_name.value)
        localStorage.setItem("email" , user_email.value)
        localStorage.setItem("password" , user_password.value)
        setTimeout(() => {
            window.location = "index.html"
        }, 1000);
    }
   
}
