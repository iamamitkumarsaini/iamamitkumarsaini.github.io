

let image1 = document.getElementById("image1")
let image2 = document.getElementById("image2")
let image3 = document.getElementById("image3")
let image4 = document.getElementById("image4")
let image5 = document.getElementById("image5")
let image6 = document.getElementById("image6")
let image7 = document.getElementById("image7")
let image8 = document.getElementById("image8")





image1.addEventListener("mouseover", mouseOverFunc1)
image1.addEventListener("mouseout", mouseOutFunc1)

let tag1 = document.getElementById("tag1");

function mouseOverFunc1 (){
    image1.style.backgroundColor="#66fcf1";
    tag1.style.backgroundColor ="#363636"
    tag1.style.color="#66fcf1";
}


function mouseOutFunc1 (){
    image1.style.backgroundColor = "#363636";
    tag1.style.backgroundColor ="white";
    tag1.style.color="#363636";
}




image2.addEventListener("mouseover", mouseOverFunc2)
image2.addEventListener("mouseout", mouseOutFunc2)

let tag2 = document.getElementById("tag2");

function mouseOverFunc2 (){
    image2.style.backgroundColor="#66fcf1";
    tag2.style.backgroundColor ="#363636";
    tag2.style.color="#66fcf1";
}


function mouseOutFunc2 (){
    image2.style.backgroundColor = "#363636";
    tag2.style.backgroundColor ="white";
    tag2.style.color="#363636";
}





image3.addEventListener("mouseover", mouseOverFunc3)
image3.addEventListener("mouseout", mouseOutFunc3)

let tag3 = document.getElementById("tag3");

function mouseOverFunc3 (){
    image3.style.backgroundColor="#66fcf1";
    tag3.style.backgroundColor ="#363636";
    tag3.style.color="#66fcf1";
}


function mouseOutFunc3 (){
    image3.style.backgroundColor = "#363636";
    tag3.style.backgroundColor ="white";
    tag3.style.color="#363636";
}




image4.addEventListener("mouseover", mouseOverFunc4)
image4.addEventListener("mouseout", mouseOutFunc4)

let tag4 = document.getElementById("tag4");

function mouseOverFunc4 (){
    image4.style.backgroundColor="#66fcf1";
     tag4.style.backgroundColor ="#363636";
     tag4.style.color="#66fcf1";
}


function mouseOutFunc4 (){
    image4.style.backgroundColor = "#363636";
    tag4.style.backgroundColor ="white";
    tag4.style.color="#363636";
}




image5.addEventListener("mouseover", mouseOverFunc5)
image5.addEventListener("mouseout", mouseOutFunc5)

let tag5 = document.getElementById("tag5");

function mouseOverFunc5 (){
    image5.style.backgroundColor="#66fcf1";
    tag5.style.backgroundColor ="#363636";
    tag5.style.color="#66fcf1";
}


function mouseOutFunc5 (){
    image5.style.backgroundColor = "#363636";
    tag5.style.backgroundColor ="white";
    tag5.style.color="#363636";
}




image6.addEventListener("mouseover", mouseOverFunc6)
image6.addEventListener("mouseout", mouseOutFunc6)

let tag6 = document.getElementById("tag6");

function mouseOverFunc6 (){
    image6.style.backgroundColor="#66fcf1";
    tag6.style.backgroundColor ="#363636";
    tag6.style.color="#66fcf1";
}


function mouseOutFunc6 (){
    image6.style.backgroundColor = "#363636";
    tag6.style.backgroundColor ="white";
    tag6.style.color="#363636";
}



image7.addEventListener("mouseover", mouseOverFunc7)
image7.addEventListener("mouseout", mouseOutFunc7)

let tag7 = document.getElementById("tag7");

function mouseOverFunc7 (){
    image7.style.backgroundColor="#66fcf1";
    tag7.style.backgroundColor ="#363636";
    tag7.style.color="#66fcf1";
}


function mouseOutFunc7 (){
    image7.style.backgroundColor = "#363636";
    tag7.style.backgroundColor ="white";
    tag7.style.color="#363636";
}



image8.addEventListener("mouseover", mouseOverFunc8);
image8.addEventListener("mouseout", mouseOutFunc8);

let tag8 = document.getElementById("tag8");

function mouseOverFunc8 (){
    image8.style.backgroundColor="#66fcf1";
    tag8.style.backgroundColor ="#363636";
    tag8.style.color="#66fcf1";
}


function mouseOutFunc8 (){
    image8.style.backgroundColor = "#363636";
    tag8.style.backgroundColor ="white";
    tag8.style.color="#363636";
};



let git1 = document.getElementById("GitHub1")
git1.addEventListener("click", GoogleProjectFunc);


function GoogleProjectFunc () {
    window.open("https://github.com/iamamitkumarsaini/pushy-dime-8312","_blank")

}



let Netlify1 = document.getElementById("Netlify1")
Netlify1.addEventListener("click", GoogleProjectLiveFunc);


function GoogleProjectLiveFunc () {
    window.open("https://lovely-blini-ea9f41.netlify.app","_blank");

}



let git2 = document.getElementById("GitHub2")
git2.addEventListener("click", GustoProjectFunc);


function GustoProjectFunc () {
    window.open("https://github.com/iamamitkumarsaini/perpetual-paper-4225","_blank")

}



let Netlify2 = document.getElementById("Netlify2")
Netlify2.addEventListener("click", GustoProjectLiveFunc);


function GustoProjectLiveFunc () {
    window.open("https://verdant-panda-50245c.netlify.app","_blank");

}




let git3 = document.getElementById("GitHub3")
git3.addEventListener("click", niftyProjectFunc);


function niftyProjectFunc () {
    window.open("https://github.com/iamamitkumarsaini/wired-interest-36/tree/main/Wired-Interest-36","_blank")

}


let Netlify3 = document.getElementById("Netlify3")
Netlify3.addEventListener("click", niftyProjectLiveFunc);


function niftyProjectLiveFunc () {
    window.open("https://dazzling-manatee-d2595e.netlify.app","_blank");

}


let git4 = document.getElementById("GitHub4")
git4.addEventListener("click", JobNestFunc);


function JobNestFunc () {
    window.open("https://github.com/Sahnawaz7hussain/common-dock-7043","_blank")

}



let Netlify4 = document.getElementById("Netlify4")
Netlify4.addEventListener("click", JobNestFuncLiveFunc);


function JobNestFuncLiveFunc () {
    window.open("https://jobnest-72auhwmel-iamamitkumarsaini.vercel.app/","_blank");

}



let gitHubIcon = document.getElementById("githubIcon");
gitHubIcon.addEventListener("click",GitHubProfileFunc)


function GitHubProfileFunc (){
    window.open("https://github.com/iamamitkumarsaini", "_blank")
}


let LinkedInIcon = document.getElementById("LinkedInIcon");
LinkedInIcon.addEventListener("click",LinkedInProfileFunc)


function LinkedInProfileFunc (){
    window.open("https://www.linkedin.com/in/iamamitkumarsaini/", "_blank")
}




let NavbarAbout = document.getElementById("NavbarAbout");
let NavbarSkills = document.getElementById("NavbarSkills");
let NavbarProjects = document.getElementById("NavbarProjects");
let NavbarContact = document.getElementById("NavbarContact");
let home = document.getElementById("subNav1");

NavbarAbout.addEventListener("click", AboutFunc);
NavbarSkills.addEventListener("click", SkillsFunc);
NavbarProjects.addEventListener("click", ProjectsFunc);
NavbarContact.addEventListener("click", ContactFunc);
home.addEventListener("click", AboutFunc)


function AboutFunc (){
    const about = document.getElementById("about");
    about.scrollIntoView(false);
}

function SkillsFunc (){
    const skills = document.getElementById("skills");
    skills.scrollIntoView(false);
}

function ProjectsFunc (){
    const projects = document.getElementById("Projects");
    projects.scrollIntoView(true);
}

function ContactFunc (){
    const contactMe = document.getElementById("ContactMe");
    contactMe.scrollIntoView(false);
};




let NavbarAbout2 = document.getElementById("NavbarAbout2");
let NavbarSkills2 = document.getElementById("NavbarSkills2");
let NavbarProjects2 = document.getElementById("NavbarProjects2");
let NavbarContact2 = document.getElementById("NavbarContact2");
let home2 = document.getElementById("SShome");

NavbarAbout2.addEventListener("click", AboutFunc);
NavbarSkills2.addEventListener("click", SkillsFunc);
NavbarProjects2.addEventListener("click", ProjectsFunc);
NavbarContact2.addEventListener("click", ContactFunc);
home2.addEventListener("click", AboutFunc);

let crossBtn = document.getElementById("crossicon");
let vhBar = document.getElementById("ssCollection");
let ssIcon = document.getElementById("ssicon")
let crossicon = document.getElementById("crossicon")
ssIcon.addEventListener("click",showvhBarFunc)

crossBtn.addEventListener("click", crossBtnFunc);

crossicon.addEventListener("mouseover", mouseOverFunc)
ssIcon.addEventListener("mouseover", mouseOverNavFunc)

function crossBtnFunc () {
    vhBar.style.display = "none"
}


function showvhBarFunc () {
    vhBar.style.display = "block"
}

function mouseOverFunc () {
    crossicon.style.cursor = "pointer"
}

function mouseOverNavFunc () {
    ssIcon.style.cursor = "pointer"
    }