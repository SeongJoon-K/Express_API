// 동기 함수에서 에러 던지기

function someFunc(someParam) {
    if (!someParam) {
        throw new error('someParam');
    }

    return someParam;
}
module.exports =  { someFunc };