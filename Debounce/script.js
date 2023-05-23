<<<<<<< HEAD
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
=======
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
>>>>>>> 066d2f545c07f0ba48a6b228adf350267defd274
const timerFunc = DelayFunc(getData, 2000);