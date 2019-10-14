import React, {useState} from 'react';
import {View, Picker, Text} from 'react-native';
import styles from '../styles/MidStyles';


function Mid(){
    
    const [bgState, SetBgState] = useState(1)

    var bgColor = null;
    if(bgState == 1){
        bgColor = styles.container1
    }
    if(bgState == 2){
        bgColor = styles.container2
    }

    return(
        <View style={bgColor}>
          <Picker style={styles.picker}
            onValueChange={(value)=>{SetBgState(value)}}
            selectedValue={bgState}
          >
               <Picker.Item label = "color 1" value = "1" />
               <Picker.Item label = "color 2" value = "2" />
            </Picker>
        </View>
    )
}

export default Mid;