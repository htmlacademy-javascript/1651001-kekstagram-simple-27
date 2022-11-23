import {createMiniatures} from './miniatures.js';
import {getImageData} from './api.js';
import {showAlert} from './util.js';
import {setUserFormSubmit, closeUserModal} from './modal-window.js';

getImageData(createMiniatures, showAlert);
setUserFormSubmit(closeUserModal);
