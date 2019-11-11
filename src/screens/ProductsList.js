'use strict'
import React, { Component } from 'react'
import {
    ListView
} from 'react-native'

import Container                    from './../resources/components/Container'
import NavBar                       from './../resources/components/NavBar'
import ProductThumb                 from './../resources/components/product/ProductThumb'
import colors                       from './../resources/styles/colors'
import productsListData             from './../data/productsList'

class ProductsList extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(productsListData.data),
        };
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigator } title={ this.props.navBarTitle || 'Products' } />
                <ListView
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={ this._renderRow.bind(this) } />
            </Container>
        )
    }

    _renderRow(rowData) {
        return (
            <ProductThumb { ...rowData } onPress={() => this._pressProduct(rowData.id) } />
        )
    }

    _pressProduct(id) {
        this.props.navigator.push({
            ident: 'ProductDetail',
            id
        })
    }
}

module.exports = ProductsList
