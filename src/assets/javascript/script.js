document.addEventListener('DOMContentLoaded', () => {
    
    // ABRIR E FECHAR O MENU
    
    openMenu.addEventListener('click', () => {
      menu.style.display = 'flex';
      menu.style.right = (menu.clientWidth * -1) + 'px';
      openMenu.style.display = 'none';
  
      setTimeout(() => {
        menu.style.opacity = '1';
        menu.style.right = '0';
      }, 10);
    });
  
    closeMenu.addEventListener('click', () => {
      menu.style.opacity = '0';
      menu.style.right = (menu.clientWidth * -1) + 'px';
  
      setTimeout(() => {
        menu.removeAttribute('style');
        openMenu.removeAttribute('style');
      }, 80);
    });
});   