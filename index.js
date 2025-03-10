import express from 'express'
import cors from 'cors'
import { mongoDB } from './config/mongoDB.js'
import router from './router/index.js'
import dotenv from 'dotenv'

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors('*'))
app.use(express.json())

app.use('/', router)

mongoDB().then(() => {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
})