'use strict'
import React, { Component } from 'react'

import {
    Text, StyleSheet, ListView, View, Image, TouchableOpacity
} from 'react-native'

import Container                    from './../resources/components/Container'
import NavBar                       from './../resources/components/NavBar'
import colors                       from './../resources/styles/colors'
import notificationData             from './../data/notification'

class Notification extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(notificationData.data),
        }
    }

    render() {
        return (
            <Container>
                <NavBar hideBackButton={true} navigator={ this.props.navigator } title={ 'Notifications' } />
                <ListView
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={(rowData) => this._renderRow(rowData) } />
            </Container>
        )
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity onPress={(rowData) => this._onPressRow(rowData) } style={ styles.row }>
                <Image style={ styles.avatar } source={ require('./../resources/images/default_avatar.png') } />
                <View style={ styles.rightPart }>
                    <View style={ styles.detail }>
                        <Text ellipsizeMode='tail' numberOfLines={2} style={ styles.description }>
                            <Text style={ styles.username }>{ rowData.username }</Text> { rowData.description }
                        </Text>
                    </View>
                    <Text style={ styles.createdDate }>{ rowData.createdDate }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    _onPressRow(rowData) {

    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: colors.bd_line
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    detail: {
        flexDirection: 'row',
        paddingRight: 60
    },
    description: {
        color: colors.txt_dark
    },
    createdDate: {
        color: colors.txt_description,
        marginTop: 3,
        fontSize: 13
    },
    rightPart: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        color: '#000000',
        fontWeight: '500'
    }
})

module.exports = Notification
