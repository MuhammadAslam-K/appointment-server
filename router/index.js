import express from 'express'

const router = express.Router()

import appointmentRouter from "./appointmentRoutes.js"

router.use("/appointment", appointmentRouter);

export default router