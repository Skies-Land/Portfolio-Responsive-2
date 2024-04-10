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

    /** ETAPE POUR CONNECTER EMAILJS AU FORMULAIRE DE CONTACT
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
            // Affiche le message de réussite d'envoi du message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Supprime le message après cinq secondes
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)

            // Efface les champs de saisie après l'envoi du message
            contactForm.reset()
        }, () => {
            // Affiche un message d'erreur d'envoi du message en cas de problème avec le service
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
const sections = document.querySelectorAll('section[id]')

/** FONCTIONNEMENT SCROLL SECTIONS ACTIVE LINK
 * Ajoute ou supprime la classe 'active-link' aux éléments de la barre de navigation en fonction de la position de défilement de la fenêtre.
 * Lorsque la position de défilement de la fenêtre est entre le haut de la section et le bas de la section (hauteur de la section),
 * la classe 'active-link' est ajoutée à l'élément de navigation correspondant.
 * Sinon, la classe 'active-link' est supprimée.
 */
const scrollActive = () =>{
    const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
// Récupère le bouton du thème à partir de l'ID 'theme-button' et les classes 'dark-theme' et 'ri-sun-line'
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Récupére le thème actuel et l'icône enregistrés dans le stockage local
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

/** getCurrentTheme :
 * Obtient le thème actuel en vérifiant si le body du document contient la classe 'dark-theme'
 * @returns {string} 'dark' si le body du document contient la classe 'dark-theme', sinon 'light'
 */
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
/** getCurrentIcon :
 * Obtient l'icône actuelle en vérifiant si le bouton de thème contient la classe 'ri-sun-line'
 * @returns {string} 'ri-moon-line' si le bouton de thème contient la classe 'ri-sun-line', sinon 'ri-sun-line'
 */
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Si un thème a été sélectionné,
if (selectedTheme) {
    // ajoute ou supprime la classe 'dark-theme' du body du document et la classe 'ri-sun-line' du bouton de thème
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Active / désactive le thème manuellement à l'aide du bouton
themeButton.addEventListener('click', () => {
    // Ajoute ou supprime  le thème sombre & l'iône
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({   
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // Réinitialise l'animation à chaque fois que l'utilisateur fait défiler la page
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container, 
            .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})