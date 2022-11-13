import * as fs from 'fs';
// http://localhost:3000/api/blogs

export default async function handler(req, res) {
   const data = await fs.promises.readdir('BlogsData');
   let allBlogs= [];
   for(let index=0; index < data.length; index++){
      const item = data[index];
      let myfile = await fs.promises.readFile(`BlogsData/${item}`,'utf-8')
      allBlogs.push(JSON.parse(myfile));
   }
   res.status(200).json(allBlogs);
}
  