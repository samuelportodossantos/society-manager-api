import express from 'express'
import jwt from 'jsonwebtoken'
import UserService from '../../services/userService'
const authRoutes = express.Router()

authRoutes.use((req, res, next) => {
    next()
})

authRoutes.post('/login', async (req, res) => {
    const userService = new UserService()     
    const loginResult = await userService.login(req.body?.username, req.body?.password)
    const secret = process.env.APP_SECRET || ''
    const token = jwt.sign({
        data: Date.now().toString()
    }, secret)
    res.status(200).json({
        message: loginResult.message,
        data: {...loginResult.data, token}
    })

})

export default authRoutes