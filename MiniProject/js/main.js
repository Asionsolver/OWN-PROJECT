function change(){
    var x = document.getElementById("light-text");
    
    if(x.innerHTML === "OFF"){
        x.innerHTML = "ON";
    }else{
        x.innerHTML = "OFF";
    }

    var element = document.body;
    element.classList.toggle("dark-mode");
}