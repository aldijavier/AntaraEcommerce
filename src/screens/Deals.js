'use strict'
import React, { Component } from 'react'
import {
    Text, ScrollView
} from 'react-native'

import Container                    from './../resources/components/Container'
import NavBar                       from './../resources/components/NavBar'
import Loading                      from './../resources/components/Loading'
import GridProductThumb             from './../resources/components/product/GridProductThumb'
import Grid                         from './../resources/components/Grid'
import ListPanel                    from './../resources/components/ListPanel'
import dealsData                    from './../data/deals'

class Deals extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true
            })
        }, 500)
    }

    render() {
        return (
            <Container>
                <NavBar navigator={ this.props.navigator } title={ 'Deals' } />
                { this.state.loaded ? this._renderScreen() : <Loading />}
            </Container>
        )
    }

    _renderScreen() {
        return (
            <ScrollView>
                { this._renderGridList(dealsData.featuredDeals) }
                { this._renderGridList(dealsData.trendingDeals) }
                { this._renderGridList(dealsData.bestDeals) }
            </ScrollView>
        )
    }

    _renderGridList(data) {
        return (
            <ListPanel
                onPressSeeAll={ ()=> this._pressSeeAllProducts({ navBarTitle: data.title }) }
                title={ data.title }
                description={ data.description }>
                    <Grid>
                        {
                            data.items.map((item, idx) => {
                               return <GridProductThumb
                                            onPress={() => this._pressProduct(item.id) }
                                            key={ idx } { ...item }/>
                            })
                        }
                    </Grid>
            </ListPanel>
        )
    }

    _pressProduct(id) {
        this.props.navigator.push({
            ident: 'ProductDetail',
            id
        })
    }

    _pressSeeAllProducts(data) {
        this.props.navigator.push({
            ident: 'ProductsList',
            navBarTitle: data.navBarTitle
        })
    }
}

module.exports = Deals
