import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/users.js';
// import User from './models/user'

const app = express();
app.use(express.json());
app.use('/api/users', userRouter);

dotenv.config();
const PORT = 3000;



const dbURL = process.env.MONGO_URL
console.log("dbURL:",dbURL)

mongoose.connect(dbURL)
    .then(() => console.log('MongoDB successfully connected!...'))
    .catch(err => console.error('Connection failed...', err));


app.listen(PORT, () => console.log(`The server running on the given port... ${PORT}`));
    
