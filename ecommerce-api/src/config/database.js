import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

try{
    await mongoose.connect(`${dbURI}/${dbName}`,{});
    console.log(`MongoDB is connected`);
}catch{
    console.log(error);
    process.exit(1);
};