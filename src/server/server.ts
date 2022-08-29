import express from "express"

import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"
import cors from 'cors'

export default class Server {
    
    private readonly PORT = process.env.APP_PORT || 3000
    private readonly HOST = process.env.APP_HOST || 'localhost'
    private readonly App = express()
    private readonly runMessage = `🚀 Running server at http://${this.HOST}:${this.PORT}`

    public setRoutes(){
        this.App.use('/users', userRoutes)
        this.App.use('/auth', authRoutes)
    }

    public run () {
        this.App.use(cors())
        this.App.use(express.json())
        this.setRoutes()
        this.App.listen(this.PORT, () => {
            console.log(this.runMessage)
        })
    }

}