// 비동기 에러 핸들링 실패사례 unhandled 에러로 잡히는 케이스

const { someAsyncFunc } = require('./2-asyncFunc');

function caller() {
    try {
        someAsyncFunc();
    } catch(error) {
        console.log(error);
        console.log("에러에 대한 catch가 잘 잡혔으면 나와야하는 메세지")
    }
}
caller();