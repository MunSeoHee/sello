const sello = require('../database/sello');

exports.insertContent = async function (profile_url, nickname, introduce, category_no) 
{
    return new Promise(function (resolve, reject) {
        console.log("insert promise");
        const insertId = null;
        query = `
            INSERT INTO 
                t_content (profile_url, nickname, introduce, category_no) 
            VALUES 
                ( ?, ?, ?, ? )
        `;
        temp = sello.query(
            query, 
            [profile_url, nickname, introduce, category_no], 
            function (error, results) { 
                if (error) throw error; 
                resolve(results.insertId);
            }
        );
        return insertId;
    });
    
} 

exports.getContentNoList = async function () 
{
    return new Promise(function (resolve, reject) {
        query = `
            SELECT
                no
            FROM 
                t_content c
                LEFT JOIN t_view_link_click_count vlcc ON (vlcc.content_no = c.no)
            ORDER BY
                vlcc.view_count, c.ins_datetime
        `;
        sello.query(query, function(err, result) {
            resolve(result);
        });
    });
} 

exports.getContentList = async function (content_no_list) 
{
    return new Promise(function (resolve, reject) {
        query = `
            SELECT 
                c.NO, nickname, introduce, profile_url, group_concat(i.url) AS image_urls
            FROM 
                t_content c
                LEFT JOIN t_image i ON (i.content_no = c.no)
                LEFT JOIN t_view_link_click_count vlcc ON (vlcc.content_no = c.no)
            WHERE
                c.no IN (?)
            GROUP BY
                c.no
            ORDER BY
                FIELD(c.no, ?)
        `;
        sello.query(query, [content_no_list, content_no_list], function(err, result) {
            resolve(result);
        });
    });
} 
