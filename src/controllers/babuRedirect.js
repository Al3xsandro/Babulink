const client = require('../config/database');
const valid = require('valid-url');

exports.get = (req, res) => {
    client.query(`SELECT url FROM babulink WHERE short_url=$1`, [req.params.short_id], (err, data) => {
        if (err) {
            return res.status(500).send({ data: 'This url not exists'})
        } else if (data.rows.length === 0){
            return res.status(404).send({data: 'This url not exists'})
        }

        const url = data.rows[0].url

        if (!valid.isUri(url)){
            return res.redirect(302, 'https://' + url)
        } else {
            return res.redirect(302, url)
        }
    })
}
