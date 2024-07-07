`use strict`

const try_btn = document.getElementById('try_btn')
const overlay = document.getElementById('overlay')
const modal_window = document.getElementById('modal_window')
const close_btn = modal_window.getElementsByClassName('close_btn')

try_btn.addEventListener('click', function(){
    overlay.style.display = 'flex'
    modal_window.style.display = 'flex'
})

const closeModalWindow = () => {
    overlay.style.display = 'none'
    modal_window.style.display = 'none'
}

close_btn[0].addEventListener('click', closeModalWindow)
overlay.addEventListener('click', closeModalWindow)

