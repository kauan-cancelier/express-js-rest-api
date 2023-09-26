class HomeController{

    async index(request, response){
        response.send("Home");
    }

}

module.exports = new HomeController();
