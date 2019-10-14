import React from 'react';
import {View} from 'react-native';
import Bot from './Bot';
import Top from './Top'

function Main(){
    return(
        <View style={{flex:1}}>
            <Top />
            <Bot/>
      </View>
    )
}

export default Main;