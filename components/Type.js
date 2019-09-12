import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements'

import {
    Picker,
    View,
    Text,
  } from 'react-native';

import Colors from '../constants/Colors';

export default function TypeBuild({onChecked, isChecked}) {
  return (
    // <Ionicons
    //   name={props.name}
    //   size={26}
    //   style={{ marginBottom: -3 }}
    //   color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    // />
    <View>
    <View style={{alignItems: 'center'}}>
    <Text style={styles.title}>Type of Build</Text>
    </View>
        {/* <Picker
            // selectedValue={this.state.language}
            style={styles.select}
            mode="dropdown"
            onValueChange={(itemValue, itemIndex) =>
                <Text>This here?</Text>
            }>
            <Picker.Item label="Condo" value="Condo" />
            <Picker.Item label="Multifamily" value="Multifamily" />
            <Picker.Item label="Office" value="Office" />
            <Picker.Item label="Retail" value="Retail" />
        </Picker> */}
        <View style={styles.typeCont}>
            <CheckBox
            title='Multifamily'
            onPress={()=>onChecked('Multifamily')}
            checked={isChecked('Multifamily')}
            />
            <CheckBox
            title='Condo'
            onPress={()=>onChecked('Condo')}
            checked={isChecked('Condo')}
            />
        </View>
        <View style={styles.typeCont}>
        <CheckBox
            title='Retail'
            onPress={()=>onChecked('Retail')}
            checked={isChecked('Retail')}
            />
            <CheckBox
            title='Office'
            onPress={()=>onChecked('Office')}
            checked={isChecked('Office')}
            />
        </View>
    </View>
  );
}

const styles = {
    title: {
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
        fontSize: 24,
    },
    select: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width:100,
    },
    typeCont: {
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
}