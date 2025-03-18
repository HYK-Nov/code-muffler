const asyncFunc = async () => {
  return "success";
};
asyncFunc()
  .then(res => console.log(res));

const asyncFunc2 = async () => {
  const promise = new Promise((resolve) => setTimeout(() => resolve("asyncFunc2 완료"), 1000));
  const result = await promise;
  console.log(result);
};
asyncFunc2();

/*
const asyncFunc3 = async () => {
  try {
    const promise = await Promise.reject("asyncFunc3 에러");
  }catch(err) {
    console.error(err);
  }
};
asyncFunc3();*/
const asyncFunc3 = async () => {
  const promise = await Promise.reject("asyncFunc3 에러");
};
asyncFunc3().catch(res => console.error(res));
