'use strict'
import React, { Component } from 'react'
import {
    View, ScrollView
} from 'react-native'

import Container                from './../resources/components/Container'
import NavBar                   from './../resources/components/NavBar'
import CollectionThumb          from './../resources/components/collection/CollectionThumb'
import collections              from './../data/collections'

class Collections extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigator } title={ 'Collection' } />
                <ScrollView>
                    { this._renderList(collections.data) }
                </ScrollView>
            </Container>
        )
    }

    _renderList(data) {
        return (
            <View style={{ padding: 15 }}>
                {
                    data.map((item, idx) => {
                       return <CollectionThumb
                                    onPress={ this._pressCollection.bind(this, item.id) }
                                    key={ idx } { ...item }/>
                    })
                }
            </View>
        )
    }

    _pressCollection(id) {
        this.props.navigator.push({
            ident: 'CollectionDetail',
            id
        })
    }
}

module.exports = Collections
