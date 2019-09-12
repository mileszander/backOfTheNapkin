import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    TextInput,
    View,
    Text,
  } from 'react-native';

import Colors from '../constants/Colors';

export default function Cost({costChange}) {
  return (
    // <Ionicons
    //   name={props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    // />
    <View style={styles.costContainer}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Cost</Text>
        </View>

        <View style={styles.costInpCont}>
            <View>
                <Text>   Land Cost</Text>
                <TextInput
                    style={{ width: 90, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="$"
                    onChangeText={(number)=> costChange({land: parseInt(number)})}
                    //   value={value}
                />
            </View>
            <View>
                <Text>    $/SF</Text>
                <TextInput
                    style={{ width: 60, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="$"
                    onChangeText={text => onChangeText(text)}
                    //   value={value}
                />
            </View>
            {/* OPTION TI ALLOWANCE */}
            {/* <View>
                <Text>TI Allowance</Text>
                <TextInput
                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="floors"
                    onChangeText={text => onChangeText(text)}
                    //   value={value}
                />
            </View> */}
          <View>
                <Text>    Total Cost</Text>
                <Text
                    style={{ width: 100, height: 40, borderColor: 'gray', borderWidth: 1 }}>
                </Text>
            </View>
        </View>
    
    </View>
  );
}



const styles = {
    costContainer: {
    },
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