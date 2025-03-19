const promiseRace1 = new Promise((resolve, reject) => setTimeout(() => resolve(11), 3000));
const promiseRace2 = new Promise((resolve, reject) => setTimeout(() => resolve(22), 2000));
const promiseRace3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러!")), 1000));

Promise.race([promiseRace1, promiseRace2, promiseRace3])
  .then(res => console.log(res))
  .catch(err => console.error(err));