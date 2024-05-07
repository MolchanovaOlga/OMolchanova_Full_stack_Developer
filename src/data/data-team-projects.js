// ---------------------------------------- Ways to team projects images ----------------------------------------

import focusFrameMob1 from '../assets/img/team-projects/focus-frame-mob-1x.jpg';
import focusFrameMob2 from '../assets/img/team-projects/focus-frame-mob-2x.jpg';
import focusFrameTablDesk1 from '../assets/img/team-projects/focus-frame-tabl-desk-1x.jpg';
import focusFrameTablDesk2 from '../assets/img/team-projects/focus-frame-tabl-desk-2x.jpg';

import energyFlowMob1 from '../assets/img/team-projects/energy-flow-mob-1x.jpg';
import energyFlowMob2 from '../assets/img/team-projects/energy-flow-mob-2x.jpg';
import energyFlowTablDesk1 from '../assets/img/team-projects/energy-flow-tabl-desk-1x.jpg';
import energyFlowTablDesk2 from '../assets/img/team-projects/energy-flow-tabl-desk-2x.jpg';

// ---------------------------------------- Arrays of team projects data ----------------------------------------

const teamProjects = [
  {
    name: 'Energy Flow',
    technologies: ' JS, HTML, CSS, localStorage, Vite',
    descriptionUA:
      'Веб-сайт розроблений для бажаючих мати гарну фізичну форму з адаптивним дизайном, мотивуючою цитатою дня, пошуком за ключовим словом, можливістю додати вправу до улюблених, модальними вікнами, формами та пагінацією.<br>Роль: розробник модального вікна вправи та частково модального вікна рейтингу.',
    descriptionEN:
      'The website is created for fitness enthusiasts with responsive design, motivational quote of the day, keyword search, option to add exercise to favorites, modal windows, forms and pagination.<br>Role: developer of exercise modal and partly of rating modal.',
    projectEN: 'Team project',
    projectUA: 'Командний проєкт',
    urlOfSite: 'https://karolinataran.github.io/project-dev-hunters/',
    urlOfGithub:
      'https://github.com/MolchanovaOlga/dev-hunters-team-project-js',
    imageMobBig: `${energyFlowMob2}`,
    imageMobSmall: `${energyFlowMob1}`,
    imageTablDeskBig: `${energyFlowTablDesk2}`,
    imageTablDeskSmall: `${energyFlowTablDesk1}`,
  },
  {
    name: 'Focuse Frame',
    technologies: 'HTML, CSS, JS, Vite',
    descriptionUA:
      'Веб-сайт розроблений для школи фотографії з адаптивним дизайном, бургер-меню, модальним вікном, формами та анімаціями.<br>Роль: розробник мобільного модального вікна.',
    descriptionEN:
      'The website is created for photography school with responsive design, burger menu, modal window, forms and animations.<br>Role: developer of  mobile modal.',
    projectEN: 'Team project',
    projectUA: 'Командний проєкт',
    urlOfSite: 'https://maxdemo1.github.io/project_First_Flight/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/First_Flight-team-project',
    imageMobBig: `${focusFrameMob2}`,
    imageMobSmall: `${focusFrameMob1}`,
    imageTablDeskBig: `${focusFrameTablDesk1}`,
    imageTablDeskSmall: `${focusFrameTablDesk2}`,
  },
];

export { teamProjects };
