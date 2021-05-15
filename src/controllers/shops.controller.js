const {HttpCodes} = require("../enums/http-codes.enum");
const { ShopsService } = require('../services')

module.exports.get = async (request, response) => {
    try {
        const query = request.query
        const {  latitude, longitude, location, limit, offset } = query

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
        if(!limit) query.limit = 10
        /*
        Included offset because the yelp function was not returning 5 when limit = 5, once offset was added, it worked as expected
         */
        if(!offset) query.offset = 0

        const foundBusinesses = await ShopsService.searchBusinessesWithReviews(query)
        response.send(foundBusinesses)
    }catch(error){
        console.error(`Error getting businesses with ${request.params} - ${error.message} ${error.stack}`)
        response.sendStatus(error.status ?? HttpCodes.INTERNAL_SERVER_ERROR)
    }
}