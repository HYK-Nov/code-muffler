const promiseTask = (num:number) => {
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log(++num + "번째 promise 작업");
      resolve(num);
    }, 500);
  })
};

promiseTask(0)
  .then((res:number)=>promiseTask(res))
  .then((res:number)=>promiseTask(res))
  .catch((err)=>console.error(err));