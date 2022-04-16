
const ContentsQuery = require('../queries/contents');

exports.insertContent = function (req, res, next)
{
    result = ContentsQuery.insertContent(req.body.profile_url, req.body.nickname, req.body.introduce, req.body.category_no);
    res.json();
}
