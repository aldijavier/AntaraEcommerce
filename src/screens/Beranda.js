'use strict'
import React, { Component } from 'react'
import {
    Text, Image, View, StyleSheet, TouchableOpacity, ScrollView, Alert, Platform, ListView, FlatList
} from 'react-native'

import Container                        from '../resources/components/Container'
import ListPanel                        from '../resources/components/ListPanel'
import SwiperProductThumb               from '../resources/components/product/SwiperProductThumb'
import GridProductThumb                 from '../resources/components/product/GridProductThumb'
import SwiperCollectionThumb            from '../resources/components/collection/SwiperCollectionThumb'
import Swiper                           from '../resources/components/Swiper'
import Grid                             from '../resources/components/Grid'
import colors                           from '../resources/styles/colors'
import Icon                             from 'react-native-vector-icons/FontAwesome'
import BerandaData                         from './../data/beranda'
import Slideshow from 'react-native-slideshow';

class Beranda extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 1,
            interval: null,
            dataSourcer: [
              {
                title: 'Hari Buruh',
                caption: 'Hari buruh pada tanggal 1 Mei',
                url: 'https://beritaantara.000webhostapp.com/hari-buruh-l1mpl3-psbc.jpg',
              }, {
                title: 'Demonstrasi Buruh',
                caption: 'Hari buruh pada tanggal 1 Mei',
                url: 'https://beritaantara.000webhostapp.com/hari-buruh-l1mpl5-psbc.jpg',
              }, {
                title: 'Unjuk Rasa Buruh',
                caption: 'Hari buruh pada tanggal 1 Mei',
                url: 'https://beritaantara.000webhostapp.com/hari-buruh-l1mple-psbc.jpg',
              },
            ],
          };
    }

    GetItem (nama_produk, id_jenis) {
  
        Alert.alert(nama_produk);
       
        }
    
    webCall() {
        return fetch('http://192.168.56.1/antara/fotoekonomi.php')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });
          }
    
          componentDidMount(){

            this.webCall();
          
           }

    componentWillMount() {
        this.setState({
          interval: setInterval(() => {
            this.setState({
              position: this.state.position === this.state.dataSourcer.length ? 0 : this.state.position + 1
            });
          }, 5000)
        });
      }

      componentWillUnmount() {
        clearInterval(this.state.interval);
      }
     
    render() {
        return (
            <Container>
                { this._renderHeader() }
                {/* Body */}
                <ScrollView>
                    { this._renderSwiperList(BerandaData.yourRecentlyViewed) }
                    { this._renderGridList() }
                </ScrollView>
            </Container>
        )
    }

    _btnSearchOnPress() {
        this.props.navigator.push({
            ident: 'Search'
        })
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.headerSub }>
                    <Image style={ styles.logo } source={ require('./../resources/images/logoantara11.png') } />
                </View>
                
                <View style={ styles.btnSearchHolder }>
                    <TouchableOpacity
                        style={ styles.btnSearch }
                        onPress={() => this._btnSearchOnPress()}>
                            <Icon style={ styles.icoSearch } name='search' size={ 16 } />
                            <Text style={ styles.txt_searchtengah }>{ 'Cari' }</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingBottom: 15, flexDirection: 'row' }}>
                    <TouchableOpacity
                        style={[ styles.btnDeals, {borderColor: colors.bd_input, }]}
                        onPress={() => this.props.navigator.push({
                            ident: 'Categories',
                            tabBar: this.props.tabBar
                        })}>
                            <Icon style={ [styles.icoDeals, { marginTop: 2 }] } name='th-large' size={ 16 } />
                            <Text style={ styles.btnSearchTitle }>{'Jenis Berita' }</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    _renderSwiperList(data) {
        return (
            <View style={styles.MainContainer}>
 
        <Slideshow
          dataSource={this.state.dataSourcer}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
           />
 
      </View>
        )
    } 

    FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
     

    _renderGridList() {
        return(
        <View style={styles.MainContainer}>
       <FlatList
       
        data={ this.state.dataSource }
        
        ItemSeparatorComponent = {this.FlatListItemSeparator}

        renderItem={({item}) => 
        
            <View style={{flex:1, flexDirection: 'row'}}>
    
              <Image source = {{ uri: item.berkas }} style={styles.imageView} />
            
              <Text onPress={this.GetItem.bind(this, item.nama_produk)} style={styles.textView} >{item.nama_produk}</Text>

            </View>
          }

        keyExtractor={(item, index) => index.toString()}
        
        />
 
     </View>
     );
    }

    _pressProduct(id) {
        this.props.navigator.push({
            ident: 'ProductDetail',
            id
        })
    }

    _renderSwiperCollectionList(data) {
        return (
            <ListPanel
                onPressSeeAll={() => this._pressSeeAllCollections() }
                title={ data.title }
                description={ data.description }>
                    <Swiper>
                        {
                            data.items.map((item, idx) => {
                               return <SwiperCollectionThumb
                                            onPress={() => this._pressCollection(item.id) }
                                            key={ idx } { ...item }/>
                            })
                        }
                    </Swiper>
            </ListPanel>
        )
    }

    _pressCollection(id) {
        this.props.navigator.push({
            ident: 'CollectionDetail',
            id
        })
    }

    _pressSeeAllCollections() {
        this.props.navigator.push({
            ident: 'Collections'
        })
    }

    _pressSeeAllProducts(data) {
        this.props.navigator.push({
            ident: 'ProductsList',
            navBarTitle: data.navBarTitle
        })
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header
    },
    headerSub: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: 200,
        height: 46,
    },
    icoSearch: {
        color: colors.txt_description,
        marginRight: 5
    },
    btnSearchHolder: {
        padding: 15,
        paddingTop: 0
    },
    btnSearch: {
        borderColor: colors.bd_input,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: colors.bg1,
        borderWidth: 1,
        borderRadius: 5
    },
    btnSearchTitle: {
        color: colors.txt_description1,
        fontSize: 16
    },
    boxSearch: {
        color: colors.txt_searchtengah,
        fontSize: 16
    },
    btnDeals: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 4
    },
    icoDeals: {
        color: colors.txt_description,
        marginRight: 10
    },
     
MainContainer :{
 
    justifyContent: 'center',
    flex:1,
    margin: 5,
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
 
},
 
imageView: {

    width: '50%',
    height: 100 ,
    margin: 7,
    borderRadius : 7
 
},
 
textView: {

    width:'50%', 
    textAlignVertical:'center',
    padding:10,
    color: '#000'
 
},

textViewjenis: {

    width:'50%', 
    textAlignVertical:'center',
    padding:30,
    color: '#000'
 
}
})

module.exports = Beranda
