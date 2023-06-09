import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector(".form");
formEl.addEventListener('submit', handleSubmitForm);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {  
    setTimeout(() => {      
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }      
    }, delay);    
  });
};

function handleSubmitForm(evt) {
  evt.preventDefault();
  
  let delay = Number(evt.target.elements.delay.value);
  let step = Number(evt.target.elements.step.value);
  let amount = Number(evt.target.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  };
}
  
