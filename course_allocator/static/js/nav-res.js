document.getElementById("burger").addEventListener('click', showHide);
function showHide(){
    if(document.getElementById("nav-list").style.display == "none"){
        document.getElementById("nav-list").style.display = "flex";
    }
    else{
        document.getElementById("nav-list").style.display = "none"
    }
}
