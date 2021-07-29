
// responsive navbar 
resize = () =>{
    let inner_width = window.outerWidth;
    let navbar = document.getElementById("navbar")
    let afterNav = document.getElementById("after-nav")


   if(inner_width < 700){
       navbar.classList.add("navbar-remove")
       afterNav.classList.add("add-after-nav")

   }
   else{
       navbar.classList.remove("navbar-remove")
       afterNav.classList.remove("add-after-nav")
   }
} 

// open and close navbar 

var appIcons = document.getElementById('appIcon')
var afterNav = document.getElementById("after-nav");

appIcons.addEventListener('click' , ()=> {
    afterNav.classList.toggle('open-nav')
})


// skills section start here
let skillsSection = document.getElementById("front-end-heading");
let openSkillsSection = document.getElementById("front-end-skills-section");

let backendSkillsSection = document.getElementById("backend-heading");
let openBackendSkills =  document.getElementById("backend-end-skills-section");

let designSkillsSection = document.getElementById("design-heading");
let openDesignSection = document.getElementById("design-skills-section");


skillsSection.addEventListener("click" , ()=>{
    openSkillsSection.classList.toggle("open-skills-section")
})

backendSkillsSection.addEventListener("click" , ()=>{
    openBackendSkills.classList.toggle("open-backend-skills-section")
});

designSkillsSection.addEventListener("click" , ()=>{
    openDesignSection.classList.toggle("open-design-skills-section")
});


// qualification section start here 

const education = document.getElementById("education");
const hideEducation = document.getElementById("q-container")
const work = document.getElementById("work");
const hideWork = document.getElementById('work-container')


work.addEventListener('click' , ()=>{

    hideEducation.style.display = 'none'
    hideWork.style.display = 'block';
})

education.addEventListener('click' , ()=>{
    hideWork.style.display = 'none';
    hideEducation.style.display = 'block'
})

// portfolio section start here 

let flag = 0;

showSlide = document.getElementsByClassName('slides');

// slideShower = () => {
//     showSlide.style.display = 'none';
// }

slideshow_controller = (x) => {
    flag = flag + x;
    slideshow(flag);
}
slideshow = (num) => {
    let slide = document.getElementsByClassName('slides');
    if(num == slide.length ){
        flag = 0;
        num = 0
    }
    
    if (num < 0 ){
        flag = slide.length - 1;
        num = slide.length - 1;
    }
    for(let y of slide){
        y.style.display = 'none'
        
    }
    
    slide[num].style.display = 'block'
    slide[num].style.display = 'flex'
    
} 

slideshow_controller(0);

// Dark theme start here 

const moon = document.getElementById("night-mode");
const darkNavbar = document.getElementById('navbar')
const aTag = document.getElementsByTagName('a');
const sunIcon = document.getElementById('sun')
const afterNavDarkMode = document.getElementById("night-mode-after");

const darkNavbarAfter = document.getElementById('after-nav');

let day = document.getElementById('day-mode');
let night = document.getElementById('night-mode');



afterNavDarkMode.addEventListener('click' , () =>{
    document.body.classList.toggle('dark-theme');
    darkNavbarAfter.classList.toggle('dark-navbar')
})




showDay = () => {
    day.style.display = 'block';
    night.style.display = 'none';
}

showNight = () => {
    night.style.display = 'none';
    day.style.display = 'block';
}


day.addEventListener('click' , ()=>{
    document.body.classList.toggle('dark-theme');
    darkNavbar.classList.toggle('dark-navbar');
    showDay();

})
moon.addEventListener('click' , () => {
    document.body.classList.toggle('dark-theme');
    darkNavbar.classList.toggle('dark-navbar');
    aTag.classList.toggle('dark-navbar a');
    showNight();
    

})












