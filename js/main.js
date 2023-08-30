function mostrarMensajeInicial() {

  if (confirm('PAGINA EN DESARROLLO')) {
    alert('VUELVA PRONTO');
  } else {
    alert('...');
  }

}

function makeLinksSmooth() { 
    const navLinks = document.querySelectorAll("nav a"); 
  
    navLinks.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
  
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: "smooth", });
    }
  }
document.addEventListener("DOMContentLoaded", () => {
  const scrollToBottomButtom = document.getElementById('btn-ir-arriba');

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollToBottomButtom.style.display = 'block';
    } else {
      scrollToBottomButtom.style.display = 'none';
    }
  })

  scrollToBottomButtom.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  })
})
