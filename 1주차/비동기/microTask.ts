const microTask = Promise.resolve();

/*microTask
  .then(() => console.log("Promise Success"))
  .then(() => console.log("Code End"))
// 에러 이후 처리
  .catch((e) => console.error(e))
  .then(() => console.log("Error End"));*/

let callback = () => console.log("Timeout Callback");
let urgentCallback = () => console.log("urgentCallback");

console.log("주 프로그램 시작");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
console.log("주 프로그램 종료");