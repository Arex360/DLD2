var style1 = document.getElementById("input1").style
var style2 = document.getElementById("input2").style
var style3 = document.getElementById("input4").style
style1.position = style2.position = style3.position = "fixed"
style1.left = "300px"
style1.top = "160px" 
style2.top = "220px"
style2.left = "300px"
style3.left = "300px"
style3.top = "380px"

var i1 = document.querySelector("#input1")
var i2 = document.querySelector("#input2")
var i3 = document.querySelector('#input4')
var bulb = document.querySelector("#bulb")
var out = document.querySelector("#input3")
var previous = document.querySelector("#p")
var A = false
var B = false
var C = false
var output = false
previous.addEventListener('click',function(){
    window.location.replace('simulator.html')
})
i1.addEventListener("click",function(){
    if(A == false){
        document.getElementById("input1").innerHTML = "1"
        A = true
 
    }
    else{
       document.getElementById("input1").innerHTML = "0"
       A = false
    }  
})
i2.addEventListener("click",function(){
    if(B == false){
        document.getElementById("input2").innerHTML = "1"
        B = true
 
    }
    else{
       document.getElementById("input2").innerHTML = "0"
       B = false
    }  
})
i3.addEventListener("click",function(){
    if(C == false){
        document.getElementById("input4").innerHTML = "1"
        C = true
 
    }
    else{
       document.getElementById("input4").innerHTML = "0"
       C = false

    }  
})
out.addEventListener('click',function(){
    output = !((A && B) || (A && C))
    if(output)
    bulb.src = "on.png"
    else
    bulb.src = "off.png"
})