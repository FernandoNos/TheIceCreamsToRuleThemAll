# The Ice Creams to Rule Them All

This project was created with the intention of finding the top 5 ice creams in Alpharetta, as reported by Yelp!

During development, and after learning more about the Yelp Fusion API (https://www.yelp.com/fusion), it was decided that the lookup would be done based on the inputs sent. The client might move to another place, and crave for ice cream! With that in mind, we used the developed application as an entry point for the Yelp API, combining the results of both the Business Search API and the Business Reviews lookup.

This application was developed with the following stack:

* NodeJS: 14.16.1
* NPM: 6.14.12
* JavaScript
* Axios: 0.21.1
* express: 4.17.1
* lodash: 4.17.21
* nodemon: 2.0.7

# How do I get my top ice cream spots?

You can start by downloading the code in this repository and, once you're done, follow the steps below:

1. Open your terminal and execute `npm start` under the project root directory;
2. Open your browser and access the endpoint: `http://localhost:3000/api/v1/shops?location=Alpharetta&term=ice-cream&sort_by=rating&limit=5`;
3. You should get a a JSON response containing the 5 top ice creams spots in Alpharetta, as reported by Yelp Fusion;

# Why is it not hardcoded to only look up the ones in Alpharetta?

This was decided to give whoever is consuming this API the flexbility to choose what is being looked up. 
If I were to develop the whole flow, I would put another layer between the front-end and this service, so that all the client specific needs could be developed in it.


  
