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
        sw = 1
    }
    else{
       document.getElementById("input2").innerHTML = "0"
       B = false
       sw = 0
    }  
})
var result = function(){

}
i = 1

out.addEventListener("click",()=>{
    output = A || (A && B)
})
setInterval(function(){
    if(output == true){
        bulb.src = "on.png"
    }
    else if(output == false){
        bulb.src = "off.png"
    }
},1000)