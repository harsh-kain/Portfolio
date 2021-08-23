
// responsive navbar 
resize = () =>{
    let inner_width = window.outerWidth;
    let inner_height = window.innerHeight;
    console.log(inner_height);
    let navbar = document.getElementById("navbar")
    let afterNav = document.getElementById("after-nav")


   if(inner_width < 700){
       navbar.classList.add("navbar-remove")
       afterNav.classList.add("add-after-nav")

   }
    // else if(inner_height == 640){
    //    afterNav.classList.add('moto_height');
    // }
       
   else{
       navbar.classList.remove("navbar-remove")
       afterNav.classList.remove("add-after-nav")
   }
} 

// open and close navbar 

var appIcons = document.getElementById('appIcon')
var afterNav = document.getElementById("after-nav");
const closeAppIcon = document.getElementById('close-app-icon');

appIcons.addEventListener('click' , ()=> {
    closeAppIconFunc();
    afterNav.classList.toggle('open-nav')
})
closeAppIcon.addEventListener('click' , ()=> {
    appIconFunc();
    afterNav.classList.toggle('open-nav')
})


closeAppIconFunc = () => {
    appIcons.style.display = 'none';
    closeAppIcon.style.display = 'block';

}
appIconFunc = () => {
    closeAppIcon.style.display = 'none';
    appIcons.style.display = 'block';
}




// skills section start here
// let skillsSection = document.getElementById("front-end-heading");
// let openSkillsSection = document.getElementById("front-end-skills-section");

// let backendSkillsSection = document.getElementById("backend-heading");
// let openBackendSkills =  document.getElementById("backend-end-skills-section");

// let designSkillsSection = document.getElementById("design-heading");
// let openDesignSection = document.getElementById("design-skills-section");

// const upArrow = document.getElementById('up-arrow');
// const downArrow = document.getElementById('down-arrow');

// skillsSection.addEventListener("click" , ()=>{
//     hideDownArrow();
//     openSkillsSection.classList.toggle("open-skills-section")

// })


// backendSkillsSection.addEventListener("click" , ()=>{
//     hideDownArrow();
//     openBackendSkills.classList.toggle("open-backend-skills-section")
// });

// designSkillsSection.addEventListener("click" , ()=>{
//     hideDownArrow();
//     openDesignSection.classList.toggle("open-design-skills-section")
// });

// hideDownArrow = () => {
//     downArrow.style.display = 'none';
//     upArrow.style.display = 'block';
// }
// hideUpArrow = () => {
//     upArrow.style.display = 'none';
//     downArrow.style.display = 'block';
// }


// qualification section start here 

// const education = document.getElementById("education");
// const hideEducation = document.getElementById("q-container")
// const work = document.getElementById("work");
// const hideWork = document.getElementById('work-container')


// work.addEventListener('click' , ()=>{

//     hideEducation.style.display = 'none'
//     hideWork.style.display = 'block';
// })

// education.addEventListener('click' , ()=>{
//     hideWork.style.display = 'none';
//     hideEducation.style.display = 'block'
// })

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
const afterNavDarkMode = document.getElementById("night-mode-after");
const darkNavbarAfter = document.getElementById('after-nav');
const day = document.getElementById('day-mode');
const sun = document.getElementById('day-mode');
const afterDayMode = document.getElementById('after-day-mode');


moon.addEventListener('click' , () => {
    dayIcon();
    document.body.classList.toggle('dark-theme');
    darkNavbar.classList.toggle('dark-navbar');
    aTag.classList.toggle('dark-navbar a');
    
})
sun.addEventListener('click', ()=>{
    nightIcon();
    document.body.classList.toggle('dark-theme');
    darkNavbar.classList.toggle('dark-navbar');
    aTag.classList.toggle('dark-navbar a');
})

// switch icon of dark theme 
// let night = document.getElementById('night-mode');

dayIcon = () => {
    moon.style.display = 'none';
    day.style.display = 'block';

}

nightIcon = () => {
    day.style.display = 'none';
    moon.style.display = 'block';
}


afterNavDarkMode.addEventListener('click' , () =>{
    afterDayModeFunc();
    document.body.classList.toggle('dark-theme');
    darkNavbarAfter.classList.toggle('dark-navbar')
})
afterDayMode.addEventListener('click' , ()=> {
    afterNightModeFunc();
    document.body.classList.toggle('dark-theme');
    darkNavbarAfter.classList.toggle('dark-navbar')
})

afterDayModeFunc = () => {
    afterNavDarkMode.style.display = 'none';
    afterDayMode.style.display = 'block';
} 

afterNightModeFunc = () => {
    afterDayMode.style.display = 'none';
    afterNavDarkMode.style.display = 'block';
}

// switch icon of skills 










