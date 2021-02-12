document.getElementById("burger").addEventListener('onclick', showHide);
var x = document.getElementById("nav-list");
function showHide(){
    if(x.style.display != "flex"){
        x.style.display = "flex";
    }
    else{
        x.style.display = "none"
    }
}
