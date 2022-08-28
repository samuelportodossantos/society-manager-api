import { response } from "express";
import DataBase from "../db/DataBase";
import { RestResponse } from "../types/RestType";

export default class UserService {

    public async changePassword(user: string, currentPass: string, newPass: string) : Promise<RestResponse>{
        const db = new DataBase().getConnection()
        let response : RestResponse = {
            message: "",
            data: []
        }
        
        return response
    }

}