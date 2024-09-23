# Junior WebFit Stock and Price
## Usage
First you must grab the secrets.env file associated with this project, held in the the 1password vault.

```
source secrets.env
node index.js
```

## Overview
### Goal
The purpose of this project is to enable the ability to update price and stock information on ProdiG products for Junior WebFit. The way this will work is it will grab from a Google spreasheet in which we update availability for all club variants. This means that the spreadhseet we call upon should be updated as frequently as possible.

## Deployment
This is a foundation for the actual script which will run locally in the api of the Azure resource that deploys our project. 


## References
[Enabling Google API calls from node server](https://hackernoon.com/how-to-use-google-sheets-api-with-nodejs-cz3v316f)



