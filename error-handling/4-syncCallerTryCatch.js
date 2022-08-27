// 동기방식 try-catch 구문 적용

const { someFunc } = require('./1-func');

function caller() {
    // // #1 
    // const someValueWithParam = someFunc(1);
    // console.log("someValue:", someValueWithParam);

    // #2
    try {
        const someValueWithoutParam = someFunc();
        // 에러가 발생해서 더이상 진행이 안됨.
        console.log('someValue', someValueWithoutParam);
    } catch(error) {
        console.log(error); // Error : someError
    }

    console.log("여기는 실행됩니다");
}

caller();