import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGO_URI

const client = new MongoClient(uri)

async function run() {
   try {
      await client.connect();
      console.log('conectando ao mongodb!');
   } catch (error) {
      console.log(error);
   }
}

run()

export default client

