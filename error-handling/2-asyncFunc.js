// 비동기 함수에서 에러 던지기

async function someAsyncFunc(someParam) {
    if (!someParam) {
        throw new Error('someError');
    }
    //.. someAsyncFunc로직 들어오는 곳
    return someParam;
}

module.exports = { someAsyncFunc };