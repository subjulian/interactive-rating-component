const buttons=document.querySelectorAll(".value")
const enviar=document.getElementById("next")
buttons.forEach(button=>{
    button.addEventListener("focus", function() {
        const rating = this.value;
    
        document.getElementById("rating").textContent = rating;
    
        enviar.addEventListener("click",function(){
            document.getElementById("card1").style.display = "none";
            document.getElementById("card2").style.display = "block";
        })
    });
})

