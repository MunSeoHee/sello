const sello = require('../database/sello');

exports.insertContentSocialLink = function (content_no, social_link_list) 
{
    const values =[];
    social_link_list.forEach(social_link => {
        values.push([content_no, social_link])
    });
    query = `
        INSERT INTO 
            t_social_link (content_no, url) 
        VALUES 
            ?
    `;
    return sello.query(query, [values]);
} 