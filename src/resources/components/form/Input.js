'use strict'
import React, { Component } from 'react'
import {
    TextInput, StyleSheet
} from 'react-native'

import colors from './../../../resources/styles/colors'

class Input extends Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={ styles.input } { ...this.props } />
        )
    }
}

const styles = StyleSheet.create({
    input: {
        height: 34,
        borderColor: colors.bd_input,
        borderWidth: 1,
        paddingLeft: 10,
        paddingRight: 10,
        color: colors.txt_description,
        fontSize: 14,
        borderRadius: 3,
        marginTop: 5,
        backgroundColor: colors.bg1,
        paddingBottom: 0
    }
})

module.exports = Input
