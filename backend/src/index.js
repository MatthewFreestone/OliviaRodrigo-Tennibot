const express = require('express');
const cors = require('cors');
const axios = require('axios')
const qs = require('qs')
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
require('dotenv').config()

const app = express();
const port = 8080; 

app.use(bodyParser.json());
app.use(cors())
const uri = process.env.ATlAS_URI
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID

mongoose.connect(uri)

mongoose.connection.once('open', () => console.log("Got MongoDB connection successfully"))

const tourSchema = new mongoose.Schema({
    date : String,
    city : String,
    state: String, 
    location: String
    }
)
const Tour = mongoose.model('Tour', tourSchema);




app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

app.get('/tours', (req,res) => {
    Tour.find()
        .then((tours) => res.json(tours))
        .catch((err) => res.status(400).json('Error: ' + err))
})

app.post('/addtour', (req,res) => {
    const date = req.body.date
    const city = req.body.city
    const state = req.body.state
    const location = req.body.location
    // console.log("\n\nreqest body: " + [date, city, state, location].join(", ") + "\n\n")
    

    const newTour = new Tour({date,city,state,location})
    newTour.save()
        .then(() => res.json("User added successfully"))
        .catch((err) => res.status(400).json("Error: " + err))
})

app.get('/spotify-auth', async (req,res) => {
    // res.send("test")
    getAuth().then((ans)=>{
        console.log(ans.data)
        res.json(ans.data)
    })
    // res.send(result)
})

const getAuth = () => {
        
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
        return response
    } 
    catch (err) {
        return err
    }
}