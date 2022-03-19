import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking, Image } from 'react-native';
import LoginPage from './src/pages/LoginPage';
import ImageExample from "./images/image";
import { transform } from 'typescript';


export default function App() {  
  return (
    <View style={styles.container}>
      {/* <LoginPage /> */}
      {/* <Text>First Test</Text> */}
      <View style={styles.background}>
        <Image source = {require('./images/oliviaBlur.png')} style={{width:'30vh', height:'50vh'}}/>
      </View>
      <Image source = {require('./images/april.png')} style={styles.imagesquare}/> 
      <Image source = {require('./images/may.png')} style={styles.imagesquare}/>  
      <Image source = {require('./images/june.png')} style={styles.imagesquare}/>  
      <Image source = {require('./images/july.png')} style={styles.imagesquare}/>  
      <Image source = {require('./images/SOURtour.png')} style={{width:'50vh', height:'20vh', marginTop:'10vh'}}/>
      
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  imagesquare: {
    width:'24vmin', 
    height:'23vmin',
    marginVertical:"2vh"
  },
  container: {
    flex: 1,
    backgroundColor: '#9687D5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute'
  }
});
