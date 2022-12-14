import Sequelize from 'sequelize'

export default class DataBase {

    private readonly host:string = process.env.DB_HOST || 'localhost'
    private readonly user:string = process.env.DB_USER || 'root'
    private readonly pwrd:string = process.env.DB_PASSWORD || ''
    private readonly dbsa:string = process.env.DB_DBSA || 'teste'
    private readonly port:string = process.env.DB_PORT || '1433'
    private readonly driver:string = process.env.DB_DRIVER || 'mysql'
    
    private connection:any = null

    constructor() {
        
        this.connect()   
    }

    private connect() {
        if ( this.connection === null ) {

            
            
            this.connection = new Sequelize(this.dbsa, this.user, this.pwrd, {
                host: this.host,
                dialect: this.driver,
                port: this.port
            })
            try {
                this.connection.authenticate()
            } catch (err) {
                console.log(err);
            }
        }

        
    } 

    public getConnection() {
        return this.connection
    }
}