var style1 = document.getElementById("input1").style
var style2 = document.getElementById("input2").style
style1.position = style2.position = "fixed"
style1.left = "350px"
style1.top = "190px" 
style2.top = "250px"
style2.left = "350px"

var i1 = document.querySelector("#input1")
var i2 = document.querySelector("#input2")
var bulb = document.querySelector("#bulb")
var out = document.querySelector("#input3")
var A = false
var B = false
var output = false
sw = 0
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
out.addEventListener('click',function(){
    output = A || B
    if(output)
    bulb.src = "on.png"
    else
    bulb.src = "off.png"
})