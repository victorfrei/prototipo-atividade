
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    Id: ObjectId,
    Nick: String,
    Email: String,
    Pass: String,
    date: {type:Date,default:Date.now}
  });



export default async function login({Nick,Email,Pass}){
 
const conn = await mongoose.createConnection(`mongodb+srv://Register:${process.env.R_PASS}@skap.fpqyg.mongodb.net/SkapDB?retryWrites=true&w=majority`,{useNewUrlParser: true,
 useUnifiedTopology: true});
 
const user = conn.model("User",userSchema);
const log = await user.create({Nick:Nick,Email:Email,Pass:Pass})
console.log(log);

      // const token = jwt.sign({exp:60*60,data:{id:_id,profile:"img"} }, process.env.privateKey);
      // return token;
}