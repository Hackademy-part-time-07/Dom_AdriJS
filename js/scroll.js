
let nav = document.querySelector('.nav')

window.addEventListener('scroll', ()=>{
    let position= window.scrollY
    if(position >= 65){
        nav.classList.add('nav_event')
    } else{
        nav.classList.remove('nav_event')
    }
})