function initNavigation() {
    const sections = document.getElementsByClassName('section');
    let currentSectionIndex = 0;
  
    // Display the initial section
    sections[currentSectionIndex].classList.add('active');
  
    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        navigateToSection(currentSectionIndex - 1);
      } else if (event.key === 'ArrowRight') {
        navigateToSection(currentSectionIndex + 1);
      }
    });
  
    // Button click navigation
    const menuButtons = document.getElementsByClassName('menu-button');
    for (let i = 0; i < menuButtons.length; i++) {
      menuButtons[i].addEventListener('click', () => {
        navigateToSection(i);
      });
    }
  
    function navigateToSection(index) {
      if (index < 0 || index >= sections.length) {
        return;
      }
  
      sections[currentSectionIndex].classList.remove('active');
      currentSectionIndex = index;
      sections[currentSectionIndex].classList.add('active');
    }
  }
  