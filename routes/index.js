var express = require('express');
var router = express.Router();
const BaseController = require('../controllers/contents');
const contentSchema = require('../schema/content_schema');
const validationRequestSchema = require('../middleware/validate_request_schema');
/* GET home page. */
router.post(
  '/', 
  contentSchema.insertContent,
  validationRequestSchema,
  BaseController.insertContent
);

module.exports = router;
