import React, {useState} from 'react';
import { StyleSheet,Text, View,TextInput, Button } from 'react-native';
export default function SandBox(){
    return(
        <View style={styles.container}>
            <Text style={styles.zero}>SandBox 0</Text>
            <Text style={styles.one}>SandBox 1</Text>
            <Text style={styles.two}>SandBox 2</Text>
            <Text style={styles.three}>SandBox 3</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        
        paddingTop:40,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#aaa'
    },
    zero: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        backgroundColor: 'red'
    },
    one: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        backgroundColor: 'blue'
    },
    two: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        backgroundColor: 'green'
    },
    three: {
        flex: 1,
        flexDirection: 'row',
        padding:10,
        backgroundColor: 'violet'
    },

  });