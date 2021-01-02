var close = document.getElementById("closeButton1")
var modal = document.getElementById("s_modal")
var btn = document.getElementById("addNewLog")
var cancel = document.getElementById("cancel1")

btn.addEventListener("click",function(){
    modal.style.display = "block"
})
close.addEventListener("click",function(){
    modal.style.display = "none"
})
cancel.addEventListener("click",function(){
    modal.style.display = "none"
})