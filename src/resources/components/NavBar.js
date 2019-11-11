'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Text, TouchableOpacity
} from 'react-native'

import PropTypes from 'prop-types';
import Icon             from 'react-native-vector-icons/FontAwesome'
import colors           from './../styles/colors'

class NavBar extends Component {
    static propTypes = {
        hideBackButton: PropTypes.bool
    }

    constructor(props) {
        super(props);
    }

    render() {
        let txtMarginLeft = (this.props.hideBackButton) ? 0 : -18
        return (
            <View style={ styles.bar }>
                {(this.props.hideBackButton)
                    ?   null
                    :   (
                            <TouchableOpacity style={{ padding: 15 }} onPress={() => this._pressBtnBack()}>
                                <Icon name='angle-left' backgroundColor="transparent" size={25} color={ colors.txt_dark } />
                            </TouchableOpacity>
                        )
                }

                <View style={ styles.titleHolder }>
                    <Text style={[ styles.text, { marginLeft: txtMarginLeft }]}>{ this.props.title }</Text>
                </View>
            </View>
        )
    }

    _pressBtnBack() {
        let self = this
        self.props.navigator.pop();
    }
}

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: colors.bg_header,
        alignItems: 'center'
    },
    titleHolder: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: colors.txt_dark,
        fontSize: 16
    }
})

module.exports = NavBar
