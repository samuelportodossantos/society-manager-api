import { RestResponse } from "../types/RestType";
import UserModel from "../db/Schemes/UserModel";
import bcrypt from 'bcrypt'

export default class UserService {

    public async changePassword(user: string, currentPass: string, newPass: string) : Promise<RestResponse>{
        let response : RestResponse = {
            message: "",
            data: [],
            status: ""
        }
        return response
    }

    public async login(username:string, password:string):Promise<RestResponse> {
        let response : RestResponse = {
            message: "User authenticated successfuly!",
            data: {},
            status: "success"
        }
        const users = new UserModel().getModel()
        const user = await users.findOne({
            where: {username: username}
        })
        const passwordsMatch = await bcrypt.compare(password, user.password)
        if ( user !== null && passwordsMatch ) {
            response.data = user.dataValues
        } else {
            response.message = "Wrong username or password, or user does't exists"
            response.status = 'error'
            response.data = {username, password}
        }        
        return response;
    }

}