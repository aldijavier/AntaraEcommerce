import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    Button,
} from "react-native";

var {width} = Dimensions.get('window');
import ResponsiveImage from 'react-native-responsive-image';

const stepCheckout={
    CheckoutStep1: require('../../img/flipkart/checkout/line-1.png'),
    CheckoutStep2: require('../../img/flipkart/checkout/line-2.png'),
}

class CheckoutPaymentTabScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let image = stepCheckout.CheckoutStep1
        return (
            <ScrollView style={styles.container}>
                <View style={{padding: 20}}><Text onPress={() => this.props.navigator.pop()} >Back</Text></View>

                <View style = {{flex: 1, padding: 20}}>
                   <Image source={image} style={{width: undefined}} resizeMode="contain"/>
                </View>

                <View style = {styles.contentWrap}>
                    <View style={styles.paymentType}>
                        <TouchableOpacity>
                            <ResponsiveImage
                                source={require('../../img/flipkart/checkout/master_card.png')}
                                initWidth={width/4} initHeight="60" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.paymentType}>
                        <TouchableOpacity>
                            <ResponsiveImage
                                source={require('../../img/flipkart/checkout/visa.png')}
                                initWidth={width/4} initHeight="60" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.paymentType}>
                        <TouchableOpacity>
                            <ResponsiveImage
                                source={require('../../img/flipkart/checkout/paypal.png')}
                                 initWidth={width/4} initHeight="60" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style = {{marginTop: 0, flex:1, padding:20,   backgroundColor:'#fff' }} >
                    <View style={styles.inputGroup}>
                        <TextInput style={styles.textInput}
                        placeholder="Nama Pemegang Kartu"/>
                    </View>

                    <View style={styles.inputGroup}>
                        <TextInput style={styles.textInput}
                        placeholder="Nomor Kartu"/>
                    </View>

                    <View style={styles.inputGroup}>
                        <TextInput style={styles.textInput}
                        placeholder="Tanggal"/>
                    </View>

                    <View style={styles.inputGroup}>
                        <TextInput style={styles.textInput}
                        placeholder="Bulan"/>
                    </View>

                      <View style={styles.inputGroup}>
                        <TextInput style={styles.textInput}
                        placeholder="CVV"/>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, padding: 25}}>
                    <TouchableOpacity style={{marginRight: 5}}>
                        <Button
                            style={{width: width/3, borderRadius: 20 }}
                            onPress={() => this.props.navigator.pop()}
                            title="Kembali"
                            />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Button
                            title="Lanjutkan"
                            style={{ width: width/3, borderRadius: 20 }}
                            onPress={this.onSubmitPressed.bind(this)} />
                    </TouchableOpacity>
                </View>


            </ScrollView>
        )
    }

    onSubmitPressed() {
        this.props.navigator.push({
            ident: 'CheckoutKetiga'
        });
    }
}

module.exports = CheckoutPaymentTabScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        paddingLeft: 10,
        paddingRight: 10,
    },
    contentWrap: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        backgroundColor:'#fff',
        padding: 20
    },
    paymentType:{
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 5,
    },
    infoWrap:{
        backgroundColor:'#fff',
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
        borderRadius: 5,
        backgroundColor: '#fff'
    },
    inputGroup: {
        flex: 1,
        marginTop: 30,
        backgroundColor: '#fff'
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
    }
});
