import Server from "./server/server"

export default class Application {
    private readonly server = new Server()
    public initialize() {
        this.server.run()
    }
}