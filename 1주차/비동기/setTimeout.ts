function task(){
  console.log("작업 끝");
}

console.log("시작");
setTimeout(task, 1000);
console.log("다음 작업");