var express = require('express');
var router = express.Router();
const BaseController = require('../controllers/contents');
const contentSchema = require('../schema/content_schema');
const validationRequestSchema = require('../middleware/validate_request_schema');
/* GET home page. */
router.post(
  '/', async (res, req) => {
    contentSchema.insertContent;
    validationRequestSchema;
    await BaseController.insertContent(res, req);
  }
);

router.get(
  '/list', async (res, req) => {
    contentSchema.getContentList;
    validationRequestSchema;
    await BaseController.getContentList(res, req);
  }
);

module.exports = router;
