require('dotenv').config()
import { StyleSheet, Text, View, Linking } from 'react-native';
import {getToken} from '../spotifyInterface/clientCredentials'
import {useState} from 'react'


export default function LoginPage(){
    const [accessCode, setAccessCode] = useState("Click to get code")
    return <Text onPress={()=>{
        // fetch('http://localhost:8080/')
        //     .then((res) => {
        //         setAccessCode(res.toString())
        //         console.log(res)
        //     })
        //     .catch((err)=>{console.log(err)})
        fetch('http://localhost:8080/spotify-auth')
            .then((res) => {
                console.log(res)
                setAccessCode(res.data.accessCode)
                })
            .catch((err)=>{console.log(err)})
    }}
    >{accessCode}</Text>
}



const getTokenFromBackend = () => {
    fetch('https://localhost:8080/spotify-auth')
    .then((res)=>{return res.data})
    .catch((err) => {console.log(err)})
}