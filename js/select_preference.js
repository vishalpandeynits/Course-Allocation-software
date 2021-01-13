function selectBranch(){
    var branch = document.getElementById('branch').value;
    console.log(branch);
}

function selectUgPg(){
    var ug_pg = document.getElementById('ug_pg').value;
    console.log(ug_pg);
}

var semBy = {
    UG: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    PG: ['1st', '2nd', '3rd', '4th'],
}

function populateSem(value) {

    var semOptions = "<option value='' disabled selected>Select</option>";
    for (semId in semBy[value]) {
        semOptions = semOptions + "<option>" + semBy[value][semId] + "</option>";
    }
    document.getElementById("semester").innerHTML = semOptions;

}

function selectSem(){
    var sem = document.getElementById('semester').value;
    console.log(sem);
}
