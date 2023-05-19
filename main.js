var box = document.querySelector('input')
console.log(box)
var header = document.querySelector("h2");



console.log(box)

window.onload=function(){

box.addEventListener('keyup', function(){
    console.log("hiii")

    header.innerHTML = box.value;
})
}

