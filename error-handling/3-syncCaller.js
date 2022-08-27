// 동기방식일때

const { someFunc } = require('./1-func');

function caller() {
    // 성공 케이스
    const someValueWithParam = someFunc(1);
    console.log("someValue:", someValueWithParam)

    // ㅇ
}
caller();