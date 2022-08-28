import express from 'express'
import jwt from 'jsonwebtoken'
const authRoutes = express.Router()

authRoutes.use((req, res, next) => {
    next()
})

authRoutes.post('/login', (req, res) => {
    const secret = process.env.APP_SECRET || ''
    const token = jwt.sign({
        data: Date.now().toString()
    }, secret)
    res.status(200).json({
        message: 'Successfully generated token',
        data: token
    })
})

export default authRoutes