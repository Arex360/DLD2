var btn1 = document.querySelector("#b1")
var btn2 = document.querySelector("#b2")
var btn3 = document.querySelector("#b3")
var btn4 = document.querySelector("#b4")
var btn5 = document.querySelector("#b5")
var btn6 = document.querySelector("#b6")
var btn7 = document.querySelector("#b7")
var btn8 = document.querySelector("#b8")
var back = document.querySelector("#p")
btn1.addEventListener('click',() =>{
    window.location.replace('s1.html')
})
btn2.addEventListener('click',() =>{
    window.location.replace('s2.html')
})
btn3.addEventListener('click',() =>{
    window.location.replace('s3.html')
})
btn4.addEventListener('click',() =>{
    window.location.replace('s4.html')
})
btn5.addEventListener('click',() =>{
    window.location.replace('s5.html')
})
btn6.addEventListener('click',() =>{
    window.location.replace('s6.html')
})
btn7.addEventListener('click',() =>{
    window.location.replace('s7.html')
})
btn8.addEventListener('click',() =>{
    window.location.replace('s8.html')
})
back.addEventListener("click",function(){
    window.location.replace("app.html")
})