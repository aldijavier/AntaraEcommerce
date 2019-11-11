'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Image, Dimensions, Text, TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types';
import colors from './../../styles/colors'

class CollectionProductThumb extends Component {
    constructor(props) {
        super(props)
    }

    static propsTypes = {
        imageUri: PropTypes.string,
        prize: PropTypes.number,
        fullScreen: PropTypes.bool
    }

    static defaultProps = {
        fullScreen: false
    }

    render() {
        let rowData = this.props
        let { width } = Dimensions.get('window')
        let imgWidth = (width - 45) / 2
        if(this.props.fullScreen) {
            imgWidth = width - 30
        }
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={[ styles.holder, { width: imgWidth, height: imgWidth } ]}>
                <Image style={[ styles.image, { width: imgWidth, height: imgWidth } ]} source={{ uri: rowData.imageUri }} />
                <View style={ styles.prizeHolder }>
                    <Text>US Rp{ this.props.prize }</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        borderWidth: 0.5,
        borderColor: colors.bd_line,
        marginTop: 15
    },
    prizeHolder: {
        position: 'absolute',
        left: 8,
        bottom: 8,
        zIndex: 1,
        backgroundColor: colors.bg_header,
        padding: 5,
        borderRadius: 3,
        paddingTop: 3,
        paddingBottom: 3
    },
    prize: {
        fontSize: 16,
        marginTop: 3
    },
    image: {
        borderWidth: 0.5,
        borderColor: colors.bd_line
    }
})

module.exports = CollectionProductThumb
