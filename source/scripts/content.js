import { random } from './function.js';

const imageContainers = document.querySelectorAll('.content__container');

for (const item of imageContainers) {
  let counterImage = random(0, item.querySelectorAll('.content__image').length - 1);
  item.querySelector('.content__input').value = counterImage;
  const contentButtonPrevImage = item.querySelector('.content__button--prev');
  const contentButtonNextImage = item.querySelector('.content__button--next');
  const contentButtonDetailed = item.querySelector('.content__button--detailed');
  const contentImages = item.querySelectorAll('.content__image');
  const contentDescription = item.querySelector('.content__description');
  activeImage(contentImages, counterImage);

  contentButtonPrevImage.addEventListener('click', () => {
    counterImage--;
    counterImage = counterImage < 0 ? contentImages.length - 1 : counterImage;
    activeImage(contentImages, counterImage);
  });

  contentButtonNextImage.addEventListener('click', () => {
    counterImage++;
    counterImage = counterImage > contentImages.length - 1 ? 0 : counterImage;
    activeImage(contentImages, counterImage);
  });

  contentButtonDetailed.addEventListener('click', (event) => {
    item.classList.add('content__container--active');
    document.addEventListener('keydown', escapeKey);
    event.stopPropagation();
    document.addEventListener('click', closeDetailed);

    contentDescription.addEventListener('mouseout', () => {
      item.classList.remove('content__container--active');
      document.removeEventListener('keydown', escapeKey);
    });
  });

  contentDescription.addEventListener('click', () => {
    item.classList.remove('content__container--active');
    document.removeEventListener('keydown', escapeKey);
  });
}

function activeImage(contentImages, counterImage) {

  for (const image of contentImages) {
    image.classList.remove('content__image--active');
  }

  contentImages[counterImage].classList.add('content__image--active');
}

function escapeKey(event) {
  if (event.key === 'Escape') {
    for (const item of imageContainers) {
      item.classList.remove('content__container--active');
    }
  }
}

function closeDetailed() {
  document.querySelectorAll('.content__container--active').forEach((item) => {
    item.classList.remove('content__container--active');
  });
  document.removeEventListener('click', closeDetailed);
}
