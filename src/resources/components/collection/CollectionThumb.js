'use strict'
import React, {Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types';
import Line             from './../../components/Line'
import colors           from './../../styles/colors'

const { width } = Dimensions.get('window')
const holderWidth = width - 40
var smallImageWidth = holderWidth / 3
const bigImageWidth = smallImageWidth * 2 // 2 is border top and bottom
smallImageWidth = smallImageWidth - 5 //Small top image marginBottom 10

class CollectionThumb extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        bigImageUri: PropTypes.string,
        smallTopImageUri: PropTypes.string,
        smallBottomImageUri: PropTypes.string,
        author: PropTypes.string
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <View style={ styles.imagesHolder }>
                    <Image style={ styles.bigImage } source={{ uri: this.props.bigImageUri }} />
                    <View>
                        <Image style={[ styles.smallImage, { marginBottom: 10 } ]} source={{ uri: this.props.smallTopImageUri }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.smallBottomImageUri }} />
                    </View>
                </View>
                <Text style={ styles.name } ellipsizeMode='tail'>{ this.props.name }</Text>
                <Text style={ styles.author }>{ this.props.author }</Text>
                <Line style={ styles.line } />
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: holderWidth,
        marginRight: 15,
        flexDirection: 'column'
    },
    bigImage: {
        width: bigImageWidth,
        height: bigImageWidth,
        marginRight: 10,
        borderWidth: 0.5,
        borderColor: colors.bd_input
    },
    smallImage: {
        width: smallImageWidth,
        height: smallImageWidth,
        borderWidth: 0.5,
        borderColor: colors.bd_input
    },
    author: {
        color: colors.txt_description,
        marginBottom: 15
    },
    name: {
        marginTop: 15
    },
    imagesHolder: {
        flexDirection: 'row'
    },
    line: {
        marginBottom: 15
    }
})

module.exports = CollectionThumb
