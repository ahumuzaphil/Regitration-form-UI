const usernameEl = document.querySelector("#name_el")
const emailEl = document.querySelector("#email_el")
const passwordEl = document.querySelector("#password_el")
const maleEl = document.querySelector("#male")
const femaleEl = document.querySelector("#female")
const submitEl = document.querySelector("#submit")
const firstEl = document.querySelector(".first-el")
const secondEl = document.querySelector(".second-el")
const thirdEl = document.querySelector(".third-el")
const forthEl = document.querySelector(".forth-el")

//console.log(firstEl.innerHTML)
console.log(usernameEl.value)

submitEl.addEventListener("click", submit);

function submit(event) {
    event.preventDefault();
    /*if(usernameEl.value ===''|| emailEl.value ===''|| passwordEl.value === '' || maleEl ===''|| femaleEl ===''){
        //console.log("hello")
        firstEl.innerHTML = "please enter username"
        secondEl.innerHTML = "please enter email"
        thirdEl.innerHTML = "please enter password"
        forthEl.innerHTML = "please enter gender"
        //alert("please enter fields")
        setTimeout(() => firstEl.remove(), 3000)
        setTimeout(() => secondEl.remove(), 3000)
        setTimeout(() => thirdEl.remove(), 3000)
        setTimeout(() => forthEl.remove(), 3000)

    }*/
    if(!usernameEl.value){
        firstEl.innerHTML = "please enter username"
        setTimeout(() => firstEl.remove(), 3000)
        console.log('hello')
    }  if(!emailEl.value){
        secondEl.innerHTML = "please enter email"
        setTimeout(() => secondEl.remove(), 3000)
    } else if(!passwordEl.value){
        thirdEl.innerHTML = "please enter password"
        setTimeout(() => thirdEl.remove(), 3000)
    } else if(!maleEl){
        forthEl.innerHTML = "please enter gender"
        setTimeout(() => forthEl.remove(), 3000)
    }

     else {
        usernameEl.value = '';
        emailEl.value = '';
        passwordEl.value ='';
        
        console.log("success")
    }
    }
