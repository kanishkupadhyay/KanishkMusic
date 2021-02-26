let icon=document.getElementById("icon")
let disp=document.getElementById("disp")
let serach=document.getElementById("search")
let ham=document.getElementById("ham")
let isShow=false
ham.addEventListener("click",()=>{
    isShow?Hidenavbar():Shownavbar()
    
})
Shownavbar=()=>{
    disp.style.display="block"
    isShow=true
}
Hidenavbar=()=>{
    disp.style.display="none"
    isShow=false
}

icon.addEventListener("click",()=>{
    isShow? hide():show()
})
show=()=>{
    serach.style.display="block"
    isShow=true
}
hide=()=>{
    serach.style.display="none"
    isShow=false
}