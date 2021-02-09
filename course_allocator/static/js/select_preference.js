var selectedBranch;

var semBy = {
    UG: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th'],
    PG: ['1st', '2nd', '3rd', '4th'],
}

function re_set(electiveType, semester, courses){
    var reset = "<option disabled selected>Select</option>";
    var resetElectiveType = reset + '<option value="coreElective">Core Elective</option><option value="openElective">Open Elective</option>';
    document.getElementById(electiveType).innerHTML = resetElectiveType;
    document.getElementById(semester).innerHTML = reset;
    document.getElementById(courses).innerHTML = reset;
}

function populateSem(ug_pg, sem, course) {

    ug_pg = document.getElementById(ug_pg).value;
    var semOptions = "<option disabled selected>Select</option>";
    var select = "<option disabled selected>Select</option>"
    for (eachSem in semBy[ug_pg]) {
        semOptions = semOptions + "<option>" + semBy[ug_pg][eachSem] + "</option>";
    }
    document.getElementById(sem).innerHTML = semOptions;
    document.getElementById(course).innerHTML = select;

}

var ceUgCoreCourses = {
    '1st': ['PH101 - Physics',
        'MA101 - Mathematics I',
        'ME101 - Engineering Mechanics',
        'EE101 - Basic Electrical Engineering',
        'HS101 - Communicative English',
        'CE101 - Engineering Graphics & Design',
        'PH111 - Physics Laboratory',
        'EE111 - Basic Electrical Engineering Laboratory',
        'HS111 - Language Laboratory'],

    '2nd': ['CH101 - Chemistry',
        'MA102 - Mathematics II',
        'CS101 - Introduction to Programming',
        'EC101 - Basic Electronics',
        'CE102 - Environmental Science & Engineering',
        'CH111 - Chemistry Laboratory',
        'CS111 - Programming Laboratory',
        'EC111 - Basic Electronics Laboratory',
        'ME111 - Workshop Practice'],

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
    '1st': ['CH101 - Chemistry',
        'MA102 - Mathematics II',
        'CS101 - Introduction to Programming',
        'EC101 - Basic Electronics',
        'CE102 - Environmental Science & Engineering',
        'CH111 - Chemistry Laboratory',
        'CS111 - Programming Laboratory',
        'EC111 - Basic Electronics Laboratory',
        'ME111 - Workshop Practice'],

    '2nd': ['PH101 - Physics',
        'MA101 - Mathematics I',
        'ME101 - Engineering Mechanics',
        'EE101 - Basic Electrical Engineering',
        'HS101 - Communicative English',
        'CE101 - Engineering Graphics & Design',
        'PH111 - Physics Laboratory',
        'EE111 - Basic Electrical Engineering Laboratory',
        'HS111 - Language Laboratory'],

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
    '1st': ['CH101 - Chemistry',
        'MA102 - Mathematics II',
        'CS101 - Introduction to Programming',
        'EC101 - Basic Electronics',
        'CE102 - Environmental Science & Engineering',
        'CH111 - Chemistry Laboratory',
        'CS111 - Programming Laboratory',
        'EC111 - Basic Electronics Laboratory',
        'ME111 - Workshop Practice'],

    '2nd': ['PH101 - Physics',
        'MA101 - Mathematics I',
        'ME101 - Engineering Mechanics',
        'EE101 - Basic Electrical Engineering',
        'HS101 - Communicative English',
        'CE101 - Engineering Graphics & Design',
        'PH111 - Physics Laboratory',
        'EE111 - Basic Electrical Engineering Laboratory',
        'HS111 - Language Laboratory'],

    '3rd': ['EC201 - Electronic Devices',
        'EC202 - Network Analysis & Synthesis',
        'EC203 - Analog Electronic Circuits',
        'EC204 - Signals and Systems',
        'EC221 - Circuit Theory Lab',
        'EC222 - Analog Electronic Circuits Lab',
        'MA201 - Mathematics III',
        'CSxxx - Data Structures and Algorithms',
        'CSxxy - Data Structure Lab'],

    '4th': ['EC205 - Digital Electronic Circuits',
        'EC206 - Analog Communication',
        'EC207 - Control Systems',
        'EC208 - Probability and Random Process',
        'EC209 - Electrical & Electronic Materials',
        'EC210 - Electromagnetic Fields & Wave Propagation',
        'EC223 - Digital Electronics Lab',
        'EC224 - Control Lab',
        'EC225 - Analog Communication Lab'],

    '5th': ['EC301 - Digital Communication',
        'EC302 - Microprocessors & Microcontrollers',
        'EC303 - Analog Integrated Circuits & Technology',
        'EC304 - Digital Signal Processing',
        'EC305 - Measurements and Instrumentation',
        'EC306 - Principles of Optoelectronics and Optical Fibers',
        'EC321 - Microprocessor Lab',
        'EC322 - DSP Lab',
        'EC323 - Digital Communication Lab'],

    '6th': ['EI307 - RF and Microwave Engineering',
        'EI308 - Data Communication and Network',
        'EI309 - VLSI Design',
        'EI310 - Power Electronics',
        'EI324 - Design Lab',
        'EI325 - Data & Optical Communication Lab',
        'EI326 - VLSI Design Lab'],

    '7th': ['EI401 - Wireless Communication',
        'HSXXX - Engineering Economics / Management Studies'],

    '8th': ['HSXXy - Engineering Economics / Management Studies'],
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
    '1st': ['CH101 - Chemistry',
        'MA102 - Mathematics II',
        'CS101 - Introduction to Programming',
        'EC101 - Basic Electronics',
        'CE102 - Environmental Science & Engineering',
        'CH111 - Chemistry Laboratory',
        'CS111 - Programming Laboratory',
        'EC111 - Basic Electronics Laboratory',
        'ME111 - Workshop Practice'],

    '2nd': ['PH101 - Physics',
        'MA101 - Mathematics I',
        'ME101 - Engineering Mechanics',
        'EE101 - Basic Electrical Engineering',
        'HS101 - Communicative English',
        'CE101 - Engineering Graphics & Design',
        'PH111 - Physics Laboratory',
        'EE111 - Basic Electrical Engineering Laboratory',
        'HS111 - Language Laboratory'],
        
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
    '1st': ['PH101 - Physics',
        'MA101 - Mathematics I',
        'ME101 - Engineering Mechanics',
        'EE101 - Basic Electrical Engineering',
        'HS101 - Communicative English',
        'CE101 - Engineering Graphics & Design',
        'PH111 - Physics Laboratory',
        'EE111 - Basic Electrical Engineering Laboratory',
        'HS111 - Language Laboratory'],

    '2nd': ['CH101 - Chemistry',
        'MA102 - Mathematics II',
        'CS101 - Introduction to Programming',
        'EC101 - Basic Electronics',
        'CE102 - Environmental Science & Engineering',
        'CH111 - Chemistry Laboratory',
        'CS111 - Programming Laboratory',
        'EC111 - Basic Electronics Laboratory',
        'ME111 - Workshop Practice'],

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

var eieUgCoreElectiveCourses = {
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

var eieUgOpenElectiveCourses = {
    '1st': ['jk'],
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
    '1st': ['PH101 - Physics',
        'MA101 - Mathematics I',
        'ME101 - Engineering Mechanics',
        'EE101 - Basic Electrical Engineering',
        'HS101 - Communicative English',
        'CE101 - Engineering Graphics & Design',
        'PH111 - Physics Laboratory',
        'EE111 - Basic Electrical Engineering Laboratory',
        'HS111 - Language Laboratory'],

    '2nd': ['CH101 - Chemistry',
        'MA102 - Mathematics II',
        'CS101 - Introduction to Programming',
        'EC101 - Basic Electronics',
        'CE102 - Environmental Science & Engineering',
        'CH111 - Chemistry Laboratory',
        'CS111 - Programming Laboratory',
        'EC111 - Basic Electronics Laboratory',
        'ME111 - Workshop Practice'],

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

function populateElectiveCourses(selectedBranch, selectedUg_pg, electiveType, selectedSemester, selectedCourse) {
    selectedBranch = document.getElementById('branch').value;
    selectedUg_pg = document.getElementById(selectedUg_pg).value;
    electiveType = document.getElementById(electiveType).value;
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
        if(electiveType == 'coreElective'){
            for (var eachCourses in eieUgCoreElectiveCourses[selectedSemester]) {
                courseOptions = courseOptions + "<option>" + eieUgCoreElectiveCourses[selectedSemester][eachCourses] + "</option>"
            }
        }
        if(electiveType == 'openElective'){
            for (var eachCourses in eieUgOpenElectiveCourses[selectedSemester]) {
                courseOptions = courseOptions + "<option>" + eieUgOpenElectiveCourses[selectedSemester][eachCourses] + "</option>"
            }
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