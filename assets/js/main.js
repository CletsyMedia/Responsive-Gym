/*=============== SHOW MENU TOGGLE ===============*/
const menuBars = document.getElementById('nav-toggle');
const menuClose = document.getElementById('nav-close');
const navMenu = document.getElementById('nav-menu')

// Validating constant
if(menuBars){
    menuBars.onclick = () =>{
        navMenu.classList.add('active')
    }
}
// Remove Menu
if(menuClose){
    menuClose.onclick = () =>{
        navMenu.classList.remove('active')
    }
}

/*    =========OR==========

 menuBars.onclick = () =>{
    navMenu.classList.add('active')
}
menuClose.onclick = () =>{
    navMenu.classList.remove('active')
}
        =========OR==========
 menuBars.addEventListener('click', () => {
     navMenu.classList.add('active')
 })
 menuClose.addEventListener('click', () => {
     navMenu.classList.remove('active')
 })
 */


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link');
const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the active class
    navMenu.classList.remove('active')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
// Simple

const header = document.querySelector('header');
    window.onscroll = () =>{
    header.classList.toggle('scroll-bg-header', window.scrollY > 0)
}
/*===================OR little further==========* */

// const header = document.querySelector('header');
// window.addEventListener ('scroll', function() {
//     header.classList.toggle ('scroll-bg-header', window.scrollY > 0);
// })


/*==================OR little step further============== */
// const scrollHeader = () =>{
//     const header = document.getElementById('header')
//     /*When the scroll is > 50vh add the scroll-header class  to the header tag*/
//     this.scrollY >= 50? header.classList.add('scroll-bg-header')
//                         : header.classList.remove('scroll-bg-header')
// }
// window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');
    
const scrollActive = () =>{
  	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-Link')
		}else{
			sectionsClass.classList.remove('active-Link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // when scrollbar is > 350vh show scroll bar class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE  BMI JS ===============*/
// Getting the relevant ID's
const calForm = document.getElementById('cal-form');
    calCm = document.getElementById('cal-cm');
    calKg = document.getElementById('cal-kg'),
    calMsg = document.getElementById('cal-msg')
const calBmi = (e) =>{
    e.preventDefault()
    // Checking if the fields have a value
    if(calCm.value === '' || calKg.value === ''){
        // Add or remove color
        calMsg.classList.remove('color-green'),
        calMsg.classList.add('color-red')
        // Show message
        calMsg.textContent = 'Fill in your Height and Weight 🏋️'
        // Remove message in 3secs
        setTimeout(()=>{
            calMsg.textContent = ''
        }, 5000)
    }else{
        // BMI Formula
        const cm = calCm.value / 100,
              kg = calKg.value,
              bmi = Math.round(kg / (cm * cm))
        //Status Report
         if(bmi < 18.5){
            // Add colour and display message
            calMsg.classList.add('color-green')
            calMsg.textContent = `Your BMI is ${bmi}lbs and you are underweight 😒!`
    
         }else if(bmi < 25){
            // Add colour and display message
            calMsg.classList.add('color-green')
            calMsg.textContent = `Your BMI is ${bmi}lbs and you are healthy 👌!`
    
         }else{
            calMsg.classList.add('color-green')
            calMsg.textContent = `Your BMI is ${bmi}lbs and you are overweight 😴!`
         }
        //  To clear imput field
        calCm.value = ''
        calKg.value = ''
        // Remove all messages for 5secs
        setTimeout(()=>{
        calMsg.textContent = ''
        }, 5000)
    }
}
calForm.addEventListener('submit', calBmi)
/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
        contactMsg = document.getElementById('contact-msg');
        contactUser = document.getElementById('contact-user')

const sendEmail = (e) =>{
    e.preventDefault()
    // Check if the fiels has a value
    if(contactUser.value === ''){
        // Add or remove color
        contactMsg.classList.add('color-red')
        // Show message
        contactMsg.textContent = 'You must enter your email ☝🏻'
    }else{
        // ServiceID - template - #form - publickey
        emailjs.sendForm('service_qf9t0x5','template_xpch1x9','#contact-form',"xpTPOHKbFzsFBYJ2t")
        
        .then(() =>{
            // Show message and  add color
            contactMsg.classList.add('color-green')
            contactMsg.textContent = 'Successfully registered 🙏🏻'
        }, (error) => {
            // Mail error responses
            alert('OOPS! Something went wrong 😒', error)
        })
    }
    // Remove all messages for 5secs
        setTimeout(()=>{
        contactMsg.textContent = ''
        }, 5000)
        // Clear input fields
        contactUser.value = ''
}
contactForm.addEventListener('submit', sendEmail)










 

