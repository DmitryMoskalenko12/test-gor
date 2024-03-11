const header = () => {
    const burger = document.querySelector('.menu__hamburger');
    const sideMenu = document.querySelector('.menu__nav');
    const close = document.querySelector('.menu__close');
    const overlay = document.querySelector('.overlay');

    close.addEventListener('click', () => {
      sideMenu.classList.remove('menu__nav_active');
      burger.classList.remove('menu__hamburger_active');
      overlay.classList.remove('overlay_active');
    });

    overlay.addEventListener('click', () => {
      sideMenu.classList.remove('menu__nav_active');
      burger.classList.remove('menu__hamburger_active');
      overlay.classList.remove('overlay_active');
    })

    burger.addEventListener('click', () => {
     burger.classList.toggle('menu__hamburger_active');
     sideMenu.classList.toggle('menu__nav_active');
     overlay.classList.add('overlay_active');
    })
    
    }
    
    export default header;