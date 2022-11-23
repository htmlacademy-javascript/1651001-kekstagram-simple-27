const picturesWrapper = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createMiniatures = (galleryValue) => {
  const pictureFragment = document.createDocumentFragment();

  galleryValue.forEach((image) => {
    const picture = pictureTemplate.cloneNode(true);
    const pictureImage = picture.querySelector('.picture__img');
    const pictureLikes = picture.querySelector('.picture__likes');
    const pictureComments = picture.querySelector('.picture__comments');
    pictureImage.src = image.url;
    pictureLikes.textContent = image.likes;
    pictureComments.textContent = image.comments;
    pictureFragment.appendChild(picture);
  });

  picturesWrapper.appendChild(pictureFragment);
};

export {createMiniatures};
