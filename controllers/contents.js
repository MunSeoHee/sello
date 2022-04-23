
const Content = require('../queries/content');
const ContentLanguageMapping = require('../queries/content_language_mapping');
const ContentImage = require('../queries/image');
const ContentSocialLink = require('../queries/social_link');

exports.insertContent = async function (req, res, next)
{
    const promise1 = await Content.insertContent(req.body.profile_url, req.body.nickname, req.body.introduce, req.body.category_no,);
    ContentLanguageMapping.insertContentLanguageMapping(promise1, req.body.language_no);
    ContentImage.insertContentImange(promise1, req.body.image_url);
    ContentSocialLink.insertContentSocialLink(promise1, req.body.social_link)
    res.json();
}

exports.getContentList = async function (req, res, next)
{
    const content_no_list = await Content.getContentNoList();
    var lastindex = null;
    var target_content_no_list = null;
    content_no_list.find(function(element, index){
        if (element.no == req.query.last_content_no) {
            lastindex = index;
            target_content_no_list = content_no_list.slice(lastindex + 1, lastindex + 1 + parseInt(req.query.limit)).map(row=>row.no)
        }
    });
    if (lastindex === null) target_content_no_list = content_no_list.slice(0, parseInt(req.query.limit)).map(row=>row.no);
    const content_list = await Content.getContentList(target_content_no_list);

    content_list.forEach(content => {
        content_image_urls = content.image_urls.split(",");
        const random = Math.floor(Math.random() * content_image_urls.length);
        content['image_urls'] = content_image_urls[random];
    });
    res.json({
        'total_count' : content_no_list.length,
        "content_list" : content_list
    });
}
