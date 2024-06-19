const container = document.querySelector('.container');
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const Register = document.querySelector('.Register');
const iconClose = document.querySelector('.icon-close');


    signupLink.addEventListener('click', ()=> {
        container.classList.add('activo')
    });
    loginLink.addEventListener('click', ()=> {
        container.classList.remove('activo')
    });

    btnPopup.addEventListener('click', ()=> {
        container.classList.add('activo-popup')
    });
    iconClose.addEventListener('click', ()=> {
        container.classList.remove('activo-popup')
    });

    