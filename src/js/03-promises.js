const form = document.querySelector('form');

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget;

  let numDelay = Number(delay.value);
  const numStep = Number(step.value);

  for (let i = 0; i < amount.value; i++) {
    createPromise(i + 1, numDelay);
    numDelay += numStep;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  })
    .then(({ position, delay }) =>
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    )
    .catch(({ position, delay }) =>
      console.log(`❌ Rejected promise ${position} in ${delay}ms`)
    );
}
