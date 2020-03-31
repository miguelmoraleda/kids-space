require('dotenv').config();

// Set this to the base URL of your sample server, such as 'https://your-app-name.herokuapp.com'.
// Do not include the trailing slash. See the README for more information:

const SAMPLE_SERVER_BASE_URL = 'http://YOUR-SERVER-URL';

var API_KEY;
var SESSION_ID;
var TOKEN; 

if (process.env) {
    API_KEY = process.env.REACT_APP_API_KEY;
    SESSION_ID = process.env.REACT_APP_SESSION_ID;
    TOKEN = process.env.REACT_APP_TOKEN; 
}

export {
    SAMPLE_SERVER_BASE_URL,
    API_KEY,
    SESSION_ID,
    TOKEN,
};

