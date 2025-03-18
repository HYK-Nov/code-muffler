const promiseAll1 = Promise.resolve(11);
const promiseAll2 = 22;
const promiseAll3 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve(33);
  }, 500);
});

Promise.all([promiseAll1, promiseAll2, promiseAll3])
  .then((res)=> console.log(res));