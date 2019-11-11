'use strict'
import React, {Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'
import PropTypes from 'prop-types';
const { width } = Dimensions.get('window')
const prdWidth = (width - 45) / 2

class GridProductThumb extends Component {
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
                <Text>Rp{ this.props.prize }</Text>
                <View style={ styles.promotionHolder }>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: prdWidth,
        height: prdWidth + 110
    },
    productImage: {
        width: prdWidth,
        height: prdWidth,
        borderWidth: 0.5,
        borderColor: colors.bd_input
    },
    name: {
        marginTop: 6,
        marginBottom: 6,
        color: colors.txt_description
    },
    promotionHolder: {
        flexDirection: 'row'
    }
})

module.exports = GridProductThumb
