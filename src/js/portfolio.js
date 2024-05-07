import { individualProjects } from '../data/data-individual-projects';
import { teamProjects } from '../data/data-team-projects';

const teamProjectBtn = document.querySelector('input[value="team-projects"]');
const individualProjectBtn = document.querySelector(
  'input[value="individual-projects"]'
);
const projectList = document.querySelector('.portfolio-projects-list');

// -------------------------------   after load portfolio page   -------------------------------
try {
  if (teamProjectBtn.parentNode.classList.contains('selected-radio-label')) {
    drawProjectsList(teamProjects);
    individualProjectBtn.disabled = false;
    teamProjectBtn.disabled = true;
  }

  if (individualProjectBtn.classList.contains('selected-radio-label')) {
    drawProjectsList(individualProjects);
    teamProjectBtn.disabled = false;
    individualProjectBtn.disabled = true;
  }

  teamProjectBtn.addEventListener('click', loadTeamProjects);
  individualProjectBtn.addEventListener('click', loadIndividualProjects);
} catch (error) {
  console.log(error);
}

// -------------------------------   functions for clicking of radio buttons   -------------------------------

async function loadTeamProjects() {
  toggleRadioBtns();
  projectList.innerHTML = '';
  drawProjectsList(teamProjects);
  individualProjectBtn.disabled = false;
  teamProjectBtn.disabled = true;
}

async function loadIndividualProjects() {
  toggleRadioBtns();
  projectList.innerHTML = '';
  drawProjectsList(individualProjects);
  teamProjectBtn.disabled = false;
  individualProjectBtn.disabled = true;
}

// -------------------------------  functions for drawing list of progects content   -------------------------------

function drawProjectsList(arr) {
  const projectsItem = arr
    .map(
      ({
        name,
        technologies,
        descriptionUA,
        projectUA,
        urlOfSite,
        urlOfGithub,
        imageMobBig,
        imageMobSmall,
        imageTablDeskBig,
        imageTablDeskSmall,
      }) => {
        return `
    <li class="portfolio-projects-item">
    <div class="portfolio-projects-left-block">
      <a class="portfolio-projects-site-link" href="${urlOfSite}" target="_blank" aria-label="Link to projects-site" noopener noreferrer>
      <div class="portfolio-projects-image-container">
        <picture>
          <source
          media="(max-width: 767px)"
          srcset="
          ${imageMobSmall} 1x,
          ${imageMobBig} 2x
          "
          />
          <source
            media="(min-width: 768px)"
            srcset="
            ${imageTablDeskSmall} 1x,
            ${imageTablDeskBig} 2x
            "
          />
          <img class="portfolio-projects-image" src="${imageTablDeskSmall}" alt="${name} project" />
        </picture>
        <div class="image-blur">
        <p class="image-blur-text">Перейти на сайт</p>
        </div>
        </div>
      </a>
      <div class="projects-left-text-container">
        <a class="portfolio-projects-github-link" href="${urlOfGithub}" target="_blank" aria-label="Link to projects github page" noopener noreferrer>
          <svg class="portfolio-projects-github-icon" width="24" height="24">
            <use href="/OMolchanova_Front_end_Developer/assets/sprite-0f33a940.svg#icon-github"></use>
          </svg>
        Переглянути код
        </a>
        <p class="portfolio-projects-filter-paragraf">${projectUA}</p>
      </div>
    </div>
    <div class="portfolio-projects-right-block">
    <h3 class="portfolio-project-title">${name}</h3>
    <p class="portfolio-project-technologies">${technologies}</p>
    <div class="portfolio-project-description-container" id="scrollTry">
      <p class="portfolio-project-description">${descriptionUA}</p>
    </div>
    </div>
  </li>
    `;
      }
    )
    .join('');

  projectList.insertAdjacentHTML('beforeend', projectsItem);

  addedScroll();
}

// -------------------------------   added text scroll   -------------------------------

function addedScroll() {
  const textContainer = document.querySelectorAll(
    '.portfolio-project-description-container'
  );

  textContainer.forEach(item => {
    const text = item.querySelector('.portfolio-project-description');
    if (text.clientHeight > item.clientHeight) {
      item.classList.add('scroll-on');
    }
  });
}

// -------------------------------   function for toggle styles of radio buttons   -------------------------------

function toggleRadioBtns() {
  teamProjectBtn.parentNode.classList.toggle('selected-radio-label');
  individualProjectBtn.parentNode.classList.toggle('selected-radio-label');
}
