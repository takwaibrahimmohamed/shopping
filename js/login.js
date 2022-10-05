let user_name = document.querySelector("#name")
let password = document.querySelector("#password")
let sign_in = document.querySelector("#sign_in")
let nameCorrect = localStorage.getItem('name')
let passwordCorrect = localStorage.getItem('password')


sign_in.addEventListener("click" , function(e){
    e.preventDefault()
    if(user_name.value ==='' ){
        user_name.placeholder = "please write your name"
        user_name.focus()
    }
    if( password.value ==='' ){
         password.placeholder = "please write your password"
         password.focus()
    }
    else{
        if(nameCorrect && nameCorrect.trim()  === user_name.value.trim() && passwordCorrect && passwordCorrect.trim()  ===  password.value){

            setTimeout(() => {
                
                window.location = 'first.html'
              
            }, 1000);
        }
        else{
            // alert("rrr")
            if(nameCorrect && nameCorrect.trim()  !== user_name.value){
                console.log("f")
                user_name.value = "name isn't correct"
                user_name.focus()
            }
            if(passwordCorrect && passwordCorrect.trim()  !==  password.value){
                 password.value =''
                 password.placeholder = "please write your password correct"
                 password.focus()
            }
        }
    }
})
