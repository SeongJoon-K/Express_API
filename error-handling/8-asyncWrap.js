// 컨트롤러 사이의 이음새 역할을 하는 asyncwrap

function asyncWrap (asyncController) {
    return async (req, res, next) => {
        try {
            await asyncController(req, res)
        }
        catch(error) {
            next(error);
        }
    };
}

module.exports = asyncWrap;