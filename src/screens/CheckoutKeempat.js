import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Button,
} from 'react-native';

import ResponsiveImage from 'react-native-responsive-image';

const stepCheckout={
    CheckoutStep1: require('../../img/flipkart/checkout/line-1.png'),
    CheckoutStep2: require('../../img/flipkart/checkout/line-2.png'),
    CheckoutStep3: require('../../img/flipkart/checkout/line-3.png'),
}

export default class CheckoutSuccessTabScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = stepCheckout.CheckoutStep3
        return (
            <ScrollView style={styles.container}>
                <View style = {styles.contentWrap}>
                <TouchableOpacity>
                    <Button
                        title="Cek Notifikasi Pembelian"
                        style={{ width: undefined, borderRadius: 20}}
                        onPress={this.onSubmitPressed.bind(this)} />
                </TouchableOpacity>
                </View>

                <View style = {{flex: 1, flexDirection: 'column' , padding: 20,  backgroundColor:'#fff', marginTop: 10}} >
                    <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'center', marginTop: 30}} >
                        <ResponsiveImage
                            source={require('../../img/flipkart/checkout/success.png')}
                            initWidth="200" initHeight="200" />
                    </View>

                    <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'center', marginTop: 30}} >
                        <View style = {{ flex: 1, alignItems:'center'}} >
                            <Text style={{fontSize: 30}}>Congratulations. Your order is accepted, Check Notification for status</Text>
                        </View>
                    </View>

                    <View style = {{flex: 1, flexDirection: 'row',  justifyContent: 'center', marginTop: 30}} >
                        <View style = {{ flex: 1}} >
                            <Text></Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }

    onSubmitPressed() {
         this.props.navigator.push({
            ident: 'Notification'
        })
    }

    onSubmitPressed2() {
        this.props.navigator.push({
           ident: 'Notification'
       })
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
        marginTop: 0,
        flexDirection: "row-reverse"
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
