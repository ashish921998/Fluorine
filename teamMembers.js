var modal = document.getElementById("simpleModal");

var modalBtn = document.getElementById("addNewTeamMate")

var close = document.getElementById("cancelButton")

modalBtn.addEventListener("click",function(){
    modal.style.display = "block"
})

close.addEventListener("click",function(){
    modal.style.display = "none"
})

window.addEventListener("click",function(e){
    console.log(e)
    if(e.target==modal){
        modal.style.display = "none"
    }
})
