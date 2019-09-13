import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    TextInput,
    View,
    Text,
  } from 'react-native';

import Colors from '../constants/Colors';

export default function Debt({libor, debtCalc, intCalc, debtAmt, equityAmt, totalInt}) {
  return (
    // <Ionicons
    //   name={props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    <>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Debt</Text>
        </View>

        <View style={styles.costInpCont}>
            <View>
                <Text>Debt Ratio(%)</Text>
                <TextInput
                    placeholder='%'
                    style={{ width: 90, height: 40, borderColor: 'gray', borderWidth: 1, alignItems: 'center'}}
                    keyboardType="number-pad"
                    onChangeText={(number)=> debtCalc({debtRatio: parseInt(number)})}
                />
            </View>
            <View>
                <Text>    Debt AMT</Text>
                <Text
                    style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1, fontSize:16, paddingTop:8  }}>
                        ${debtAmt.toLocaleString('en')}
                </Text>
            </View>
            <View>
                <Text>    Equity AMT</Text>
                <Text
                    style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1, fontSize:16, paddingTop:8  }}>
                        ${equityAmt.toLocaleString('en')}
                </Text>
            </View>
        </View>
        <View style={styles.costInpCont}>
            <View>
                <Text>   BPS+</Text>
                <TextInput
                    placeholder='points'
                    style={{ width: 90, height: 40, borderColor: 'gray', borderWidth: 1, alignItems: 'center'}}
                    keyboardType="number-pad"
                    onChangeText={(number)=> intCalc({bps: parseInt(number)})}
                />
            </View>
            <View>
                <Text>    LIBOR Rate</Text>
                <Text
                    style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1, fontSize:16, paddingTop:8  }}>
                        {libor.toLocaleString('en')}%
                </Text>
            </View>
            <View>
                <Text>    Int Rate</Text>
                <Text
                    style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1, fontSize:16, paddingTop:8  }}>
                        {totalInt.toLocaleString('en')}%
                </Text>
            </View>
        </View>
    </>

  );
}



const styles = {

    title: {
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
        fontSize: 24,
    },
    inputDim: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width:100,
    },
    costInpCont: {
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}