import React, {useState} from 'react';
import {Switch, View, Text} from 'react-native';
import styles from '../styles/Top-styles';

function Top(){

const [bgState, SetBgState] = useState(false)

var bgColor = null;
var msg = null;
if(bgState == false){
    msg = (
        <Text>Day Mode</Text>
    )
    bgColor = styles.container1
   }

if(bgState == true){
    msg =(
        <Text style={{color:"white"}}>Night Mode</Text>
    )
    bgColor = styles.container2
 
}
   return(
        <View  style={bgColor}>
            
            <Switch style={styles.switch}
            onValueChange={(value)=>{SetBgState(value)}}
            value = {bgState}
            />
            {msg}
         </View>
      )

}



  export default Top;