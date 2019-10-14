import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native';
import styles from '../styles/BotStyles'

function Bot(){

    const [alertMsg, setAlertMsg] = useState('');
     return(     
        <View style={styles.bCont}>
          <TextInput            
            placeholder="Send a text here"
            onChangeText= {(text)=>{setAlertMsg(text)}}
            value={alertMsg}

            />
            <Button
            title="Send"
            onPress={()=>alert(alertMsg)}
            />
        </View>

    )
}

export default Bot;