'use strict'
import React, { Component } from 'react'
import {
    Text, ScrollView
} from 'react-native'

import Container                    from './../resources/components/Container'
import NavBar                       from './../resources/components/NavBar'
import Grid                         from './../resources/components/Grid'
import GridCategoryThumb            from './../resources/components/category/GridCategoryThumb'
import categories                   from './../data/categories'

class Categories extends Component {

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigator } title={ 'Kategori' } style={{color: '#6c0000'}}/>
                <ScrollView>
                    { this._renderGridList(categories.data) }
                </ScrollView>
            </Container>
        )
    }

    _renderGridList(data) {
        return (
            <Grid style={{ paddingTop: 15 }}>
                {
                    data.map((item, idx) => {
                       return <GridCategoryThumb onPress={() => this._pressCategoryfoto(data.id)} key={ idx } { ...item }/>
                    })
                }
            </Grid>
        )
    }

    _pressCategoryfoto(id) {
        this.props.navigator.push({
            ident: 'Categories2'
        });
    }

    _pressCategoryvideo(id) {
        this.props.navigator.push({
            ident: 'Search'
        });
    }

    _pressCategoryberita(id) {
        this.props.navigator.push({
            ident: 'Search'
        });
    }

    _pressCategory(id) {
        this.props.navigator.push({
            ident: 'Search'
        });
    }
}

module.exports = Categories
