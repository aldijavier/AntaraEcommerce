'use strict'
import React, { Component } from 'react'
import {
    View, Image, StyleSheet, Text, ScrollView
} from 'react-native'

import Container                        from './../resources/components/Container'
import NavBar                           from './../resources/components/NavBar'
import Grid                             from './../resources/components/Grid'
import CollectionProductThumb           from './../resources/components/product/CollectionProductThumb'
import colors                           from './../resources/styles/colors'
import collectionDetailData             from './../data/collectionDetail'

class CollectionDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigator } title={ 'Collection' } />
                <ScrollView>
                    <Image style={ styles.cover } source={{ uri: collectionDetailData.headerImageUri }} />
                    { this._renderHeader() }
                    <Grid style={{ paddingBottom: 35 }}>
                        {
                            collectionDetailData.data.map((item, idx) => {
                               return <CollectionProductThumb
                                            onPress={() => this._pressProduct(item.id)}
                                            key={ idx } { ...item }/>
                            })
                        }
                    </Grid>
                </ScrollView>
            </Container>
        )
    }

    _pressProduct(id) {
        this.props.navigator.push({
            ident: 'ProductDetail',
            id
        })
    }

    _renderHeader() {
        return (
            <View>
                <View style={ styles.infosHolder }>
                    <View style={ styles.infos }>
                        <Text style={ styles.name }>{ collectionDetailData.name }</Text>
                        <View style={ styles.authorHolder }>
                            <View style={ styles.authorLine }></View>
                            <Text style={ styles.author }>   by { collectionDetailData.author }   </Text>
                            <View style={ styles.authorLine}></View>
                        </View>
                    </View>
                    <Text style={ styles.description }>{ collectionDetailData.description }</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    infosHolder: {
        padding: 15
    },
    cover: {
        height: 100,
        resizeMode: 'cover'
    },
    infos: {
        alignItems: 'center'
    },
    name: {
        fontSize: 20
    },
    authorHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
    },
    author: {
        fontStyle: 'italic',
        color: colors.txt_description,
        fontSize: 12
    },
    authorLine: {
        height: 0.5,
        width: 35,
        backgroundColor: colors.bd_line
    },
    description: {
        color: colors.txt_dark,
        marginTop: 10
    },
    buttons: {
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderTopWidth: 0.5,
        borderColor: colors.bd_line,
    },
    cplBtn: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    cplBtnLeft: {
        paddingRight: 15,
        borderRightWidth: 0.5,
        borderColor: colors.bd_line,
        paddingTop: 15,
        paddingBottom: 15
    },
    cplBtnText: {
        color: colors.txt_main
    },
    follower: {
        color: colors.txt_description,
        fontSize: 12
    }
})

module.exports = CollectionDetail
