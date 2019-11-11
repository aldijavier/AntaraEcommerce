'use strict'
import React, { Component } from 'react'
import {
    Text
} from 'react-native'
import Container                from './../resources/components/Container'
import colors                   from './../resources/styles/colors'

class BaseScreen extends Component {
    render() {
        return (
            <Container>
                <Text>Base Screen</Text>
            </Container>
        )
    }
}

module.exports = BaseScreen
