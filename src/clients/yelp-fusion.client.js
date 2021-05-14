const axios = require('axios');
const RuntimeException = require("../exceptions/runtime.exception");
const {HttpCodes} = require("../enums/http-codes.enum");

const fusionRequest = axios.create({
    baseURL: 'https://api.yelp.com',
    headers: {
        "Authorization": 'Bearer sBlM82kVor2RsGXluSjK03MjFaw5cTkhJD2Y5Xc92azhs6_8sjLClUwZ1Js3P3srC_GTY8m2D_0THGsyPXiaiy1w8xoyKc5PleqD7k82qHUJ4ZwjmNQCtnaVU6WdYHYx',
    },
});

module.exports.searchBusinesses = async(params)  => {
    return fusionRequest.get('/v3/businesses/search',{params})
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.log(`Error sesarchgin for businesses ${error.message} ${error.stack}`)
            return undefined
        })
}

module.exports.searchBusinessReviews = async( businessId ) => {
    return fusionRequest.get(`/v3/businesses/${businessId}/reviews`)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(`Error looking up business reviews ${error.message} ${error.stack}`)
            if(error?.response.status === HttpCodes.TOO_MANY_REQUESTS)
                return undefined
            throw new RuntimeException(error?.response.status, error.message)
        })
}