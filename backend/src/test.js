const axios = require('axios')
const qs = require('qs')
require('dotenv').config()

const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID


console.log('hit endpoint')
const headers = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
    },
    auth: {
        username: SPOTIFY_CLIENT_ID,
        password: SPOTIFY_CLIENT_SECRET,
    },
};
const data = {
    grant_type: "client_credentials",
};
try {
    const response = axios.post(
        "https://accounts.spotify.com/api/token",
        qs.stringify(data),
        headers
    );
    response.then((res, err)=>{console.log(res.data)})
    // console.log("Response: " + response)
} 
catch (err) {
    console.log("error" + err)
}