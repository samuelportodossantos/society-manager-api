import Sequence from 'mysql2/typings/mysql/lib/protocol/sequences/Sequence'
import Sequelize, { Model } from 'sequelize'
import { SequelizeHooks } from 'sequelize/types/hooks'
import DataBase from "../DataBase"

export default class UserModel {

    private readonly db: any
    private model: any
    private readonly table: String = 'Users'

    constructor() {
        this.db = new DataBase().getConnection()
        this.setModel()
    }

    public getModel():any {
        return this.model
    }

    private setModel(): void {
        this.model = this.db.define(this.table, {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            }
        })
        this.model.sync()
    }

}