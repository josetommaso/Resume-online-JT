/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Jose Tommaso",
    "role": "Web Developer",
    "contacts": {
        "mobile": "555-555-555",
        "email": "tommaso_j@hotmail.com",
        "location": "Bristol, United Kingdom",
        "instagram": "tommaso_j",
        "github": "JoseTommaso"
    },
    "welcomeMessage": "Welcome to my online resume",
    "skills": ["Web Developer", "Gaming", "Fast Learning", "Enthusiastic"],
    "biopic": "images/resume_photo.jpg"
};

var education = {
    "schools": [{
            "name": "U.E Calicantina",
            "location": "Maracay, Venezuela",
            "degree": "Bachelor",
            "majors": ["ESRC"],
            "dates": "2007",
            "url": "http://example.com"
        },
        {
            "name": "MAPFRE Venezuela",
            "location": "Caracas, Venezuela",
            "degree": "Insurance Agent Certificate",
            "majors": ["PQ"],
            "dates": "2008 - 2010",
            "url": "http://example.com"
        }
    ],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2017 - present",
        "url": "http://www.udacity.com"
    }],

};

var work = {
    "jobs": [{
            "employer": "MAPFRE Venezuela",
            "title": "Insurance Agent",
            "dates": "2010 - 2016",
            "location": "Maracay, Venezuela",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ipsum non enim temp"
        },
        {
            "employer": "Costumes RUS",
            "title": "Packer",
            "dates": "2015 - 2016",
            "location": "Bristol, United Kingdom",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ipsum non enim tempus dapibus vel eu eros. Vivamus et gravida justo, sed finibus lectus. Vestibulum vestibulum enim nec dolor accumsan vehicula. Sed pulvinar gravida odio non ultricies. Pellentesque ornare augue eleifend, malesuada lorem vitae, sagittis quam. Nulla vitae ipsum facilisis lorem malesuada cursus sed eu felis. In tristique dapibus nunc sed dignissim."
        },
        {
            "employer": "Vitcas ltd",
            "title": "Warehouse Operative",
            "dates": "2016 - 2017",
            "location": "Bristol, United Kingdom",
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ipsum non enim tempus dapibus vel eu eros. Vivamus et gravida justo, sed finibus lectus. Vestibulum vestibulum enim nec dolor accumsan vehicula. Sed pulvinar gravida odio non ultricies. Pellentesque ornare augue eleifend, malesuada lorem vitae, sagittis quam. Nulla vitae ipsum facilisis lorem malesuada cursus sed eu felis. In tristique dapibus nunc sed dignissim."
        }
    ]
};

var projects = {
    "projects": [{
        "title": "Sample Project 1",
        "dates": "2017",
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a ipsum non enim tempus dapibus vel eu eros. Malesuada lorem vitae, sagittis quam. Nulla vitae ipsum facilisis lorem malesuada cursus sed eu felis.",
        "images": [
            "images/json.png",
            "images/javascript.png"
        ]
    }, ]
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedInstagram = HTMLinstagram.replace("%data%", bio.contacts.instagram);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


    $("#header").prepend(formattedName, formattedRole, formattedPic, formattedWelcome);

    $("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedLocation, formattedInstagram, formattedGithub);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {

        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });



};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    });
};

projects.display = function() {
    $("#projects").append(HTMLprojectStart);
    projects.projects.forEach(function(project) {

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        });

    });
};



education.display = function() {
    $("#education").append(HTMLschoolStart);

    education.schools.forEach(function(school) {

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
        $(".education-entry:last").append(formattedSchoolLocation);
        $(".education-entry:last").append(formattedSchoolDates);
        $(".education-entry:last").append(formattedSchoolMajor);
    });
    education.onlineCourses.forEach(function(course) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);

        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedOnlineUrl = HTMLonlineURL.replace("%data%", course.url);

        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        $(".education-entry:last").append(formattedOnlineDates);
        $(".education-entry:last").append(formattedOnlineUrl);
    });
};


$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);




bio.display();
projects.display();
education.display();
work.display();
$("#mapDiv").append(googleMap);

