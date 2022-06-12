const Validator = require('validator');


const recipee_secure = (req, res, next) => {
    const validator = {
        "Food_Name": "required|string",
        "Ingredients": "required|string",
        "phone": "required|string",
        "password": "required|string|min:6|confirmed",
        
    }
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412)
                .send({
                    success: false,
                    message: 'Validation failed'
                })
        }
    })
}

module.exports = {
    recipee_secure
}
