const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];


// Создание и рендер разметки по массиву данных galleryItems из app.js
// и предоставленному шаблону.

const galleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const imageRef = document.querySelector('.lightbox__image');
const closeBtn = document.querySelector('.lightbox__button');


const galleryElem = galleryItems.map(elem => {
  return `<li class = "gallery__item">
    <a class = "gallery__link" href = "${elem.original}">
    <img
      class="gallery__image"
      src="${elem.preview}"
      data-source="${elem.original}"
      alt="${elem.description}"
    />
    </a>
    </li>`
}).join('');

galleryRef.insertAdjacentHTML('afterbegin', galleryElem);


// Реализация делегирования на галерее ul.js-gallery и получение url
// большого изображения.
// Открытие модального окна по клику на элементе галереи.
// Подмена значения атрибута src элемента img.lightbox__image.

galleryRef.addEventListener("click", e => {
  if (e.target.nodeName !== "IMG") return;
  e.preventDefault();
  modalRef.classList.add("is-open");
  imageRef.src = e.target.dataset.source;
  imageRef.alt = e.target.alt;
});

// Закрытие модального окна по клику на кнопку
// button[data - action= "close-lightbox"].
// Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии модального
// окна, пока грузится изображение, мы не видели предыдущее.

modalRef.addEventListener('click', e => {
  if (e.target.nodeName === "IMG") return;
  imageRef.src = '';
  imageRef.alt = '';
  modalRef.classList.remove("is-open");
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    imageRef.src = '';
    imageRef.alt = '';
    modalRef.classList.remove("is-open");
  }
});

// modalRef.addEventListener('click', () => {
//   closeBtn.addEventListener('click', () => {
//     imageRef.src = '';
//     imageRef.alt = '';
//     modalRef.classList.remove("is-open");
//   });
// });