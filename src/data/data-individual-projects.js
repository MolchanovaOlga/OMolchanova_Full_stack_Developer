// ---------------------------------------- Ways to individual projects images ----------------------------------------

import phoneBookMob1 from '../assets/img/individual-projects/phonebook-mob-1x.jpg';
import phoneBookMob2 from '../assets/img/individual-projects/phonebook-mob-2x.jpg';
import phoneBookTablDesk1 from '../assets/img/individual-projects/phonebook-tabl-desk-1x.jpg';
import phoneBookTablDesk2 from '../assets/img/individual-projects/phonebook-tabl-desk-2x.jpg';

import imageSearchMob1 from '../assets/img/individual-projects/image-search-mob-1x.jpg';
import imageSearchMob2 from '../assets/img/individual-projects/image-search-mob-2x.jpg';
import imageSearchTablDesk1 from '../assets/img/individual-projects/image-search-tabl-desk-1x.jpg';
import imageSearchTablDesk2 from '../assets/img/individual-projects/image-search-tabl-desk-2x.jpg';

import moviesMob1 from '../assets/img/individual-projects/movies-mob-1x.jpg';
import moviesMob2 from '../assets/img/individual-projects/movies-mob-2x.jpg';
import moviesTablDesk1 from '../assets/img/individual-projects/movies-tabl-desk-1x.jpg';
import moviesTablDesk2 from '../assets/img/individual-projects/movies-tabl-desk-2x.jpg';

import galleryMob1 from '../assets/img/individual-projects/gallery-mob-1x.jpg';
import galleryMob2 from '../assets/img/individual-projects/gallery-mob-2x.jpg';
import galleryTablDesk1 from '../assets/img/individual-projects/gallery-tabl-desk-1x.jpg';
import galleryTablDesk2 from '../assets/img/individual-projects/gallery-tabl-desk-2x.jpg';

import webStudioMob1 from '../assets/img/individual-projects/web-studio-mob-1x.jpg';
import webStudioMob2 from '../assets/img/individual-projects/web-studio-mob-2x.jpg';
import webStudioTablDesk1 from '../assets/img/individual-projects/web-studio-tabl-desk-1x.jpg';
import webStudioTablDesk2 from '../assets/img/individual-projects/web-studio-tabl-desk-2x.jpg';

// ---------------------------------------- Arrays of individual projects data ----------------------------------------

const individualProjects = [
  {
    name: 'Phonebook',
    technologies: 'React, Redux Toolkit, Vite, Vercel, JWT',
    descriptionUA:
      'Застосунок із маршрутизацією для зберігання контактів телефонної книги з реєстрацією, логінізацією та можливістю оновлення користувача за допомогою JWT. Застосунок складається з форми, списку контактів та поля пошуку для фільтрації списку контактів. Використано бібліотеки React Router, Formik, Yup, Persist, React Icons, React Hot Toast, react-loader-spinner, Axios.',
    descriptionEN:
      'A routing application for storing phonebook contacts with registration, login and user updateability using JWT. The application consists of a form, a list of contacts and a search field for filtering the list of contacts. Libraries such as React Router, Formik, Yup, Persist, React Icons, React Hot Toast, react-loader-spinner, Axios were used.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://goit-react-hw-08-ochre-three.vercel.app/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/goit-react-hw-08',
    imageMobBig: `${phoneBookMob2}`,
    imageMobSmall: `${phoneBookMob1}`,
    imageTablDeskBig: `${phoneBookTablDesk2}`,
    imageTablDeskSmall: `${phoneBookTablDesk1}`,
  },
  {
    name: 'Image Search',
    technologies: 'Type Script, React, Vite, Vercel',
    descriptionUA:
      'Застосунок пошуку зображень за ключовим словом. Використано пагінацію, бібліотеки React Modal, React Hot Toast, react-loader-spinner, Axios та АРІ сервіс зображень Unsplash.',
    descriptionEN:
      'An image search application by keyword. Pagination, libraries such as React Modal, React Hot Toast, react-loader-spinner, Axios and Unsplash image service were used.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://goit-typescript-hw-02-iota.vercel.app/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/goit-typescript-hw-02',
    imageMobBig: `${imageSearchMob2}`,
    imageMobSmall: `${imageSearchMob1}`,
    imageTablDeskBig: `${imageSearchTablDesk2}`,
    imageTablDeskSmall: `${imageSearchTablDesk1}`,
  },
  {
    name: 'Movies',
    technologies: 'React, React Router, Vite, Vercel',
    descriptionUA:
      'Застосунок із маршрутизацією для пошуку фільмів за назвою та детальним описом фільму. Використано асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи React.lazy та Suspense, бібліотеки React Router, React Hot Toast, react-loader-spinner, Axios та АРІ сервіс TMDB.',
    descriptionEN:
      'A routing app to find movies by title and detailed movie description. Used asynchronous loading of JS code for application routes using React.lazy and Suspense, libraries such as React Router, React Hot Toast, react-hot-toast, react-loader-spinner, Axios and API service TMDB.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://goit-react-hw-05-ten-chi.vercel.app/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/goit-react-hw-05',
    imageMobBig: `${moviesMob2}`,
    imageMobSmall: `${moviesMob1}`,
    imageTablDeskBig: `${moviesTablDesk2}`,
    imageTablDeskSmall: `${moviesTablDesk1}`,
  },
  {
    name: 'Gallery',
    technologies: ' JS, HTML, CSS, Vite',
    descriptionUA:
      'Застосунок пошуку зображень за ключовим словом і їх перегляду в галереї з плавним прокручуванням сторінки.  Використано пагінацію, бібліотеки  Axios,  iziToast, css-loader, SimpleLightbox та АРІ сервіс Pixabay.',
    descriptionEN:
      'The application is created for searching images by keyword and viewing them in a gallery with smooth page scrolling. The libraries Axios, iziToast, css-loader, SimpleLightbox and the API service of Pixabay were used.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://molchanovaolga.github.io/goit-js-hw-12/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/goit-js-hw-12',
    imageMobBig: `${galleryMob2}`,
    imageMobSmall: `${galleryMob1}`,
    imageTablDeskBig: `${galleryTablDesk2}`,
    imageTablDeskSmall: `${galleryTablDesk1}`,
  },
  {
    name: 'WebStudio',
    technologies: 'HTML, JS, SCSS, SASS',
    descriptionUA:
      'Cайт розроблений для компанії  “WebStudio”. Адаптивний дизайн, ефекти трансформації, модальні вікна.',
    descriptionEN:
      'The site is created for the company `WebStudio`. Adaptive design, transformation effects, modal windows.',
    projectEN: 'Individual project',
    projectUA: 'Індивідуальний проєкт',
    urlOfSite: 'https://molchanovaolga.github.io/GoIt-markup-hw-8-uk/',
    urlOfGithub: 'https://github.com/MolchanovaOlga/GoIt-markup-hw-8-uk',
    imageMobBig: `${webStudioMob2}`,
    imageMobSmall: `${webStudioMob1}`,
    imageTablDeskBig: `${webStudioTablDesk2}`,
    imageTablDeskSmall: `${webStudioTablDesk1}`,
  },
];

export { individualProjects };
