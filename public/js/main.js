const togglers = document.querySelectorAll('[class*=toggler]');
togglers.forEach((toggler) => {
  toggler.addEventListener('click', (evt) => {
    document.querySelector(toggler.dataset.target).classList.toggle('nav-menu_expanded');
  })
})

document.querySelectorAll('.about-card').forEach((card) => {
  card.addEventListener('click', (evt) => {
    const subtitle = card.querySelector('p');
    console.log(Boolean(subtitle.style.maxHeight));
    if (subtitle.style.maxHeight) {
      subtitle.style.maxHeight = null;
    } else {
      subtitle.style.maxHeight = subtitle.scrollHeight + 'px';
    }
    card.classList.toggle('active');
  })
})
