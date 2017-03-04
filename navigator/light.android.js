import React, { Component, PropTypes } from 'react';

import {
    Dimensions, 
    Platform, 
    PixelRatio, 
    TextInput, 
    ListView, 
    Text, 
    View, 
    Image, 
    TouchableHighlight, 
    TouchableOpacity, 
    ScrollView, 
    StyleSheet,
    UIManager,
    findNodeHandle,
    Alert,
    BackAndroid
} from 'react-native';

import navStyle from '../styles/navigator';

export default class Light extends Component{
    render(){
        return (
            <View style={navStyle.light.main}>
            </View>
        )
    }
}