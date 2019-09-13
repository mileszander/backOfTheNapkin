import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
    TextInput,
    View,
    Text,
  } from 'react-native';

import Colors from '../constants/Colors';

export default function Dimensions({changeDimensions, grossSF}) {
  return (
    // <Ionicons
    //   name={props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    // />
    <View style={styles.dimensionContainer}>
        <View style={{alignItems: 'center'}}>
            <Text style={styles.title}>Dimensions</Text>
        </View>
        <View style={styles.dimInpCont}>
            <View>
                <Text>Width</Text>
                <TextInput
                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="feet"
                    keyboardType="number-pad"
                    onChangeText={(number)=> changeDimensions({width: parseInt(number)})}
                />
            </View>
            <View>
                <Text>Length</Text>
                <TextInput
                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="feet"
                    keyboardType="number-pad"
                    onChangeText={(number)=> changeDimensions({length: parseInt(number)})}
                />
            </View>
            <View>
                <Text>Floors</Text>
                <TextInput
                    style={{ width: 40, height: 40, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="floors"
                    keyboardType="number-pad"
                    onChangeText={(number)=> changeDimensions({floors: parseInt(number)})}
                />
            </View>
            <View>
                <Text>Gross SF</Text>
                <Text
                style={{ width: 60, height: 40, borderColor: 'gray', borderWidth: 1, fontSize:16, paddingTop:8 }}>
                    {grossSF.toLocaleString('en')}
                </Text>
            </View>
        </View>
    </View>
  );
}

 

const styles = {
    dimensionContainer: {
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
    dimInpCont: {
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}