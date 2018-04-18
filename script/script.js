var state = false;
function showNav(){
    if(state){
        document.getElementById("mobile").style.height = "0px";
        document.getElementById("mobile-btn").style.backgroundColor = "#fff";
        state = false;
    }
    else{
        document.getElementById("mobile").style.height = "300px";
        document.getElementById("mobile-btn").style.backgroundColor = "#f1f1f1";
        state = true;
    }      
}