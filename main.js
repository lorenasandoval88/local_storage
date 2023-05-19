var box = document.querySelector('input')

var header = document.querySelector("h2");
header.innerHTML = localStorage.getItem('value')

box.addEventListener('keyup', display)

function display(){
        console.log(box.value)
        localStorage.setItem('value',box.value)
        //header.innerHTML = box.value;
        header.innerHTML = localStorage.getItem('value')
}

