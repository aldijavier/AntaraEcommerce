'use strict'
import React, { Component } from 'react'
import {
    Text, ScrollView, StyleSheet
} from 'react-native'

import Container                    from './../resources/components/Container'
import NavBar                       from './../resources/components/NavBar'
import Grid                         from './../resources/components/Grid'
import GridCategoryThumb            from './../resources/components/category/GridCategoryThumb'
import categories                   from './../data/categories'
import categoriesfoto from '../data/categoriesfoto';

class Categories extends Component {

    render() {
        return (
            <Container>
                <NavBar style={styles.title} navigator={ this.props.navigator } title={ 'Kategori' } />
                <ScrollView>
                    { this._renderGridList(categoriesfoto.data) }
                </ScrollView>
            </Container>
        )
    }

    _renderGridList(data) {
        return (
            <Grid style={{ paddingTop: 15 }}>
                {
                    data.map((item, idx) => {
                       return <GridCategoryThumb onPress={() => this._pressCategory(data.id)} key={ idx } { ...item }/>
                    })
                }
            </Grid>
        )
    }

    _pressCategory(id) {
        this.props.navigator.push({
            ident: 'Search'
        });
    }
}



const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        color: "#ffffff",
        fontSize: 18,
        textAlign: 'center',
    },
})


module.exports = Categories
