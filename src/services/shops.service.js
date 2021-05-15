const { yelpFusionClient } = require('../clients')
const _ = require('lodash')
const NotFoundException = require("../exceptions/not-found.exception");
const { BusinessSearchResponseDTO } = require("../dto/business-search-response.dto");

module.exports.searchBusinessesWithReviews = async (search ) => {
    const searchBusinessesResponse = await yelpFusionClient.searchBusinesses(search)
    if(_.isEmpty(searchBusinessesResponse?.businesses)) throw new NotFoundException(`No businesses found!`)
    return retrieveBusinessReviews(searchBusinessesResponse.businesses)
}

async function retrieveBusinessReviews(businesses){
    const businessReviews = businesses.map(business => populateBusinessReview(business))
    return Promise.all(businessReviews)
}

async function populateBusinessReview(business){
    return yelpFusionClient.searchBusinessReviews(business.id)
        .then(reviewsResponse => BusinessSearchResponseDTO.build(business, reviewsResponse?.reviews) )
}