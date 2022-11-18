import {isEscapeKey, isEnterKey} from './util.js';

const body = document.querySelector('body');
const uploadUserPhoto = document.querySelector('#upload-file');
const modalWindow = document.querySelector('.img-upload__overlay');
const userCloseModalWindow = document.querySelector('#upload-cancel');

const onPopupEscapeDown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

export function openUserModal() {
  modalWindow.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscapeDown);
};

uploadUserPhoto.addEventListener('change', () => {
  openUserModal();
});

uploadUserPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

function closeUserModal() {
  modalWindow.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscapeDown);
}

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});
userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});
