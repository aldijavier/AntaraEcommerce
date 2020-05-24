'use strict'
import * as React from 'react';
import {
    View, StyleSheet, Text, Alert, ScrollView, FlatList
} from 'react-native'
import RadioButton from 'react-native-simple-radio-button'
import RadioGroup from 'react-native-simple-radio-button'
import Container            from './../resources/components/Container'
import NavBar               from './../resources/components/NavBar'
import Input                from './../resources/components/form/Input'
import Button               from './../resources/components/form/Button'
import colors               from './../resources/styles/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RadioForm from 'react-native-simple-radio-button';

const radio = ['Pelajar','Non Pelajar']

var radio_props = [
    {label: 'instansi', kategori: 0 },
    {label: 'media', kategori: 1 },
    {label: 'pelajar', kategori: 2 }
  ];


class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            konfirmasikatasandi: '',
            nama_awal: '',
            kategori: '',
            nomorhp: '',
        }  
        
    }

    setRadio = (kategori) => {
        this.setState({kategori:kategori}) }

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
                        <Input secureTextEntry={true}  placeholder='Kata Sandi' onChangeText={password => this.setState({ password })} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Ketik Ulang Kata Sandi' }</Text>
                        <Input secureTextEntry={true} placeholder='Ketik Ulang Kata Sandi' onChangeText={konfirmasikatasandi => this.setState({konfirmasikatasandi})} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Masukkan Nama' }</Text>
                        <Input placeholder='Masukkan Nama' onChangeText={nama_awal => this.setState({nama_awal})} />
                    </View>
                    <View style={ styles.group }>
                    <Text style={ styles.label }>{ 'Pilih Kategori' }</Text>
                    <Text style={ styles.label }>{''}</Text>
                    {radio.map((kategori, index)=>(
                        <TouchableOpacity onPress={this.setRadio.bind(null, kategori)} key={index} style={{flexDirection:'row', marginBottom: 15}}>
                        <View style={this.state.kategori === kategori ? styles.select: styles.unSelect}/>
                        <Text style={{marginLeft:10}}>{kategori}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Nomor Handphone' }</Text>
                        <Input autoCapitalize='none' placeholder='Nomor Handphone' onChangeText={nomorhp => this.setState({ nomorhp })} />
                    </View>
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
        const {kategori} = this.state;
        const { nomorhp }  = this.state ;
        
        
        if (password !== konfirmasikatasandi) {
            alert("Kata sandi tidak sama"); }
        else {
            fetch('http://192.168.56.1/antara/register.php', {
                method: 'POST',
                headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                         },
      body: JSON.stringify({
        email: email,
        password: password,
        nama_awal: nama_awal,
        kategori: kategori,
        nomorhp: nomorhp
    })
 
}).then((response) => response.json())
      .then((responseJson) => { 
        
// Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
        this.props.navigator.push({
            ident: 'SignIn',
            redirectIdent: this.props.redirectIdent })
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
    select:{
        backgroundColor:'red',
        height:20,
        width:20,
        borderRadius:100
      },
      unSelect:{
        borderWidth:1,
        borderColor:'red',
        height:20,
        width:20,
        borderRadius:100
      },
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