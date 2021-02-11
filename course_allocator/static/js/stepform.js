function _(id){
    return document.getElementById(id);
}

function preview(){
    _('preUgPg1').innerHTML = _('ug_pg_cc_pre1').value;
    _('preUgPg2').innerHTML = _('ug_pg_cc_pre2').value;
    _('preUgPg3').innerHTML = _('ug_pg_cc_pre3').value;
    _('preUgPg4').innerHTML = _('ug_pg_ec_pre1').value;
    _('preUgPg5').innerHTML = _('ug_pg_ec_pre2').value;
    _('preUgPg6').innerHTML = _('ug_pg_ec_pre3').value;
    _('preCourse1').innerHTML = _('coreCourses_cc_pre1').value;
    _('preCourse2').innerHTML = _('coreCourses_cc_pre2').value;
    _('preCourse3').innerHTML = _('coreCourses_cc_pre3').value;
    _('preCourse4').innerHTML = _('electiveCourses_ec_pre1').value;
    _('preCourse5').innerHTML = _('electiveCourses_ec_pre2').value;
    _('preCourse6').innerHTML = _('electiveCourses_ec_pre3').value;
    _('electiveType4').innerHTML = _('electiveType_pre1').value;
    _('electiveType5').innerHTML = _('electiveType_pre2').value;
    _('electiveType6').innerHTML = _('electiveType_pre3').value;
    _('preSemester1').innerHTML = _('semester_cc_pre1').value;
    _('preSemester2').innerHTML = _('semester_cc_pre2').value;
    _('preSemester3').innerHTML = _('semester_cc_pre3').value;
    _('preSemester4').innerHTML = _('semester_ec_pre1').value;
    _('preSemester5').innerHTML= _('semester_ec_pre2').value;
    _('preSemester6').innerHTML = _('semester_ec_pre3').value;
}

var currentTab = 0;
showTab(currentTab);
function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("tab");
    if(n==3){
        n=2;
    } 
    x[n].style.display = "block";
    if (n == 0) { _("prevBtn").style.display = "none"; } 
    else { _("prevBtn").style.display = "inline"; }

    if (n == (x.length - 1)) { _("nextBtn").innerHTML = "Submit";} 
    else { _("nextBtn").innerHTML = "Next";}
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    if(currentTab==2){preview(); }
    if(currentTab==3){_("preference-form").submit();}
    showTab(currentTab);
}