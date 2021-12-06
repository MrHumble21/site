let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// validation form to protect the site from 
const first = document.getElementById('first')
const second = document.getElementById('second')
const btn = document.getElementById('calculate')
const result = document.getElementById('result')
const  user = document.getElementById('user')

first.innerHTML = Math.floor(Math.random()*10)
second.innerHTML = Math.floor(Math.random()*10)




const test =  document.getElementById('test')
btn.addEventListener('click', ()=>{
    correctAnswer = parseInt(first.innerHTML) + parseInt(second.innerHTML)
    
    if (parseInt(user.value) == correctAnswer){
        result.innerHTML = 'correct!'
        test.classList.add('activeee')
    }
    else{
        result.innerHTML = ' you screwed up !!!!!'
    }
    
})