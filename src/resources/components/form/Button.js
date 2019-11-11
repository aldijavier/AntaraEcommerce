'use strict'
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native'

import colors from './../../../resources/styles/colors'

class Button extends Component {
  render() {
      let type = this.props.type
      let btnStyle = styles.btnBackground
      let textStyle = styles.textBackground
      switch (type) {
          case 'border':
              btnStyle = styles.btnBorder
              textStyle = styles.textBorder
              break;
          default:

      }
    return (
      <TouchableOpacity style={[ styles.btn, btnStyle, this.props.style || {} ]} onPress={!this.props.disabled ? this.props.onPress : null }>
          <Text style={[styles.text, textStyle]}>{ this.props.title }</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    btn: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnBorder: {
        borderWidth: 0.5,
        borderColor: colors.bd_input,
        backgroundColor: colors.bg1
    },
    btnBackground: {
        backgroundColor: colors.bg_main
    },
    text: {

    },
    textBackground: {
        color: 'white',
    },
    textBorder: {
        color: colors.txt_main
    }
})

module.exports = Button
