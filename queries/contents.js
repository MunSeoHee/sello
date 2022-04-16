const sello = require('../database/sello');

// exports.getBoard = 'select * from t_content';

exports.insertContent = function (profile_url, nickname, introduce, category_no) 
{
    query = `
        INSERT INTO 
            t_content (profile_url, nickname, introduce, category_no) 
        VALUES 
            ( ?, ?, ?, ? )
    `;
    return sello.query(query, [profile_url, nickname, introduce, category_no]);
} 
