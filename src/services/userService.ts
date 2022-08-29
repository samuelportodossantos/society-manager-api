import { RestResponse } from "../types/RestType";
import UserModel from "../db/Schemes/UserModel";

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
            data: [],
            status: "success"
        }
        const users = new UserModel().getModel()
        const user = await users.findOne({
            where: {username: username, password: password}
        })
        if ( user !== null ) {
            response.data = user.dataValues
        } else {
            response.message = "Wrong username or password, or user does't exitsts"
            response.status = 'error'
        }        
        return response;
    }

}