// promise-catch 방식

const { someAsyncFunc } = require('./2-asyncFunc');

function caller() {
    console.log("첫 번째 콘솔");
    someAsyncFunc().catch((error) => {
        console.log(error);
    });
    console.log('두 번째 콘솔');
}
caller();