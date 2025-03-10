import mongoose from 'mongoose'

export const mongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/interview')
        console.log("Data base connected")
    } catch (error) {
        console.log('Error in DB Connection', error)
    }
} 