const { check } = require('express-validator');

const schema = {
    insertContent : [
        check('profile_url')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('nickname')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('introduce')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('category_no')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
    ],
    schema2 : [
        check('name')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('name1')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
    ]
}

module.exports = schema;