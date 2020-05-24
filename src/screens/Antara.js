'use strict'
import React, { Component } from 'react'
import {
    Text, View, Image, StyleSheet, TouchableOpacity, ListView, Button, width
} from 'react-native'

import Container            from '../resources/components/Container'
import colors               from '../resources/styles/colors'
import Icon                 from 'react-native-vector-icons/FontAwesome'
import antara           from '../data/antara'

class Antara extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(antara.data),
        };
    }

    render() {
        return (
            <Container>
                { this._renderHeader() }
                <ListView
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={ this._renderRow.bind(this) }
                     />
            </Container>
        )
    }

    _renderRow(rowData) {
        return (
            <TouchableOpacity onPress={(rowData) => this._onPressRow(rowData)} style={ styles.row }>
                <View style={ styles.rowLeftParts }>
                    <Text style={ styles.rowName }>{ rowData.name }</Text>
                    {
                        (rowData.description) ? <Text style={ styles.description }>{ rowData.description }</Text> : null
                    }
                </View>
                <Icon style={ styles.rowIcon } name='angle-right' size={ 23 } />
            </TouchableOpacity>
        )
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.userInfosHolder }>
                    <Image style={ styles.avatar } source={ require('./../resources/images/default_avatar.png') } />
                    <View style={ styles.userInfos }>
                        <Text style={ styles.username }>Deddy</Text>
                    </View>
                </View>

                <View style={ styles.tabBar }>
                    <TouchableOpacity style={[ styles.btnTab, {borderRightWidth: 0.5, borderColor: colors.bd_line }]} >
                        <Icon style={ [styles.icoTab, { marginTop: 2 }] } name='gear' size={ 16 } />
                        <Text style={ styles.btnSearchTitle }>{ 'Settings' }</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.btnTab } title="Next Step"
                        onPress={this._pressCollection.bind(this)} >
                        <Icon style={ styles.icoTab } name='question' size={ 16 } ></Icon>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _onPressRow(rowData) {
        
    }

    _pressCollection(id) {
        this.props.navigator.push({
            ident: 'Help',
            id
        })
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header
    },
    userInfosHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 20
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    userInfos: {
        height: 50,
        justifyContent: 'center'
    },
    username: {
        fontSize: 16
    },
    description: {
        fontSize: 12,
        color: colors.txt_description,
        marginTop: 2
    },
    btnSearchTitle: {
        color: colors.txt_dark,
        fontSize: 16
    },
    btnTab: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5
    },
    icoTab: {
        color: colors.txt_dark,
        marginRight: 10
    },
    tabBar: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 25,
        borderBottomWidth: 0.5,
        borderColor: colors.bd_line
    },
    rowLeftParts: {
        height: 60,
        justifyContent: 'center'
    },
    rowName: {
        fontSize: 16
    },
    rowIcon: {
        color: colors.txt_description
    }
})

module.exports = Antara
