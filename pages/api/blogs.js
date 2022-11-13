import * as fs from 'fs';
// http://localhost:3000/api/blogs

export default function handler(req, res) {
    fs.readdir('BlogsData', (err, data) => {
        console.log(data);
        res.status(200).json(data);
    })
}
  