const BAD_REQUEST = 400;

class UsersController {

    async index(request, response) {}

    async create(request, response) {

        var {name, password, email} = request.body

        if (email == undefined) {
            return response.status(BAD_REQUEST).send("O email é obrigatório")
        }

        if (name == undefined || name.length < 3) {
            return response.status(BAD_REQUEST).send("O nome é obrigatório e deve conter no ao menos 3 caracteres. ")
        }

        if (password == undefined || name.length < 3) {
            return response.status(BAD_REQUEST).send("A senha é obrigatória e deve conter ao menos 3 caracteres.")
        }

    }

}

module.exports = new UsersController()
