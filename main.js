const navbar = document.getElementById('navbar');
const navmenus = document.querySelectorAll('.navbar-text');
const homeMenu = document.getElementById('home');
const aboutMenu = document.getElementById('about');
const experienceMenu = document.getElementById('experience');
const skillMenu = document.getElementById('skill');
const contactMenu = document.getElementById('contact'); 
const homeFlow = document.getElementById('homeFlow');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const skill3 = document.getElementById('skill3');
const skill4 = document.getElementById('skill4');
const skill5 = document.getElementById('skill5');
const skill6 = document.getElementById('skill6');
const screenHeight = window.innerHeight;
const body = document.getElementById('root');
const homeContent = document.getElementsByClassName('home-content')[0];
const homeFlowContent = document.getElementById('homeFlowContent');
const aboutContent = document.getElementsByClassName('about-content')[0];
const skillContent = document.getElementsByClassName('skill-content')[0];
console.log(body);
const bodyHeight = body.offsetHeight;
console.log(bodyHeight);
console.log("Home")
console.log(homeContent.offsetHeight);
console.log(homeContent.offsetTop);
const homeTop = homeContent.offsetTop;
const homeHeight = homeContent.offsetHeight;
console.log("About")
console.log(aboutContent.offsetHeight);
console.log(aboutContent.offsetTop);
const aboutTop = aboutContent.offsetTop;
const aboutHeight = aboutContent.offsetHeight;
console.log("Skill")
console.log(skillContent.offsetHeight);
console.log(skillContent.offsetTop);
const skillTop = skillContent.offsetTop;
console.log(screenHeight);
const inputs = document.querySelectorAll('.input');
const message = document.querySelector('.textarea');
const contactForm = document.getElementById('contactForm');
for(var i=0; i<inputs.length; i++){
    inputs[i].addEventListener('focus', inputFocus);
    inputs[i].addEventListener('blur', inputBlur);
}

contactForm.addEventListener('submit', submit);

function inputFocus(){
    this.className = 'input input-focus';
}

function inputBlur(){
    this.className = 'input';
}

function submit(event){
    event.preventDefault();
    for(var i=0; i<inputs.length; i++){
        console.log(inputs[i].value);
        const value = inputs[i].value;
        console.log(value.length);
        if(inputs[i].value.length === 0){
            console.log("I am in")
            inputs[i].className = "input input-danger";
        }
    }
    if(message.value.length === 0){
        message.className = "textarea input-danger";
    }
}

const homeText = [
    'I am good at python',
    'I love to develop in Python Django',
    'Java is Awesome',
    'React JS is powerful',
    'Javascript is cool',
    'React Native is the best one',
    'I am a Full Stack Developer'
]

const homeTextWidth = [73, 158, 51, 110, 138 ,255];
var homeIndex = 0;

window.addEventListener('resize', resize);
window.addEventListener('load', loaded);
homeMenu.addEventListener('click', this.homeHandle);
aboutMenu.addEventListener('click', this.aboutHandle);
experienceMenu.addEventListener('click', this.experienceHandle);
skillMenu.addEventListener('click', this.skillHandle);
contactMenu.addEventListener('click', this.contactHandle);


function loaded(){
    flowHome();
    // intializeTextWidth()
}

// function intializeTextWidth(){
//     const span = document.createElement('span');
//     span.innerText = homeText[0];
//     span.id = 'homeFlow';
//     console.log(span);
//     console.log(span.offsetWidth);
// }


function resize(event){
    // console.log(event);
    // screenHeight = window.innerHeight;
}

function homeHandle(event){
    event.preventDefault();
    resetMenu();
    homeMenu.className = 'navbar-text navbar-a-text';
    window.scrollTo(0, homeTop);
}

function aboutHandle(event){
    event.preventDefault();
    resetMenu();
    aboutMenu.className = 'navbar-text navbar-a-text';
    window.scrollTo(0, aboutTop);
}

function skillHandle(event){
    event.preventDefault();
    resetMenu();
    skillMenu.className = 'navbar-text navbar-a-text';
    window.scrollTo(0, skillTop);
}

function experienceHandle(event){
    event.preventDefault();
    resetMenu();
    experienceMenu.className = 'navbar-text navbar-a-text';
}

function contactHandle(event){
    event.preventDefault();
    resetMenu();
    contactMenu.className = 'navbar-text navbar-a-text';
}

function resetMenu(){
    homeMenu.className = "navbar-text";
    aboutMenu.className = 'navbar-text';
    experienceMenu.className = 'navbar-text';
    skillMenu.className = 'navbar-text';
    contactMenu.className = 'navbar-text';
}


function flowHome(){
    const width = homeFlowContent.offsetWidth;
    homeFlow.style.width = width + 100 + "px";
    var marginLeft = 0;
    const interval = setInterval(function(){
        marginLeft -= 2;
        homeFlow.style.marginLeft = marginLeft + "px";
        if(Math.abs(marginLeft) >= width + 100){
            marginLeft = width;
        }
    }, 100);   
}

// function to set the skills
function setSkill(){
    skill1.className = "skill-meter skill-meter-10";
    skill2.className = "skill-meter skill-meter-50";
    skill3.className = "skill-meter skill-meter-95";
    skill4.className = "skill-meter skill-meter-75";
    skill5.className = "skill-meter skill-meter-25";
    skill6.className = "skill-meter skill-meter-50";
}

// Function to clear the skills
function clearSkill(){
    skill1.className = "skill-meter";
    skill2.className = "skill-meter";
    skill3.className = "skill-meter";
    skill4.className = "skill-meter";
    skill5.className = "skill-meter";
    skill6.className = "skill-meter";
}


document.addEventListener('scroll', this.scroll);


function scroll(event){
    // console.log(event);
    // console.log("Scrolling...");
    var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop);
    // if(scrollTop > 700){
    //     setSkill();
    // } else if(scrollTop < 700){
    //     clearSkill();
    // }
    console.log("Scroll top + screen height");
    console.log(scrollTop + screenHeight);
    console.log("About top" + aboutTop);
    if((screenHeight + scrollTop) >= (homeHeight + aboutHeight)){
        navbar.className = 'navbar navbar-fixed';
    } else {
        navbar.className = 'navbar';
    }
    if((screenHeight + scrollTop) >= (homeHeight + aboutHeight + (screenHeight / 2))){
        setSkill();
    } else {
        clearSkill();
    }
} 



function scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2,
        scrollCount = 0,
        oldTimestamp = performance.now();
    function step (newTimestamp) {
        scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
        if (scrollCount >= Math.PI) window.scrollTo(0, 0);
        if (window.scrollY === 0) return;
        window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
}


/* 
    Explanations:
    - pi is the length/end point of the cosinus intervall (see above)
    - newTimestamp indicates the current time when callbacks queued by requestAnimationFrame begin to fire.
      (for more information see https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
    - newTimestamp - oldTimestamp equals the duration

      a * cos (bx + c) + d                      | c translates along the x axis = 0
    = a * cos (bx) + d                          | d translates along the y axis = 1 -> only positive y values
    = a * cos (bx) + 1                          | a stretches along the y axis = cosParameter = window.scrollY / 2
    = cosParameter + cosParameter * (cos bx)    | b stretches along the x axis = scrollCount = Math.PI / (scrollDuration / (newTimestamp - oldTimestamp))
    = cosParameter + cosParameter * (cos scrollCount * x)
*/
// 2# JavaScript (ease in and out):
function scrollToTop(scrollDuration) {
    const   scrollHeight = window.scrollY,
            scrollStep = Math.PI / ( scrollDuration / 15 ),
            cosParameter = scrollHeight / 2;
    var     scrollCount = 0,
            scrollMargin,
            scrollInterval = setInterval( function() {
                if ( window.scrollY != 0 ) {
                    scrollCount = scrollCount + 1;  
                    scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                    window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
                } 
                else clearInterval(scrollInterval); 
            }, 15 );
    }


// JavaScript (linear):

// <button onclick="scrollToTop(1000);"></button>
function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy( 0, scrollStep );
        }
        else clearInterval(scrollInterval); 
    },15);
}