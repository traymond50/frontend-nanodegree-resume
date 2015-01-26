
//------------BIOGRAPHY---------------------//
var bio  = {
	"name": "Timothy Raymond",
	"role":"Student",
	"contact":{
		"mobile":"123-456-7890",
		"email": "udacity@email.com",
		"github":"traymond50",
		"twitter":"@udacity",
		"location":"Boston, MA"
	}
	,
	"welcomeMessage":"Hello World",
	"skills":["this","that","other"],
	"biopic": "images/fry.jpg",
	"display":
	function display(){
   
		//TITLE & NAME
		var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
		var formattedName = HTMLheaderName.replace("%data%",bio.name);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		//CONTACT VARIABLES
		var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
		var formattedGithub = HTMLgithub.replace("%data%",bio.contact.github);
		var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
		var formattedLocation = HTMLlocation.replace("%data%",bio.contact.location);
		
		//HEADER CONTACT
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);

		//PIC AND MESSAGE
		var formattedbioPic = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);
		$("#header").append(formattedbioPic);
		$("#header").append(formattedWelcomeMsg);
 		
		//SKILLS
 		$("#header").append(HTMLskillsStart);
 		for(var info in bio.skills)
		{
			var formattedskills = HTMLskills.replace("%data%",bio.skills[info]);
			$("#header").append(formattedskills);
		}	

		//FOOTER CONTACTS
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);	
	}
}

//------------EDUCATION---------------------//
var education  = {
	"schools":[
	{
		"name":"UMass Amherst",
		"location":"Amherst, MA",
		"degree":"BA",
		"major":"English",
		"dates":2004,
		"url":"http://www.umass.edu/"
	}
	,
	{
		"name":"NorthEastern University",
		"location":"Boston, MA",
		"degree":"Paralegal Certificate",
		"major":"Paralegal Certificate",
		"dates":2005,
		"url":"http://www.northeastern.edu/"
	}
	,
	{
		"name":"Harvard Extension School",
		"location":"Cambridge, MA",
		"degree":"Web Technologies Certificate",
		"major":"Web Technologies Certificate",
		"dates":2015,
		"url":"http://www.extension.harvard.edu/"
	}
	]
	,
	"onlineCourses":[
	{
		"title":"Front-End Web Developer Nanodegree",
		"school":"Udacity",
		"date": 2015,
		"url":"https://www.udacity.com/"
	}
	]
	,	
	"display":
	function display(){

	//-----------BRICK AND MORTAR EDUCATION
	for(var school in education.schools)
	{
		//create education entry
		$("#education").append(HTMLschoolStart);	

		//NAME & DEGREE
		var formattedSchoolName = HTMLschoolName
			.replace("#",education.schools[school].url)
			.replace("%data%",education.schools[school].name);	
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedSchoolName + formattedDegree; 
		$(".education-entry:last").append(formattedSchoolDegree);

		//DATES, LOCATION AND MAJOR
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedMajor);
	}
	//----------------------ONLINE EDUCATION
	//ONLINE COURSES HEADER
	$("#education").append(HTMLonlineClasses);	
	for(var school in education.onlineCourses)
	{
		//create education entry
		$("#education").append(HTMLschoolStart);
		//CLASS TITLE AND SCHOOL NAME
		var formattedOnlineTitle = HTMLonlineTitle
			.replace("#",education.onlineCourses[school].url)
			.replace("%data%",education.onlineCourses[school].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[school].school);
		var formattedOnlineTitleAndSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineTitleAndSchool);

		//DATE
		var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[school].date);
		$(".education-entry:last").append(formattedOnlineDate);

		//URL
		var formattedOnlineURL = HTMLonlineURL
			.replace("#",education.onlineCourses[school].url)
			.replace("%data%",education.onlineCourses[school].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
	}
}

//------------WORK---------------------//
var work = {
	"jobs":[
	{
		"employer":"Goodwin Procter",
		"title":"Senior Litigation Technologies Specialist",
		"location":"Boston, MA",
		"dates":"2005 - 2013",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mi est. Proin suscipit sodales gravida. Phasellus facilisis tempus nibh suscipit facilisis. Morbi semper massa a ullamcorper condimentum. Ut ligula nisi, luctus sed placerat at, rutrum in mi. Cras viverra, urna vitae vestibulum sagittis, elit mauris volutpat sapien, vitae porta mi est eu arcu. In ullamcorper vel lectus id condimentum. Aliquam tincidunt, sapien at aliquam molestie, eros diam egestas diam, vel placerat nisl erat in nulla. Integer mattis, enim auctor tincidunt malesuada, nulla nulla euismod enim, et feugiat quam libero nec nibh."
	}
	,
	{
		"employer":"Target Litigaiton",
		"title":"Document Scanner",
		"location":"Boston, MA",
		"dates":"2004",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mi est. Proin suscipit sodales gravida. Phasellus facilisis tempus nibh suscipit facilisis. Morbi semper massa a ullamcorper condimentum. Ut ligula nisi, luctus sed placerat at, rutrum in mi. Cras viverra, urna vitae vestibulum sagittis, elit mauris volutpat sapien, vitae porta mi est eu arcu. In ullamcorper vel lectus id condimentum. Aliquam tincidunt, sapien at aliquam molestie, eros diam egestas diam, vel placerat nisl erat in nulla. Integer mattis, enim auctor tincidunt malesuada, nulla nulla euismod enim, et feugiat quam libero nec nibh."
	}
	]
	,
	"display":
	function display(){
	//WORK EXPERIENCE	
    $("#workExperience").append(HTMLworkStart);
    
    for(job in work.jobs)
	{
		//Employer and Title
  		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
  		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
  		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

  		//Dates, Location and Description
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);	
	}
}
}

//------------PROJECTS---------------------//
var projects = {
	"projects":[
	{
		"title":"P1",
		"dates":"01/07/20015 - 01/09/2015",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mi est. Proin suscipit sodales gravida. Phasellus facilisis tempus nibh suscipit facilisis. Morbi semper massa a ullamcorper condimentum. Ut ligula nisi, luctus sed placerat at, rutrum in mi. Cras viverra, urna vitae vestibulum sagittis, elit mauris volutpat sapien, vitae porta mi est eu arcu. In ullamcorper vel lectus id condimentum. Aliquam tincidunt, sapien at aliquam molestie, eros diam egestas diam, vel placerat nisl erat in nulla. Integer mattis, enim auctor tincidunt malesuada, nulla nulla euismod enim, et feugiat quam libero nec nibh",
		"images":"images/197x148.gif"
	}
	,
	{
		"title":"P2",
		"dates":"01/15/20015 - 01/17/2015",
		"description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mi est. Proin suscipit sodales gravida. Phasellus facilisis tempus nibh suscipit facilisis. Morbi semper massa a ullamcorper condimentum. Ut ligula nisi, luctus sed placerat at, rutrum in mi. Cras viverra, urna vitae vestibulum sagittis, elit mauris volutpat sapien, vitae porta mi est eu arcu. In ullamcorper vel lectus id condimentum. Aliquam tincidunt, sapien at aliquam molestie, eros diam egestas diam, vel placerat nisl erat in nulla. Integer mattis, enim auctor tincidunt malesuada, nulla nulla euismod enim, et feugiat quam libero nec nibh",
		"images":"images/197x148.gif"
	}
	]
	,
	"display":
		function display(){ 
   	for(project in projects.projects)
	{
		//create project entry
		$("#projects").append(HTMLprojectStart);
		//TITLE
		var formattedTitle = HTMLprojectTitle
			.replace("#","http://www.udacity.com")
			.replace("%data%",projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		//DATE, DESCRIPTION AND IMAGE
		var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);
		$(".project-entry:last").append(formattedImage);
		$(".project-entry:last").append(formattedImage);
	}
}
}


bio.display();
work.display();
projects.display();
education.display();


$("#mapDiv").append(googleMap);
