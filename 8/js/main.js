import {createMiniatures} from './miniatures.js';
import {getImageData} from './api.js';
import {setUserFormSubmit, closeUserModal} from './modal-window.js';

getImageData((pictures) => {
  createMiniatures(pictures);
});

setUserFormSubmit(closeUserModal);
