import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

export const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("Data base connected")
    } catch (error) {
        console.log('Error in DB Connection', error)
    }
} 