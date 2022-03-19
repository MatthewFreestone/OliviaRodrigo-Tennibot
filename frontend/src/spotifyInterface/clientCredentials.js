const axios = require("axios");
const qs = require("qs");

require('dotenv').config()
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_SECRET

// returns promise 
export const getToken = () => {
  const headers = {
      headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
          username: CLIENT_ID,
          password: CLIENT_SECRET,
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
      return response
  } 
  catch (err) {
      return err
  }
}