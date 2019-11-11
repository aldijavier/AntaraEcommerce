'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Text, Alert, ScrollView
} from 'react-native'

import Container            from './../resources/components/Container'
import NavBar               from './../resources/components/NavBar'
import Input                from './../resources/components/form/Input'
import Button               from './../resources/components/form/Button'
import colors               from './../resources/styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends Component {
    handleChoosePhoto = () => {
        const options = {};
        ImagePicker.launchImageLibrary(options, response => {
            console.log ("response", response);
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            konfirmasikatasandi: '',
            nama_awal: '',
            nama_akhir: '',
            nomorhp: '',
        }
    }


    render() {
        return (
            <Container>
                <NavBar hideBackButton={true} navigator={ this.props.navigator } title={ 'Daftar' } />
                <ScrollView style={styles.scrollView}>
                <View style={ styles.body }>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Email' }</Text>
                        <Input autoCapitalize='none' placeholder='Masukkan Email Anda' onChangeText={email => this.setState({email})} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Kata Sandi' }</Text>
                        <Input secureTextEntry={true} autoCapitalize='none'  placeholder='Kata Sandi' onChangeText={password => this.setState({ password })} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Ketik Ulang Kata Sandi' }</Text>
                        <Input secureTextEntry={true} placeholder='Ketik Ulang Kata Sandi' onChangeText={konfirmasikatasandi => this.setState({konfirmasikatasandi})} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Masukkan Nama Awal' }</Text>
                        <Input secureTextEntry={true} placeholder='Ketik Ulang Kata Sandi' onChangeText={nama_awal => this.setState({nama_awal})} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Masukkan Nama Akhir' }</Text>
                        <Input secureTextEntry={true} placeholder='Ketik Ulang Kata Sandi' onChangeText={nama_akhir => this.setState({nama_akhir})} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Nomor Handphone' }</Text>
                        <Input autoCapitalize='none' placeholder='Nomor Handphone' onChangeText={nomorhp => this.setState({ nomorhp })} />
                    </View>
                    <Text style={ styles.agreement }>{ 'Agreement' }</Text>
                    <Button title='Daftar' onPress={() => this.registrasi() } />
                </View>
                </ScrollView>
            </Container>
        )
    }

    registrasi = () => {
        const { email }  = this.state ;
        const { password }  = this.state ;
        const { konfirmasikatasandi }  = this.state ;
        const { nama_awal }  = this.state ;
        const { nama_akhir }  = this.state ;
        const { nomorhp }  = this.state ;
        
        
        if (password !== konfirmasikatasandi) {
            alert("Kata sandi tidak sama"); }
        else {
            fetch('http://192.168.1.125/antara/register.php', {
                method: 'POST',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                         },
      body: JSON.stringify({
        email: email,
        password: password,
        nama_awal: nama_awal,
        nama_akhir: nama_akhir,
        nomorhp: nomorhp
    })
 
}).then((response) => response.json())
      .then((responseJson) => { 
        
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
 
      }).catch((error) => {
        console.error(error);
      });
    }
    }

    _pressSignUp() {
        this.props.navigator.push({
            ident: this.props.redirectIdent,
            demoAuth: true
        })
    }
}

const styles = StyleSheet.create({
    body: {
        padding: 20
    },
    label: {
        color: colors.txt_description
    },
    group: {
        marginBottom: 15
    },
    agreement: {
        color: colors.txt_dark,
        marginBottom: 15,
        textAlign: 'center'
    },
    scrollView: {
        backgroundColor: '#f0f0f0',
        marginHorizontal: 20,
      },
}) 

module.exports = SignUp