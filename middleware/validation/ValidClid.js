import Joi from "joi";
let arr2 = []
let METHOD = ["body", "params"]
let Schem = {
    body: Joi.object({
        User_name: Joi.string().required().min(5).max(25),
        password: Joi.string().required().pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)
    }),
    params: Joi.object({
        id: Joi.string()
    })
}
const validation2 = async (req, res, next) => {
    let arr = []
    METHOD.map((key) => {
        let { error } = Schem[key].validate(req[key], { abortEarly:false })

        if (error) {
            error.details.map((mes) => {

                arr.push(mes.message)
            })
        }

    })

    if (arr.length > 0) {
        res.json(arr)
    }
    else {
        next()
    }
}


export { validation2 }
