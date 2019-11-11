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
    PixelRatio
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';

var {width} = Dimensions.get('window');

const stepCheckout={
    CheckoutStep1: require('../../img/flipkart/checkout/line-1.png'),
    CheckoutStep2: require('../../img/flipkart/checkout/line-2.png'),
    CheckoutStep3: require('../../img/flipkart/checkout/line-3.png'),
}

export default class CheckoutTabScreen extends Component {
    handleChoosePhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log ("response", response);
        })
    }
    constructor(props) {
        super(props);
        
    }

    render() {
        let image = stepCheckout.CheckoutStep1
        return (
            <ScrollView style={styles.container}>
                <View style = {styles.contentWrap}>
                    <View>
                        <Text onPress={() => this.props.navigator.pop()}>Back</Text>
                    </View>

                    <View style = {{marginTop:0, flex:1, padding:20 }} >
                        <View style={styles.emailSignUpWrap}>
                            <Image
                                source={image}
                                style={{width: undefined}}
                                resizeMode="contain"/>

                            <View style={styles.inputGroup}>
                                <TextInput style={styles.textInput}
                                placeholder="Nama Awal"/>
                            </View>

                            <View style={styles.inputGroup}>
                                <TextInput style={styles.textInput}
                                placeholder="Nama Akhir"/>
                            </View>

                              <View style={styles.inputGroup}>
                                <TextInput style={styles.textInput}
                                placeholder="Nomor Handphone"/>
                            </View>

                            <View style={styles.inputGroup}>
                                <TextInput style={styles.textInput}
                                placeholder="Email"/>
                            </View>

                            <View style={styles.inputGroup}>
                                <TextInput style={styles.textInput}
                                placeholder="Negara"/>
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                                <View style={[styles.inputGroup, {marginRight:10}]}>
                                    <TextInput style={styles.textInput}
                                    placeholder="Provinsi" />
                                </View>

                                <View style={styles.inputGroup}>
                                    <TextInput style={styles.textInput}
                                    placeholder="Kota" />
                                </View>
                            </View>

                            <View style={styles.inputGroup}>
                                <TextInput style={styles.textInput}
                                placeholder="Alamat" />
                            </View>

                            <View style={styles.inputGroup}>
                                <Button
                                    title="Upload Foto Identitas Diri"
                                    onPress={this.handleChoosePhoto}
                                />
                            </View>

                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                                <TouchableOpacity style={{marginRight: 5}}>
                                    <Button
                                        style={{width: width/3, borderRadius: 20 }}
                                        title="Kembali"
                                        onPress={() => this.props.navigator.pop()} />

                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <Button
                                        style={{ width: width/3, borderRadius: 20 }}
                                        onPress={this.onSubmitPressed.bind(this)}
                                        title="Berikutnya" />
                                </TouchableOpacity>

                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
    onSubmitPressed() {
         this.props.navigator.push({
            ident: 'CheckoutKedua'
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
        marginTop: 0
    },
    buttonLoginWrap: {
        marginTop:20,
        flex: 1,
        flexDirection: 'column',
    },
    button: {
        flex: 1,
        borderRadius: 20,
        marginTop: 30,
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
    ImageContainer: {
        borderRadius: 10,
        width: 100,
        height: 100,
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CDDC39',
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
