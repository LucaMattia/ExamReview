import React, {useState} from 'react';
import {Switch, View, Text} from 'react-native';
import styles from '../styles/Top-styles';

function Top(){

const [bgState, SetBgState] = useState(false)

var bgColor = null;
if(bgState == false){
    bgColor = styles.container1
}
if(bgState == true){
    bgColor = styles.container2
}

    return(
        <View  style={bgColor}>
            <Switch style={styles.switch}
            onValueChange={(value)=>{SetBgState(value)}}
            value = {bgState}
            />
            <Text style={styles.text}>Day Mode</Text>
         </View>
      )

}



  export default Top;