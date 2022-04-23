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
        check('language_no')
            .isArray()
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('image_url')
            .isArray()
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('social_link')
            .isArray()
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
    ],
    getContentList : [
        check('last_content_no')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
        check('limit')
            .not().isEmpty()
            .withMessage('Name must have more than 5 characters'),
    ],
}

module.exports = schema;