// await 방식

const { someAsyncFunc } = require('./2-asyncFunc');

async function caller() {
    console.log("첫번째 콘솔")
    try {
        await someAsyncFunc();
    } 
    catch(error) {
        console.log(error);
    }
    console.log("두 번째 콘솔")
}
caller();