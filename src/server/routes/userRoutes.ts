import express from 'express'
import DataBase from '../../db/DataBase'
import UserService from '../../services/userService'
import { UserType } from '../../types/UserType'
import { defaultMiddleware } from '../middlewares/auth'
const userRoutes = express.Router()

// userRoutes.use((req, res, next) => {
//     defaultMiddleware(req, res, next)
// })

// userRoutes.get('/', (req, res) => {

//     let users: UserType[] = []
//     users.push({
//         name: 'Samuel',
//         email: 'samuelporto@email.com',
//         password: '12345'
//     })
//     users.push({
//         name: 'Lizanela',
//         email: 'lizangela@email.com',
//         password: '1232123'
//     })

//     res.json({status: 200, message: 'Requested successfuly', data: users})
// })

userRoutes.get('/changepass', async (req, res) => {
    const userService = new UserService()
    const response = await userService.changePassword('moyka', '151515', '123123')
    res.json(response)
})

export default userRoutes