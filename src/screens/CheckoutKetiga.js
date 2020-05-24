import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    Button
} from 'react-native';
var {width} = Dimensions.get('window');


const stepCheckout={
    CheckoutStep1: require('../../img/flipkart/checkout/line-1.png'),
    CheckoutStep2: require('../../img/flipkart/checkout/line-2.png'),
}

export default class CheckoutConfirmTabScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = stepCheckout.CheckoutStep1
        return (
            <ScrollView style={styles.container}>
                <View style = {styles.contentWrap}>
                    <View><Text onPress={() => this.props.navigator.pop()} >Back</Text></View>
                    <Image source={image} style={{width: undefined}} resizeMode="contain"/>
                </View>

                <View style = {{flex: 1, flexDirection: 'column' , padding: 20,  backgroundColor:'#fff', marginTop: 10}} >
                    <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'space-between', marginTop: 30}} >
                        <View style = {{ flex: 1, flexDirection :'column'}} >
                            <View><Text>Berita Proklamasi</Text></View>
                            <View><Text>Tahun 1945</Text></View>
                        </View>
                        <View><Text>Rp 10000,-</Text></View>
                    </View>

                    <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'space-between', marginTop: 30}} >
                        <View style = {{ flex: 1, flexDirection :'column'}} >
                            <View><Text>Berita Proklamasi</Text></View>
                            <View><Text>Tahun 1945</Text></View>
                        </View>
                        <View><Text>Rp 15000,-</Text></View>
                    </View>

                    <View style = {{flex: 1, flexDirection: 'row', borderColor: '#333', borderWidth: 1, marginTop: 20}} ></View>

                    <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'space-between', marginTop: 30}} >
                        <View style = {{ flex: 1, flexDirection :'column'}} >
                            <View><Text>TOTAL</Text></View>
                            <View><Text>Pembelian</Text></View>
                        </View>

                        <View><Text>Rp 25000,-</Text></View>
                    </View>

                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 20}}>
                        <TouchableOpacity style={{marginRight: 5}}>
                            <Button
                                style={{width: width/3, borderRadius: 20 }}
                                onPress={() => this.props.navigator.pop()}
                                title="Back" />

                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Button
                                style={{ width: width/3, borderRadius: 20}}
                                onPress={this.onSubmitPressed.bind(this)}
                                title="Selesaikan Pembayaran"
                                />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }

    onSubmitPressed() {
        this.props.navigator.push({
            ident: 'CheckoutKeempat'
        });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5'
    },
    contentWrap: {
        flex: 1,
        padding: 25,
        backgroundColor:'#fff',
        marginTop: 0
    },
    buttonLoginWrap: {
        marginTop:20,
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        flex: 1,
        borderRadius: 30,
        marginTop: 30,
        borderColor: '#999',
        borderWidth: 1
    },
    buttonNext: {
        marginRight:10,
        marginLeft:10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 40,
        backgroundColor: '#FF9000',
    },

    buttonCancel: {
        marginRight:10,
        marginLeft:10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 40,
        backgroundColor: '#fff',
    },
    buttonLoginIcon: {
        flex: 1,
        color: '#fff',
        lineHeight: 30,
    },
    buttonLoginText: {
        flex: 1,
        paddingRight:30,
        fontSize: 15,
        fontWeight: '700',
        textAlign: 'center',
        color: '#ffffff',
        borderWidth: 1,
        borderColor: '#FF9000',
        borderRadius: 10
    },
    title: {
        marginTop: 10,
        color: "#000000",
        fontSize: 18,
        fontWeight: '700',
        textAlign: 'center',
    },
    description: {
        marginTop: 20,
        color: "#000000",
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
    },
    emailSignUpWrap: {
        flex: 1,
        marginTop: 30
    },
    inputGroup: {
        flex: 1,
        marginTop: 30,
    },
    label: {
        color:'#999',
        fontWeight:'700',
        fontSize:14,
        marginBottom: 10
    },
    note: {
        marginTop: 5,
        fontSize: 12,
        color:'#999'
    },
    textInput: {
        flex: 1,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontWeight:'500',
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 5
    },
    preferencesWrap: {
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#fff'
    },
    preferencesTitle: {
        color:'#777',
        fontWeight:'700',
        fontSize:14,
        marginBottom: 10
    },
    checkboxGroup: {
        flex: 1,
        marginTop: 10
    },
    buttonRegister: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
        lineHeight: 45,

    },
    sectionListViewStyle: {
        height: 5
    },
    itemListViewWrap: {
        marginTop: 25
    },
    itemListViewStyle: {
        paddingLeft: 20,
        paddingRight: 20,
        color: '#000',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 55,
        backgroundColor: '#fff',
        borderWidth: 0.3,
        borderColor: '#eeeeee'
    }
});
