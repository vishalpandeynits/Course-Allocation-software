var selectedBranch;

function populateUg_pg() {
    var select = "<option disabled selected>Select</option>"
    for (var i = 0; i < 6; i++) {
        document.getElementsByClassName('semester')[i].innerHTML = select;
        document.getElementsByClassName('course')[i].innerHTML = select;
    }
}

var semBy = {
    UG: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    PG: ['1st', '2nd', '3rd', '4th'],
}

function populateSem(value, semester, resetCourses) {

    var semOptions = "<option value='' disabled selected>Select</option>";
    var select = "<option disabled selected>Select</option>"
    for (semId in semBy[value]) {
        semOptions = semOptions + "<option>" + semBy[value][semId] + "</option>";
    }
    document.getElementById(semester).innerHTML = semOptions;
        document.getElementById(resetCourses).innerHTML = select;

}

var ceUgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}
var ceUgElectiveCourses = {
    '1st': ['EEEEE', 'EEEEE', 'EEEEE'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}
var cePgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}
var cePgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var cseUgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}
var cseUgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}
var csePgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}
var csePgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eceUgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eceUgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var ecePgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var ecePgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eeUgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eeUgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eePgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eePgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eieUgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201 - Electrical & Electronic Measurements',
        'EI202 - Analog Electronics',
        'EI203 - Circuits & Networks',
        'EI211 - Measurement Lab',
        'EI212 - Analog Electronics Lab',
        'EI213 - Circuits & Networks Lab',
        'MA201 - Mathematics III',
        'CSxxx - Data Structures',
        'CSxxx - Programming & Data Structures Lab'],

    '4th': ['EI204 - Sensors and Transducers',
        'EI205 - Signals and Systems',
        'EI206 - Control System-I',
        'EI207 - Digital Electronics',
        'EI208 - Power Electronics & Drives',
        'EI214 - Sensor and Transducers lab',
        'EI215 - Control System Lab',
        'EI216 - Digital Electronics Lab',
        'EI217 - Power Electronics Lab'],

    '5th': ['EI301 - Industrial Instrumentation-I',
        'EI302 - Microprocessors & Micro Controllers',
        'EI303 - Biomedical Instrumentation',
        'EI304 - Control System-II',
        'EI305 - Communication & Telemetry',
        'EI311 - Microprocessors & Micro Controllers Lab',
        'EI312 - Biomedical Instrumentation Lab',
        'EI313 - Communication & Telemetry Lab',
        'EI314 - Virtual Instrumentation Lab'],

    '6th': ['EI306 - Industrial Instrumentation-II',
        'EI307 - Process Control Engineering',
        'EI308 - Digital Signal Processing',
        'EI316 - Instrumentation Lab',
        'EI317 - Digital Signal Processing Lab',
        'EI318 - Simulation, Design & Fabrication Lab'],

    '7th': ['EI401 - Analytical & Optical Instrumentation',
        'HSxxx - Managerial Economics'],

    '8th': ['HSxxx - Business Management'],
}

var eieUgElectiveCourses = {
    '1st': ['NA'],
    '2nd': ['NA'],
    '3rd': ['NA'],
    '4th': ['NA'],
    '5th': ['NA'],
    '6th': ['EI321 - IC and VLSI Design',
        'EI322 - Power Plant Instrumentation',
        'EI323 - Computer networks',
        'EI324 - PC Based Instrumentation',
        'EI325 - Electro-Magnetic Field Theory',
        'EI326 - Smart Sensors',
        'EI327 - Optimization techniques'],

    '7th': ['EI421 - Advanced Instrumentation',
        'EI422 - Biomedical signal processing',
        'EI423 - Real Time Embedded Systems',
        'EI424 - IoT based Instrumentation',
        'EI425 - MEMS & Nanotechnology',
        'EI426 - Non Linear control systems',
        'EI427 - Linear Integrated Circuits'],

    '8th': ['EI441 - Advanced Sensors and Signal Processing',
        'EI442 - Piping and Instrumentation',
        'EI443 - Industrial Automation',
        'EI444 - Wireless Communication',
        'EI445 - Adaptive Control',
        'EI446 - Analog Integrated Circuit Design',
        'EI447 - Mechatronics'],
}

var eiePgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var eiePgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var meUgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var meUgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '5th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '6th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '7th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '8th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var mePgCoreCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

var mePgElectiveCourses = {
    '1st': ['MA101', 'PH101', 'ME101'],
    '2nd': ['CH101', 'MA102', 'CS101', 'EC101'],
    '3rd': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
    '4th': ['EI201', 'EI202', 'EI203', 'EI211', 'EI212', 'EI213'],
}

function populateCoreCourses(selectedBranch, selectedUg_pg, selectedSemester, selectedCourse) {
    selectedBranch = document.getElementById('branch').value;
    selectedUg_pg = document.getElementById(selectedUg_pg).value;
    selectedSemester = document.getElementById(selectedSemester).value;

    var courseOptions = "<option value='' disabled selected>Select</option>";

    if (selectedBranch == 'CE' && selectedUg_pg == 'UG') {

        for (var eachCourses in ceUgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + ceUgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'CSE' && selectedUg_pg == 'UG') {

        for (var eachCourses in cseUgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + cseUgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ECE' && selectedUg_pg == 'UG') {

        for (var eachCourses in eceUgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eceUgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EE' && selectedUg_pg == 'UG') {

        for (var eachCourses in eeUgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eeUgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EIE' && selectedUg_pg == 'UG') {

        for (var eachCourses in eieUgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eieUgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ME' && selectedUg_pg == 'UG') {

        for (var eachCourses in meUgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + meUgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'CE' && selectedUg_pg == 'PG') {

        for (var eachCourses in cePgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + cePgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'CSE' && selectedUg_pg == 'PG') {

        for (var eachCourses in csePgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + csePgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ECE' && selectedUg_pg == 'PG') {

        for (var eachCourses in ecePgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + ecePgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EE' && selectedUg_pg == 'PG') {

        for (var eachCourses in eePgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eePgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EIE' && selectedUg_pg == 'PG') {

        for (var eachCourses in eiePgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eiePgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ME' && selectedUg_pg == 'PG') {

        for (var eachCourses in mePgCoreCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + mePgCoreCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    document.getElementById(selectedCourse).innerHTML = courseOptions;
}

function populateElectiveCourses(selectedBranch, selectedUg_pg, selectedSemester, selectedCourse) {
    selectedBranch = document.getElementById('branch').innerHTML;
    selectedUg_pg = document.getElementById(selectedUg_pg).value;
    selectedSemester = document.getElementById(selectedSemester).value;

    var courseOptions = "<option value='' disabled selected>Select</option>";

    if (selectedBranch == 'CE' && selectedUg_pg == 'UG') {

        for (var eachCourses in ceUgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + ceUgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'CSE' && selectedUg_pg == 'UG') {

        for (var eachCourses in cseUgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + cseUgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ECE' && selectedUg_pg == 'UG') {

        for (var eachCourses in eceUgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eceUgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EE' && selectedUg_pg == 'UG') {

        for (var eachCourses in eeUgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eeUgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EIE' && selectedUg_pg == 'UG') {

        for (var eachCourses in eieUgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eieUgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ME' && selectedUg_pg == 'UG') {

        for (var eachCourses in meUgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + meUgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'CE' && selectedUg_pg == 'PG') {

        for (var eachCourses in cePgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + cePgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'CSE' && selectedUg_pg == 'PG') {

        for (var eachCourses in csePgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + csePgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ECE' && selectedUg_pg == 'PG') {

        for (var eachCourses in ecePgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + ecePgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EE' && selectedUg_pg == 'PG') {

        for (var eachCourses in eePgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eePgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'EIE' && selectedUg_pg == 'PG') {

        for (var eachCourses in eiePgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + eiePgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    else if (selectedBranch == 'ME' && selectedUg_pg == 'PG') {

        for (var eachCourses in mePgElectiveCourses[selectedSemester]) {
            courseOptions = courseOptions + "<option>" + mePgElectiveCourses[selectedSemester][eachCourses] + "</option>"
        }
    }

    document.getElementById(selectedCourse).innerHTML = courseOptions;
}