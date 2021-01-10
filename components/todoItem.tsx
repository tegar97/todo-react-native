import React,{useState} from 'react'
import {StyleSheet,Text, TouchableOpacity, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

interface props {
    item :  any,
    pressHander: any
}
export default function TodoItem({item,pressHander} : props) {
    return (
        <TouchableOpacity onPress={() => pressHander(item.key)}>
            <View style={styles.itemContainer}>
                <MaterialIcons name="delete" size={18} color="#333"/>
                <Text style={styles.item}>{item.text}</Text>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        marginLeft: 15,


    },
    itemContainer :{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        padding: 15,
        marginTop: 15
    }
})