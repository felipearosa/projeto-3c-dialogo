const navbar = document.querySelector('.navbar')

export const fixNavbar = () => {
  const elPosition = document.querySelector('.hero-banner').getBoundingClientRect();

  console.log
  window.addEventListener('scroll', () => {
    if (elPosition.height < window.pageYOffset) {
      navbar.classList.add("sticky-top");
      navbar.classList.add("sticky-bar");
    } else {
      navbar.classList.remove("sticky-bar");
      navbar.classList.remove("sticky-top");
    }
  })

}
