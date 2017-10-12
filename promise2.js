'use strict';

var promise = new Promise(function (resolve, reject) {
  // Your solution here
  resolve("FULFILLED!");
  
  setTimeout(function(fufill) {
    }, 300);
});

promise.then(function(resolve) {
    console.log(resolve);
});