let header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 20) {
        header.classList.add('scroll');
    }
    else{
        header.classList.remove('scroll')
    }
});