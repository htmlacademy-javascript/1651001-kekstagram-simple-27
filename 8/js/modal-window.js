import {isEscapeKey, isEnterKey} from './util.js';
import {resetScale} from './img-scale.js';
import {resetEffects} from './img-filters.js';
import {sendImageData} from './api.js';
import {createSuccessMessageUpload, createErrorMessageUpload} from './upload-alert.js';
import {pristine} from './validation.js';

const uploadUserPhoto = document.querySelector('#upload-file');
const modalWindow = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const userCloseModalWindow = document.querySelector('#upload-cancel');
const pictureUploadInput = body.querySelector('.img-upload__input');
const submitButton = body.querySelector('.img-upload__submit');
const form = body.querySelector('.img-upload__form');

const onPopupEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal() {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

uploadUserPhoto.addEventListener('change', () => {
  openUserModal();
});

uploadUserPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

function closeUserModal() {
  resetScale();
  resetEffects();
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  form.reset();
}

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

pictureUploadInput.addEventListener('change', () => {
  openUserModal();
});

const lockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unlockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    document.removeEventListener('keydown', onPopupEscKeydown);
    const isValid = pristine.validate();
    if (isValid) {
      lockSubmitButton();
      sendImageData(
        () => {
          onSuccess();
          createSuccessMessageUpload();
          unlockSubmitButton();
        },
        () => {
          createErrorMessageUpload();
          unlockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};


export {setUserFormSubmit, closeUserModal};
