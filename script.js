document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
});

function initNavigation() {
  const sections = document.getElementsByClassName('section');
  const mainMenuButtons = document.getElementsByClassName('menu-button');
  const sideMenuButtons = document.querySelectorAll('#portfolio .menu-button[data-section^="project"]');
  let currentSectionIndex = 0;

  // Display the initial section
  sections[currentSectionIndex].classList.add('active');

  // Main menu button click navigation
  for (let i = 0; i < mainMenuButtons.length; i++) {
    mainMenuButtons[i].addEventListener('click', () => {
      const sectionId = mainMenuButtons[i].dataset.section;
      const sectionIndex = Array.from(sections).findIndex((section) => section.id === sectionId);
      navigateToSection(sectionIndex);
    });
  }

  // Side menu button click navigation
  for (let i = 0; i < sideMenuButtons.length; i++) {
    sideMenuButtons[i].addEventListener('click', () => {
      const sectionId = sideMenuButtons[i].dataset.section;
      const sectionIndex = Array.from(sections).findIndex((section) => section.id === sectionId);
      navigateToSection(sectionIndex);
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
