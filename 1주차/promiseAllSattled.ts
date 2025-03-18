const promiseAllSattled1 = Promise.reject(11);
const promiseAllSattled2 = Promise.resolve(22);
const promiseAllSattled3 = Promise.resolve(33);

Promise.allSettled([promiseAllSattled1, promiseAllSattled2, promiseAllSattled3])
  .then(res => console.log(res));