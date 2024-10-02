window.onload = function(){
function simplecal(){
var screen = document.getElementById("screen")
// console.log(screen)
// var buttons =  document.querySelectorAll("button")
var buttons = document.getElementsByClassName("btn") 
for(item of buttons){
    // console.log(item)
   var s = item.querySelector("button")
//    console.log(s.tagName)
   s.addEventListener("click",(e)=>{

// console.log (e.target.className.startsWith("fa"))
if(e.target.className === "fa-solid fa-delete-left"){
    screen.value = screen.value.substring(0,screen.value.length-1)
    
}
   else if((e.target.className === "fa-solid fa-divide") || (e.target.className === "fa-solid fa-xmark")){
        // console.log(e.target.parentNode.value)
        screen.value += e.target.parentNode.value
     }
     else if(e.target.className == "clear"){
        screen.value = ""
    }
    else if (e.target.className == "equal"){
        if(screen.value.length ==2 ){
            // console.log("error")
            screen.value = "Error"
        }
        else{
            screen.value = eval(screen.value)    
        }
    }
     else{
        screen.value+=e.target.value
    }

              
    })
}

}
simplecal()
}