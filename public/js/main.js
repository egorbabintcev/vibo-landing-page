const togglers = document.querySelectorAll('[class*=toggler]');
togglers.forEach((toggler) => {
  toggler.addEventListener('click', (evt) => {
    document.querySelector(toggler.dataset.target).classList.toggle('nav-menu_expanded');
  })
})
