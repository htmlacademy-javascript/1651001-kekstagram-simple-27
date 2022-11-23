const DATA_URL_INPUT = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const DATA_URL_OUTPUT = 'https://27.javascript.pages.academy/kekstagram-simple';

const getImageData = (onSuccess, onFail) => {
  fetch(DATA_URL_INPUT)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {
      onFail();
    });
};

const sendImageData = (onSuccess, onFail, body) => {
  fetch(
    DATA_URL_OUTPUT,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};


export {sendImageData, getImageData};
