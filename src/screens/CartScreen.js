import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions,
    TouchableOpacity,
    Button,
    ScrollView
} from 'react-native';

import Container from './../resources/components/Container.js';

let {width, height} = Dimensions.get("window");

class CartScreen extends Component {
    constructor(props) {
        super(props);
    }

    pressCheckoutPertama(){
        this.props.navigator.push({
            ident: 'CheckoutKetiga'
        })
    }

    kembali(){
        this.props.navigator.push({
            ident: 'ProductDetail'
        })
    }

    renderPriceDetail(){
        return  <View style={styles.price_detail}>
                    <View style={{flex: 1, flexDirection: 'row', alignItems:'flex-start', borderColor : '#f0f0f0', borderBottomWidth: 1, padding: 20}}>
                        <Text>
                            Detail Harga
                        </Text>
                    </View>

                    <View style={{flex: 1, flexDirection: 'column', marginBottom: 50, padding: 20}}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                            <Text>
                                Harga (2 Barang)
                            </Text>
                            <Text>
                                Rp 15000,-
                            </Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.5, borderBottomColor: '#f0f0f0', padding: 10}}>
                            <Text>Sumber Foto : </Text>
                            <Text style={{color: '#388e3c'}}>Antara</Text>
                        </View>

                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 15}}>
                            <Text style={styles.summary_text}>
                                Total Pembayaran
                            </Text>
                            <Text style={styles.summary_text}>
                                Rp 15000,-
                            </Text>
                        </View>
                    </View>
                </View>
    }
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#FFFFFF'}}>
                    <View style={{flex: 1,
                            height: 60,
                            width: width,
                            backgroundColor :'#9f0000',
                            alignItems:'flex-start',
                            justifyContent: 'center',
                        }}>
                        <Text style={{color: '#fff', fontSize: 15, paddingTop: 20, paddingLeft: 30}}>
                            Keranjang Saya (1)
                        </Text>
                    </View>

                    <View style={styles.block_wrap}>
                        <View style={{flex: 7}}>
                            <Text>
                                Pendemo Berkumpul didepan Gedung DPR
                            </Text>
                            <Text style={styles.text_des}>
                                Sumber : Antara
                            </Text>
                        </View>
                        <View style={{flex: 3}}>
                            <Image
                                style={styles.item_image}
                                source={ require('../../img/asos/hut49.jpg') } />
                        </View>
                    </View>

                    <View style={styles.block_wrap}>
                        <View style={{flex: 7, flexDirection:'column'}}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize: 18}}>
                                    Rp : 15000,-
                                </Text>
                                <Text style={{fontSize: 16, color: '#878787'}}>
                                    
                                </Text>
                            </View>
                            <Text>
                            </Text>
                            <Text style={{fontSize: 13}}>
                                Pengiriman Setelah di Verifikasi
                            </Text>
                        </View>
                    </View>

                    <View style={styles.block_section}>
                        <TouchableOpacity>
                            <View style={styles.button_wrap}>
                                <Text style={styles.button_text}>Hapus</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    { this.renderPriceDetail() }

                    <View style={styles.block_section}>
                        <TouchableOpacity style={ [styles.button_group_item, {backgroundColor: '#6e7476'}]} onPress={()=> this.kembali()}>
                            <Text style={{color: "#fff"}}>Kembali</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={ [styles.button_group_item, {backgroundColor: '#6e7476'}]} onPress={()=> this.pressCheckoutPertama()}>
                            <Text style={{color: "#fff"}}>Lanjutkan Ke Pembayaran</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

module.exports = CartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        marginTop: 30,
        backgroundColor: '#eaeaea'
    },
    button_group_item : {
        flex: 1,
        width: width/2 - 10,
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height:50,
        borderWidth: 1,
        borderColor: '#aaa',
        justifyContent:'center'
    },
    block_section:{
        flex: 4,
        flexDirection: 'row',
        height: 40,
        width: width,
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor :'#fff',
        marginBottom: 15,
    },
    text_des:{
        color: '#878787',
        fontSize: 11
    },

    summary_text:{
        fontWeight: '600',
        fontSize: 16
    },

  button_wrap:{
    borderColor: '#afafaf',
    borderWidth: 0.5,
    width: width/2,
    height: 40,
    alignItems:'center',
    justifyContent: 'center',
  },

  price_detail:{
    flex: 1,
    flexDirection: 'column',
    width: width,
    justifyContent: 'space-between',
    backgroundColor :'#fff',
  },

    button_text:{
        fontSize: 12,
        fontWeight: '600'
    },

  block_wrap: {
    flex: 1,
    flexDirection: 'row',
    height: 120,
    width: width,
    borderColor: '#d8d4d4',
    borderWidth: 0.5,
    justifyContent: 'space-between',
    alignItems:'center',
    padding: 20,
    backgroundColor :'#fff',
  },

  txt_button: {
    fontSize: 12,
    fontWeight: '700'
  },

  cart_item: {
      flex: 1,
      borderBottomWidth: 15,
  },
  item_right : {
  },
  item_left: {
      alignItems: "center"
  },
  item_image : {
      maxWidth: 100,
      maxHeight: 70
  },
  button_item_group: {
      flex: 1,
      flexDirection: "row",
    //   justifyContent: "space-around"
  },
  cart_item_button: {
      flex: .5,
      borderWidth: 1,
      borderColor: "#ccc",
  },
  cart_item_btn_text:{
      textAlign: "center",
      minHeight: 35,
      padding: 5
  }
});
