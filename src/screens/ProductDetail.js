'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Text, Dimensions, Image, ScrollView, Picker
} from 'react-native'

import { Dropdown } from 'react-native-material-dropdown';
import Container                    from './../resources/components/Container'
import NavBar                       from './../resources/components/NavBar'
import Loading                      from './../resources/components/Loading'
import Button                       from './../resources/components/form/Button'
import CustomSwiper                 from './../resources/components/Swiper'
import SwiperProductThumb           from './../resources/components/product/SwiperProductThumb'
import Grid                         from './../resources/components/Grid'
import GridProductThumb             from './../resources/components/product/GridProductThumb'
import Swiper                       from 'react-native-swiper'
import colors                       from './../resources/styles/colors'
import Icon                         from 'react-native-vector-icons/FontAwesome'
import productDetailData            from './../data/productDetail'
import ModalDropdown from 'react-native-modal-dropdown';
import CartScreen                   from '../screens/CartScreen'

const { width } = Dimensions.get('window')

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            swiperWidth: width,
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
                <NavBar navigator={ this.props.navigator } title={ 'Produk' } />
                { this.state.loaded ? this._renderScreen() : <Loading /> }
            </Container>
            
        )
    }


    _renderScreen() {
        return (
            <ScrollView>
                { this._renderSwiper() }
                { this._renderHeaderInfos() }
                { this._renderButtons() }
                { this._renderExtraInfos() }
                { this._renderOtherParts() }
            </ScrollView>
        )
    }

    _onlayout() {
        const { width } = Dimensions.get('window');
        this.setState({
            swiperWidth: width
        })
    }

    _renderPagination(index, total, context) {
        return (
            <View style={ styles.swiperPagination }>
                <Text style={ styles.swiperPaginationText}>{ index + 1} of { total }</Text>
            </View>
        )
    }

    _renderSwiper() {
        return (
            <View onLayout={() => this._onlayout()} >
                <Swiper width={ this.state.swiperWidth } style={styles.wrapper} height={200}
                    renderPagination={ this._renderPagination }
                    paginationStyle={{
                        bottom: -23, left: null, right: 10
                    }} loop={true}>
                        {
                            productDetailData.images.map((item, idx) => {
                               return (
                                   <View key={idx} style={[styles.slide, { width: this.state.swiperWidth }]}>
                                       <Image style={[styles.image, { width: this.state.swiperWidth }]} source={{ uri: item.uri }} />
                                   </View>
                               )
                            })
                        }
                </Swiper>
            </View>
        )
    }
    
    _renderHeaderInfos() {
        return (
            <View>
                <View style={ styles.headerInfos }>
                    <Text style={ styles.name }>{ productDetailData.name }</Text>
                    <Text style={ styles.description }>{ productDetailData.description }</Text>
                    <Text style={ styles.prize }>{ productDetailData.prize }</Text>
                </View>

                <View style={ styles.tabBar }>
                    <View style={[ styles.btnTab, {borderRightWidth: 0.5, borderColor: colors.bd_line }]} >
                        <Text>Sumber</Text>
                        <Text style={ styles.description }>Antara</Text>
                    </View>
                    <View style={ styles.btnTab } >
                        <Text>Pilihan Harga</Text>
                        <ModalDropdown options={['Mahasiswa', 'Industry','Media']}/>
                    </View>
                </View>
            </View>
        )
    }

    _renderButtons() {
        return (
            <View style={ styles.buttons }>
                <Button title='Beli Sekarang' onPress={() => this._pressCheckoutNow() }/>
                <Button style={ styles.button } type='border' title='Tambah ke Keranjang' onPress={() => this._pressWishList() }/>
            </View>
        )
    }

    _pressCheckoutNow() {
        this.props.navigator.push({
            ident: 'CheckoutKedua',
            redirectIdent: this.props.redirectIdent
        })
    }

    _pressWishList() {
        this.props.navigator.push({
            ident: 'CartScreen',
            redirectIdent: this.props.redirectIdent
        })
    }

    _renderExtraInfos() {
        return (
            <View style={ styles.extraInfosHolder }>
                <View style={ styles.extraInfos }>
                    {

                    }
                </View>
            </View>
        )
    }

    _renderOtherParts() {
        return (
            <View style={ styles.otherParts }>
                <View>
                    <Text style={ styles.otherPartsTitle }>Lebih Banyak Lagi</Text>
                    <View style={ styles.moreLikeThis }>
                        { this._renderSwiperList() }
                    </View>
                </View>

                { this._renderButtonsPart2() }

                <View>
                    <Text style={ styles.otherPartsTitle }>Yang Seperti Ini</Text>
                    <View style={ styles.moreLikeThis }>
                        { this._renderGridList() }
                    </View>
                </View>
            </View>
        )
    }
    
    _renderSwiperList() {
        return (
            <CustomSwiper>
                {
                    productDetailData.moreLikeThis.map((item, idx)  => {
                       return <SwiperProductThumb
                                    onPress={() => this._pressProduct(item.id)}
                                    key={ idx } { ...item }/>
                    })
                }
            </CustomSwiper>
        )
    }

    _pressProduct(id) {
        this.props.navigator.push({
            ident: 'ProductDetail',
            id
        })
    }

    _renderButtonsPart2() {
        return (
            <View style={ styles.buttons }>
            </View>
        )
    }

    _renderGridList() {
        return (
            <Grid>
                {
                    productDetailData.relatedItems.map((item, idx) => {
                       return <GridProductThumb
                                    onPress={() => this._pressProduct(item.id) }
                                    key={ idx } { ...item }/>
                    })
                }
            </Grid>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {

    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent'
    },
    image: {
        flex: 1,
        width
    },
    swiperPagination: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        backgroundColor: '#ffffff',
        opacity: 0.8,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    swiperPaginationText: {
        fontSize: 12,
        fontWeight: '700'
    },
    name: {
        fontSize: 20,
        marginBottom: 5
    },
    description: {
        color: colors.txt_description
    },
    headerInfos: {
        padding: 15
    },
    prize: {
        fontSize: 22,
        marginTop: 10
    },
    btnTab: {
        justifyContent: 'center',
        flex: 0.5,
        alignItems: 'center'
    },
    tabBar: {
        flexDirection: 'row',
        marginBottom: 15,
        borderTopWidth: 0.5,
        borderColor: colors.bd_input,
        paddingTop: 10
    },
    buttons: {
        backgroundColor: colors.bg_belisekarang,
        padding: 15
    },
    button: {
        marginTop: 8
    },
    extraInfosHolder: {
        paddingLeft: 15,
        paddingRight: 15
    },
    extraInfos: {
        paddingTop: 5,
        paddingBottom: 15
    },
    field: {
        flexDirection: 'row',
        marginTop: 10
    },
    fieldLeftPart: {
        flex: 0.4,
        color: colors.txt_description
    },
    fieldRightPart: {
        flex: 0.6
    },
    row: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderColor: colors.bd_line
    },
    otherParts: {
        backgroundColor: colors.bg_belisekarang,
        paddingTop: 10
    },
    otherPartsTitle: {
        fontSize: 16,
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 15
    },
    moreLikeThis: {
        backgroundColor: colors.bg1,
        paddingTop: 15,
        paddingBottom: 15
    }
})

module.exports = ProductDetail
