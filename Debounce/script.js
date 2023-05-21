let counter = 0;

const getData = () => {
    console.log ('Getting Data' + counter ++);
}

const DelayFunc = (call, delay) => {
   let timer;
   return function (...args){
    if(timer){
        clearTimeout(timer);
    }
    setTimeout(() => {
        call();
    }, delay);
   }
}
const timerFunc = DelayFunc(getData, 2000);