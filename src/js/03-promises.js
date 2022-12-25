import Notiflix from 'notiflix';

function createPromise(position, delay) {

  const promise = new Promise ((res,rej) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout (()=> {
          if (shouldResolve) {
            res(`✅ Fulfilled promise ${position} in ${delay}ms`);
          } else {
            rej(`❌ Rejected promise ${position} in ${delay}ms`);
          }
    }, delay);
  })

  return promise;
}

const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const frmElements = evt.currentTarget.elements;

  const iDelay = frmElements.delay.value;
  const iStep = frmElements.step.value;
  const iNumber = frmElements.amount.value;
  
  for (let i = 0; i < iNumber; i += 1) {
    let newDelay = Number(iDelay) + i * Number(iStep);
    
    createPromise(i+1, newDelay)
      .then(greeting => Notiflix.Notify.success(greeting))
      .catch(error => Notiflix.Notify.failure(error));
  }

}