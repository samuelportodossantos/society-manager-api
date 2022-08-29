import express from 'express'
import jwt from 'jsonwebtoken'
import UserService from '../../services/userService'
const authRoutes = express.Router()

authRoutes.use((req, res, next) => {
    next()
})

authRoutes.post('/login', async (req, res) => {
    const userService = new UserService()
    
    if ( req.body?.username && req.body?.password ) {
        const loginResult = await userService.login(req.body?.username, req.body?.password)
        if (loginResult.status == "success") {
            const secret = process.env.APP_SECRET || ''
            const token = jwt.sign({
                data: Date.now().toString()
            }, secret)
            res.status(200).json({
                message: loginResult.message,
                data: {...loginResult.data, token},
                status: loginResult.status
            })
        }else {
            res.status(200).json({
                message: loginResult.message,
                data: {...loginResult.data },
                status: loginResult.status
            })
        }
    } else {
        res.status(200).json({
            message: 'Password and username need be send',
            data: [],
            status: 'warning'
        })
    }

})

export default authRoutes