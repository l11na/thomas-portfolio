document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
});

function initNavigation() {
  const sections = document.getElementsByClassName('section');
  const mainMenuButtons = document.getElementsByClassName('menu-button');
  const sideMenuButtons = document.querySelectorAll('#side-menu .menu-button');
  const filterButtons = document.querySelectorAll('.filter-button');
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

  // Filter button click handling
  for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener('click', () => {
      const filter = filterButtons[i].dataset.filter;
      filterProjects(filter);
    });
  }

  function navigateToSection(index) {
    if (index < 0 || index >= sections.length) {
      return;
    }

    // Hide all sections
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }

    // Show the selected section
    sections[index].classList.add('active');

    // Check if the selected section is a project section
    const selectedSection = sections[index];
    const isProjectSection = selectedSection.classList.contains('project-section');

    // Toggle the visibility of the side menu based on the section type
    const sideMenu = document.getElementById('side-menu');
    if (isProjectSection) {
      sideMenu.classList.add('visible');
    } else {
      sideMenu.classList.remove('visible');
    }
  }

  function filterProjects(filter) {
    // Hide all project sections
    const projectSections = document.getElementsByClassName('project-section');
    for (let i = 0; i < projectSections.length; i++) {
      projectSections[i].style.display = 'none';
    }

    // Show the project sections matching the filter
    const filteredProjectSections = document.querySelectorAll(`[data-filter="${filter}"]`);
    for (let i = 0; i < filteredProjectSections.length; i++) {
      filteredProjectSections[i].style.display = 'block';
    }
  }
}
