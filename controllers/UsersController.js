class UsersController {

    async index(request, response) {}

    async create(request, response) {
        response.send("Pegando o corpo da request")
    }
}

module.exports = new UsersController()
