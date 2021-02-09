if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
function _(id){
    return document.getElementById(id);
}
// _('register').addEventListener('submit',function(e){
//     var errorStr="";
//     email = _('id_email').value;
//     present = ['cse.nits.ac.in','mech.nits.ac.in','eie.nits.ac.in','ee.nits.ac.in','ece.nits.ac.in','ce.nits.ac.in'];
//     absent = ['_ug','_pg'];
//     present.forEach(element => {
//         if(email.search(element)!==-1){
//             return true;
//         } 
//     })
//     errorStr = "Email Id provided is not valid.";
//     alert(errorStr);
//     _('errors').innerHTML = errorStr;
//     e.preventDefault()
//     return false;
// })