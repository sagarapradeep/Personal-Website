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


/* about list */
let aboutList = document.getElementsByClassName('color0');
/* skills list */
let skillList = document.getElementsByClassName('color1');
/* experience */
let expList = document.getElementsByClassName('color2');
/* education */
let eduList = document.getElementsByClassName('color3');



/* ------------------------ */
// about.addEventListener('mouseenter', () => {
//   navAbout.style.backgroundColor = '#0e4091a9';
//   navAbout.style.borderRadius = '10px';
//   for(let i=0; i<aboutList.length;i++){
//     aboutList[i].classList.add('shadow2');
//   }

// })
// about.addEventListener('mouseleave', () => {

//   navAbout.style.backgroundColor = '';
//   for(let i=0; i<aboutList.length;i++){
//     aboutList[i].classList.remove('shadow2');
//   }

// })

// skills.addEventListener('mouseenter', () => {

//   navSkills.style.backgroundColor = '#0e4091a9';
//   navSkills.style.borderRadius = '10px';

//   for(let i=0; i<skillList.length;i++){
//     skillList[i].classList.add('shadow2');
//   }

// })
// skills.addEventListener('mouseleave', () => {
//   navSkills.style.backgroundColor = '';

//   for(let i=0; i<skillList.length;i++){
//     skillList[i].classList.remove('shadow2');
//   }

// })

// experience.addEventListener('mouseenter', () => {

//   navExperience.style.backgroundColor = '#0e4091a9';
//   navExperience.style.borderRadius = '10px';
//   for(let i=0; i<expList.length;i++){
//     expList[i].classList.add('shadow2');
//   }

// })
// experience.addEventListener('mouseleave', () => {
//   navExperience.style.backgroundColor = '';
//   for(let i=0; i<expList.length;i++){
//     expList[i].classList.remove('shadow2');
//   }


// })

// education.addEventListener('mouseenter', () => {

//   navEducation.style.backgroundColor = '#0e4091a9';
//   navEducation.style.borderRadius = '10px';
//   for(let i=0; i<eduList.length;i++){
//     eduList[i].classList.add('shadow2');
//   }

// })
// education.addEventListener('mouseleave', () => {

//   navEducation.style.backgroundColor = '';
//   for(let i=0; i<eduList.length;i++){
//     eduList[i].classList.remove('shadow2');
//   }

// })

// projects.addEventListener('mouseenter', () => {

//   navProjects.style.backgroundColor = '#0e4091a9';
//   navProjects.style.borderRadius = '10px';

// })
// projects.addEventListener('mouseleave', () => {

//   navProjects.style.backgroundColor = '';

// })

// contact.addEventListener('mouseenter', () => {

//   navConatct.style.backgroundColor = '#0e4091a9';
//   navConatct.style.borderRadius = '10px';

// })
// contact.addEventListener('mouseleave', () => {

//   navConatct.style.backgroundColor = '';

// })


/* test */
/* ------------------------------ */
// console.log(box)

let sectionList = document.getElementsByClassName('section');

let list2 = [about, skills, experience, education]


let oldValue = 0;

window.addEventListener('scroll', function (e) {

  for (let i = 0; i < list2.length; i++) {
    let section = list2[i];





    let box = section.getBoundingClientRect();
    let top1 = box.top;
    let bottom1 = box.bottom;


    newValue = window.pageYOffset;
    console.log(newValue)




    if ((oldValue - newValue )< 0) {
      // console.log(section, top1);
      // console.log(section, bottom1)

      if (top1 <= (innerHeight * 0.5) && !(bottom1 < innerHeight * 0.5)) {
        // section.classList.add('shadow2')
        section.classList.add('color0')


      }
      if (bottom1 < innerHeight * 0.5) {
        // section.classList.remove('shadow2')
        section.classList.remove('color0')
      }


    }
    // else if (oldValue - newValue > 0) {
    //   if ((bottom1 >= innerHeight * 0.5) && !(top1 >= innerHeight * 0.5)) {
    //     // section.classList.add('shadow2')
    //     section.style.backgroundColor='red'
    //   }
    //   if (top1 >= innerHeight * 0.5) {
    //     // section.classList.remove('shadow2')
    //     section.style.backgroundColor='green'
    //   }
    // }

    // Update the old value
  }
  oldValue = newValue;
});









