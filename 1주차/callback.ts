function task(num:number){
  console.log(`${num}번째 콜백 작업`)
}

setTimeout(()=>{
  task(1);
  setTimeout(()=>{
    task(2);
    setTimeout(()=>{
      task(3);
    }, 1000)
  }, 1000)
},1000)