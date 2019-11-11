'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'
import PropTypes from 'prop-types';

class ProductThumb extends Component {
    constructor(props) {
        super(props)
    }

    static propsTypes = {
        name: PropTypes.string.isRequired,
        imageUri: PropTypes.string,
        prize: PropTypes.number,
        regularPrize: PropTypes.number,
        shippingFare: PropTypes.string
    }

    render() {
        let rowData = this.props
        return (
            <TouchableOpacity style={ styles.row } onPress={ this.props.onPress }>
                <Image style={ styles.image } source={{ uri: rowData.imageUri }} />
                <View style={ styles.textsHolder }>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={ styles.name }>{ rowData.name } </Text>
                    <Text style={ styles.prize }>Rp{ rowData.prize } </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderColor: colors.bd_line,
        flexDirection: 'row',
        padding: 10
    },
    name: {
        color: colors.txt_dark
    },
    prize: {
        fontSize: 16,
        marginTop: 3
    },
    regularPrize: {
        color: colors.txt_description,
        marginTop: 3,
        textDecorationLine: 'line-through'
    },
    image: {
        height: 100,
        width: 100,
        marginRight: 10
    },
    shippingFare: {
        color: colors.txt_description,
        marginTop: 3
    },
    textsHolder: {
        marginTop: -3,
        paddingRight: 100
    }
})

module.exports = ProductThumb
