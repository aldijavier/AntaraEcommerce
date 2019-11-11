'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Text, Dimensions, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'

import PropTypes from 'prop-types';
const { width } = Dimensions.get('window')
const imgWidth = width - 30

class LargeProductThumb extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        imageUri: PropTypes.string,
        prize: PropTypes.number,
        promotion: PropTypes.string
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity style={ styles.holder } onPress={ this.props.onPress }>
                <Image style={ styles.productImage } source={{ uri: this.props.imageUri }} />
                <Text style={ styles.name } ellipsizeMode='tail' numberOfLines={2}>
                    { this.props.name }
                </Text>
                <Text style={ styles.prize }>Rp{ this.props.prize }</Text>
                <View style={ styles.promotionHolder }>
                </View>
                <Text style={ styles.text }></Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: colors.bd_line
    },
    productImage: {
        width: imgWidth,
        height: imgWidth
    },
    name: {
        color: colors.txt_dark,
        marginTop: 10
    },
    prize: {
        marginTop: 6,
        fontSize: 16
    },
    text: {
        marginTop: 6,
        color: colors.txt_description
    },
    promotionHolder: {
        flexDirection: 'row'
    }
})

module.exports = LargeProductThumb
