# The Ice Creams to Rule Them All

This project was created with the intention of finding the top 5 ice creams in Alpharetta, as reported by Yelp!

During development, and after learning more about the Yelp Fusion API (https://www.yelp.com/fusion), it was decided that the lookup would be done based on the inputs sent. The client might move to another place, and crave for ice cream! With that in mind, we used the developed application as an entry point for the Yelp API, combining the results of both the Business Search API and the Business Reviews lookup.

This application was developed with the following stack:

* NodeJS: 14.16.1
* NPM: 6.14.12
* JavaScript
* axios: 0.21.1
* express: 4.17.1
* lodash: 4.17.21
* nodemon: 2.0.7

# How do I get my top ice cream spots?

You can start by downloading the code in this repository and, once you're done, follow the steps below:

1. Open your terminal and execute `npm start` under the project root directory;
2. Open your browser and access the endpoint: `http://localhost:3000/api/v1/shops?location=Alpharetta&term=ice-cream&sort_by=rating&limit=5`;
3. You should get a a JSON response containing the 5 top ice creams spots in Alpharetta, as reported by Yelp Fusion (you can see a sample response towards the end) ;

# Why is it not hardcoded to only look up the ones in Alpharetta?

This was decided to give whoever is consuming this API the flexbility to choose what is being looked up. 
If I were to develop the whole flow, I would put another layer between the front-end and this service, so that all the client specific needs could be developed in it.

The API Key was kept hardcoded, but it would make more sense to have it in a configuration server / secret manager.

# Response Sample

Request: `http://localhost:3000/api/v1/shops?location=Alpharetta&term=ice-cream&sort_by=rating&limit=5`

## Response
```json
[
    {
        "name": "Alchemist Trading Co",
        "address": {
            "street": "9700 Medlock Bridge Rd",
            "city": "Alpharetta"
        },
        "review": {
            "name": "Megan S.",
            "text": "Best Café I've ever been to! Every single thing on the menu is incredible, especially the Dutch Coffee and Hojicha Dutch latte. The space is so unique and..."
        }
    },
    {
        "name": "Scream'n Nuts",
        "address": {
            "street": "5950 North Point Pkwy",
            "city": "Alpharetta"
        },
        "review": {
            "name": "Elizabeth F.",
            "text": "One of my favorite donut shops outside the perimeter! They make the lightest and fluffiest donuts and their flavors are so creative compared to some other..."
        }
    },
    {
        "name": "Mr Tinos Ice Cream",
        "address": {
            "street": "1255 Grimes Bridge Rd",
            "city": "Roswell"
        },
        "review": {
            "name": "Wendy Z.",
            "text": "been here twice and got ice cream both times!!! their fresa flavors are super refreshing and taste like real fruit (really loves the mango and the self..."
        }
    },
    {
        "name": "Kwality Ice cream",
        "address": {
            "street": "6631 Roswell Rd",
            "city": "Sandy Springs"
        },
        "review": {
            "name": "Avi R.",
            "text": "Discovered this new place in Sandy springs. It is located in the same complex of Publix, Bawarchi biryani. They have wide variety of indian flavoured..."
        }
    },
    {
        "name": "Sweet Spot",
        "address": {
            "street": "6035 Peachtree Rd",
            "city": "Doraville"
        },
        "review": {
            "name": "B R.",
            "text": "Sweet Spot is a severely underrated authentic Hong Kong/Cha chaan teng themed eatery. They have a range of drinks, light snacks, entrees, and desserts!..."
        }
    }
]
```

  
