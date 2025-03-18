const promiseAny1 = Promise.reject();
const promiseAny2 = new Promise(resolve => setTimeout(resolve, 500, "slow"));
const promiseAny3 = new Promise(resolve => setTimeout(resolve, 100, "quick"));

Promise.any([promiseAny1, promiseAny2, promiseAny3])
  .then(res => console.log(res));