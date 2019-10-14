import React from 'react';
import {View} from 'react-native';

import Top from './Top'
import Mid from '../comp/Mid';

function Main(){
    return(
        <View style={{flex:1}}>

            <Top />
            <Mid />

        </View>
    )
}

export default Main;