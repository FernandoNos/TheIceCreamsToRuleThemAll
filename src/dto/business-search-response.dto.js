const _ = require('lodash')

module.exports.BusinessSearchResponseDTO = {
    build: async (business, reviews) => {
        const businessDetails = buildBusinessDetails(business)
        if (!_.isEmpty(reviews))
            businessDetails.review = extractFirstReview(reviews)
        return businessDetails
    }
}

function extractFirstReview(reviews) {
    const review = reviews[0]
    return {
        name: review.user.name,
        text: review.text
    }
}

function buildBusinessDetails(business) {
    return {
        name: business.name,
        address: {
            street: business.location.address1,
            city: business.location.city
        },
        review: {}
    }
}