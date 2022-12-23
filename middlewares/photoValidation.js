const {body} = require("express-validator")

const photoInsertValidation = () => {
    return [
        body("title")
            .not()
            .equals("undefined")
            .withMessage("Title is required.")
            .isString(0)
            .withMessage("Title is required.")
            .isLength({min: 3})
            .withMessage("The title must be at least 3 characters long."),
        body("image").custom((value, {req}) => {
            if(!req.file) {
                throw new Error("Image is required.")
            }
            return true
        })
    ]
}

const photoUpdateValidation = () => {
    return [
        body("title")
        .optional()
        .isString()
        .withMessage("Title is required.")
        .isLength({ min: 3 })
        .withMessage("The title must be at least 3 characters long."),
    ]
}

const commentValidation = () => {
    return [
        body("comment").isString().withMessage("Comment is required.")
    ]
}

module.exports = {
    photoInsertValidation,
    photoUpdateValidation,
    commentValidation,
}