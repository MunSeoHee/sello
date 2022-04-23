const sello = require('../database/sello');

exports.insertContentLanguageMapping = function (content_no, language_no_list) 
{
    const values =[];
    language_no_list.forEach(language_no => {
        values.push([content_no, language_no])
    });
    query = `
        INSERT INTO 
            t_content_language_mapping (content_no, language_no) 
        VALUES 
            ?
    `;
    return sello.query(query, [values]);
} 
