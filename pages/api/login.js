import Db from '../../components/db/login';


export default async function handler(req, res) {
  if(req.method == "POST"){
    res.statusCode = 200
    res.send(await Db(req.body));
    }
  }