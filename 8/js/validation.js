const MIN_DESCR_LENGTH = 20;
const MAX_DESCR_LENGTH = 140;

const form = document.querySelector('.img-upload__form');

const pristine = new Pristine(form, {
  classTo: 'text',
  errorTextParent: 'text',
  errorTextTag: 'div'
});

const validateDescription = (value) => value.length >= MIN_DESCR_LENGTH && value.length <= MAX_DESCR_LENGTH;

pristine.addValidator(form.querySelector('.text__description'), validateDescription, 'От 20 до 140 символов.');

form.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});


export {pristine};
