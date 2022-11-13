import * as fs from 'fs';
// http://localhost:3000/api/getBlogs?slug=how-to-learn-javscript

export default function handler(req, res) {
    fs.readFile(`BlogsData/${req.query.slug}.json`, 'utf-8', (err, data) => {
        if(err){
            res.status(402).json({error:"No such blog found!"});
        }
        console.log(req.query.slug);
        res.status(200).json(JSON.parse(data));
    })
}