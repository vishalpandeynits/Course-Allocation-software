function selectBranch(){
    var selectedBranch = document.getElementById('branch').value;
    console.log(selectedBranch);
}

function selectUgPg(){
    var selectedUg_pg = document.getElementById('ug_pg').value;
    console.log(selectedUg_pg);
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
    var SelectedSemester = document.getElementById('semester').value;
    console.log(SelectedSemester);
}

var eieUgCourses = {
    '1st' : ['MA101', 'PH101', 'ME101'],
    '2nd' : ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd' : ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

function populateCourses(branch, ug_pg, semester) {
    if(branch == 'EIE' && ug_pg == 'UG'){
        var courseOptions = "<option value='' disabled selected>Select</option>";
        for (eachCourses in eieUgCourses[semester]){
            courseOptions = courseOptions + "<option>" + eieUgCourses[semester][eachCourses] + "</option>";
        }
        document.getElementById('coreCourse').innerHTML = courseOptions;
    }
}
