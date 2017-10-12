var promise = new Promise(function(resolve, reject) {
    resolve('this is my resolve value');
    reject('this is my reject value');
});
promise.catch(function(resolve) {
    console.log(resolve.message);
});
Promise.resolve('this is my resolve value');
Promise.reject('this is my reject value');