const validator = require( './validate');


const recipee_secure = (req, res, next) => {
    const validation_rule = {
        Food_Name: "required|string",
        Ingredients: "required|string",
        Benefits: "required|string",
        Direction: "required|string",
        
    }
    validator(req.body, validation_rule, {}, (err, status) => {
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
