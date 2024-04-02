/*=============== SHOW MENU ===============*/
// Constantes des éléments du menu de navigation. 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
// Valide l'existence de la constante
if(navToggle){
    // Ajoute la classe 'show-menu' à 'navMenu' lorsqu'on clique sur 'navToggle'.
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
// Valide l'existence de la constante
if(navClose){
    // Supprime la classe 'show-menu' de 'navMenu' lorsqu'on clique sur 'navClose'.
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// Constantes qui récupèrent tous les éléments de la classe 'nav__link'.
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Supprime la classe 'show-menu' de 'navMenu' lorsqu'on clique sur un lien de navigation.
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE SHADOW HEADER ===============*/
const shadowHeader = () => {
    const header = document.getElementById('header')
    // Ajoute ou supprime la classe 'shadow-header' à 'header' en fonction du défilement de la page.
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    /** STEP TO CONNECT EMAILJS TO THE CONTACT FORM
    * 1. https://www.emailjs.com - Sign In our Sign Up
    * 2. "Email Services" => "Add New Service" => "Gmail" for example 
    * 3. "Connect Account" => "Create Service" => Copy the "Service ID"
    * 4. "Email Templates" => "Create New Template" 
    * Subject *
        New message from {{user_name}}
        Content *
            Names: {{user_name}}

            Email: {{user_email}}

            Subject: {{user_subject}}

            Message: {{user_message}}

            Best wishes,
            EmailJS team
    * => "Settings" => copy "Template ID
    * 5. "Integration" => "Copy the Form ID" in html page
    * 6. "API KEYS" => "Account" => "Create Key" => "Copy the Public Key"
    * 7. serviceID - templateID - #form - publicKey
    */
    emailjs.sendForm('', '', '#contact-form', '')
        .then(() => {
            // Show success message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Clear input fields after sending the message
            contactForm.reset()
        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // Ajoute ou supprime la classe 'show-scroll' à 'scrollUp' en fonction du défilement de la page.
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
