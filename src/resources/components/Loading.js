'use strict'

import React, { Component } from 'react'
import { View, Platform } from 'react-native'


class Loading extends Component {
    render() {
        let LoadingIcon = ''
        if(Platform.OS === 'ios') {
            let ActivityIndicator = require('ActivityIndicator')
            LoadingIcon = <ActivityIndicator />
        } else {
            let ProgressBarAndroid = require('ProgressBarAndroid')
            LoadingIcon = <ProgressBarAndroid style={{ height: 20 }} styleAttr="Inverse" />
        }

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                { LoadingIcon }
            </View>
        )
    }
}

module.exports = Loading
