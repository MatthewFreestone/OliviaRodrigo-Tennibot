import {View, Image} from 'react-native'

export default function ImageExample() {
    // return <View>
    //     <Image source = {props.source} />   
    // </View>

    return <Image source = {require('./april.png')} style={{width:'24vmin', height:'23vmin'}}/>  

}
