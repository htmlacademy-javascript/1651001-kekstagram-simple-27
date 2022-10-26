import {generatedPhotos} from './data.js';

const miniatures = document.querySelector('.pictures');

const miniatureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderMiniature = () => {
  const similarListFragment = document.createDocumentFragment();
  generatedPhotos.forEach(({url, likes, comments}) => {
    const miniatureElement = miniatureTemplate.cloneNode(true);
    miniatureElement.querySelector('.picture__img').src = url;
    miniatureElement.querySelector('.picture__likes').textContent = likes;
    miniatureElement.querySelector('.picture__comments').textContent = comments;
    similarListFragment.appendChild(miniatureElement);
  });
  miniatures.appendChild(similarListFragment);
};

export {renderMiniature};
