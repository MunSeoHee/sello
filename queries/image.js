const sello = require('../database/sello');

exports.insertContentImange = function (content_no, image_url_list) 
{
    const values =[];
    image_url_list.forEach(image_url => {
        values.push([content_no, image_url])
    });
    query = `
        INSERT INTO 
            t_image (content_no, url) 
        VALUES 
            ?
    `;
    return sello.query(query, [values]);
} 