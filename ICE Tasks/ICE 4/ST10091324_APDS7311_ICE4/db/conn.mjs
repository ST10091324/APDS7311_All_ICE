import { MongoClient} from 'mongodb'
import dotenv from "dotenv"
dotenv.config()

const connString = process.env.ATLAS_URI || "";

console.log(connString)

const client = new MongoClient(connString)

let conn;

try{
    conn = await client.connect()
    console.log("Mongodb is connected")
} catch(e){
    console.error(e)
}

let db = client.db("Testing");

export default db;