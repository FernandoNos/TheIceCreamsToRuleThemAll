const {HttpCodes} = require("../enums/http-codes.enum");
const { ShopsService } = require('../services')

module.exports.get = async (request, response) => {
    try {
        const {  latitude, longitude, location, limit } = request.query

        /*
        Since we depend on the Yelp service, and thees fields are mandatory,
        this validation was added, in order to make sure that they're present in the request
         */
        if(!location && (!latitude && !longitude))
            return response.status(HttpCodes.BAD_REQUEST).send({message:'Please specify a location or a latitude and longitude'})

        /*
        If not provided, limiting at 10, as the Yelp service blocks all requests
        after a certain number is reached
        */
        if(!limit) request.query.limit = 10

        const foundBusinesses = await ShopsService.searchBusinesses(request.query)
        response.send(foundBusinesses)
    }catch(error){
        console.error(`Error getting businesses with ${request.params} - ${error.message} ${error.stack}`)
        response.sendStatus(error.status ?? HttpCodes.INTERNAL_SERVER_ERROR)
    }
}