const isEscapeKey = (evt) => evt.key === 'Escape';
const isEnterKey = (evt) => evt.key === 'Enter';

const MESSAGE_ALERT = 'Ошибка загрузки данных, попробуйте обновить страницу.';
const showAlert = () => {
  const сontainerAlert = document.createElement('div');
  сontainerAlert.style.zIndex = '100';
  сontainerAlert.style.position = 'absolute';
  сontainerAlert.style.left = '0';
  сontainerAlert.style.top = '0';
  сontainerAlert.style.right = '0';
  сontainerAlert.style.padding = '2% 2%';
  сontainerAlert.style.fontSize = '20px';
  сontainerAlert.style.textAlign = 'center';
  сontainerAlert.style.borderBottomRightRadius = '10%';
  сontainerAlert.style.borderBottomLeftRadius = '10%';
  сontainerAlert.style.backgroundColor = '#cc6600';
  сontainerAlert.textContent = MESSAGE_ALERT;
  document.body.append(сontainerAlert);
  setTimeout(() => {
    сontainerAlert.remove();
  }, 5000);
};


export {isEscapeKey, isEnterKey, showAlert};
