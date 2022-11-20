const INPUT_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const OUTPUT_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getImageData = (onSuccess, onFail) => {
  fetch(INPUT_DATA_URL)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => {
      onFail();
    });
};

const sendImageData = (onSuccess, onFail, body) => {
  fetch(
    OUTPUT_DATA_URL,
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
