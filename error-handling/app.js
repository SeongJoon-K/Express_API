const express = require('express');
const { someFunc } = require('./1-func');
const { someAsyncFunc } = require('./2-asyncFunc');

const app = express();

// app.get('/someFunc', (req, res) => {
//     const { someQuery } = req.query;

//     const someValue = someFunc(someQuery);

//     res.json({ result: someValue });
// });

// // error handling 미들웨어 적용




// 비동기 모듈 에러 못잡는 것

app.get('/someAsyncFunc', async (req, res) => {
    const { someQuery } = req.query;

    const someValue = await someAsyncFunc(someQuery);

    res.json({ result: someValue });
})


// asyncWrap 적용 미들웨어

const asyncWrap = require('./8-asyncWrap');

app.get('/someAsyncFuncMiddleware', asyncWrap( async (req, res) => {
    const { someQuery } = req.query;

    const someValue = await someAsyncFunc(someQuery);

    res.json({ result: someValue });
})); 


app.use((err, req, res, next) => {
    if (err.message === 'someError') {
        res.status(400).json({ message: "someQuery not found."});
        return;
    }

    res.status(500).json({ message: "internal server error"});
})

app.listen(3000);