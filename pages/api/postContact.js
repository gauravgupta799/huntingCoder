import * as fs from 'fs';

export default async function handler(req, res) {
    try {
      let data = await fs.promises.readdir('ContactData');
      await fs.promises.writeFile(`ContactData/${data.length + 1}.json`, JSON.stringify(req.body));
      res.status(200).json(req.body)
    } catch (err) {
      res.status(500).send({ error: 'failed to fetch data' })
    }
  }