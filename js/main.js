function openPopup() {
  document.querySelector('.popup-overlay').style.display = 'flex';
}

function closePopup() {
  document.querySelector('.popup-overlay').style.display = 'none';
}


/* typing animation */


const texts = [
  'Hey, I am',
  "SAGARA PRADEEP",
  'Full Stack Developer'
];


let spanElm = document.getElementById('main-text');


let i = 0;
let k = 0;
let m = 0;
let erase = false;

setInterval(() => {
  let text = texts[k];
  if (k == 1) {
    spanElm.style.fontStyle = 'normal';
    spanElm.style.fontSize = '74px';


  } else {
    spanElm.style.fontWeight = '400px';
    spanElm.style.fontStyle = 'italic';
    spanElm.style.fontSize = '50px';

  }



  i++;

  if (i % 2 == 0 && !erase) {
    m++;

    spanElm.innerText = text.substring(0, m);
    if (m >= (text.length + 10)) erase = true;
  } else if (erase) {
    m--;
    spanElm.innerText = text.substring(0, m);
    if (m <= 0) {
      erase = false;
      k++;
      if (k === texts.length) k = 0;
    }
  }
}, 80);


let about = document.querySelector('#about');
let skills = document.querySelector('#skills');
let experience = document.querySelector('#experience');
let projects = document.querySelector('#projects');
let education = document.querySelector('#education');
let contact = document.querySelector('#contact');



let navAbout = document.querySelector('#right-nav>div:first-child>a');
let navSkills = document.querySelector('#right-nav>div:nth-child(2)>a');
let navExperience = document.querySelector('#right-nav>div:nth-child(3)>a');
let navProjects = document.querySelector('#right-nav>div:nth-child(4)>a');
let navEducation = document.querySelector('#right-nav>div:nth-child(5)>a');
let navConatct = document.querySelector('#right-nav>div:nth-child(6)>a');



/* ------------------------ */
about.addEventListener('mouseenter', () => {

  navAbout.style.backgroundColor = '#0e4091a9';
  navAbout.style.borderRadius = '10px';
  
})
about.addEventListener('mouseleave', () => {
  // navAbout.style.borderRadius = '0px';
  navAbout.style.backgroundColor = '';

})

skills.addEventListener('mouseenter', () => {

  navSkills.style.backgroundColor = '#0e4091a9';
  navSkills.style.borderRadius = '10px';
  
})
skills.addEventListener('mouseleave', () => {
  // navSkills.style.borderRadius = '0px';
  navSkills.style.backgroundColor = '';

})

experience.addEventListener('mouseenter', () => {

  navExperience.style.backgroundColor = '#0e4091a9';
  navExperience.style.borderRadius = '10px';
  
})
experience.addEventListener('mouseleave', () => {
  navExperience.style.backgroundColor = '';
  // navExperience.style.borderRadius = '0px';
  // navExperience.style.borderRadius = '0 ';

})

education.addEventListener('mouseenter', () => {

  navEducation.style.backgroundColor = '#0e4091a9';
  navEducation.style.borderRadius = '10px';
  
})
education.addEventListener('mouseleave', () => {
  // navEducation.style.borderRadius = '0px';
  navEducation.style.backgroundColor = '';

})

projects.addEventListener('mouseenter', () => {

  navProjects.style.backgroundColor = '#0e4091a9';
  navProjects.style.borderRadius = '10px';
  
})
projects.addEventListener('mouseleave', () => {
  // navProjects.style.borderRadius = '0px';
  navProjects.style.backgroundColor = '';

})

contact.addEventListener('mouseenter', () => {

  navConatct.style.backgroundColor = '#0e4091a9';
  navConatct.style.borderRadius = '10px';
  
})
contact.addEventListener('mouseleave', () => {
  // navConatct.style.borderRadius = '0px';
  navConatct.style.backgroundColor = '';

})










