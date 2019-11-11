'use strict'
import React, { Component } from 'react'
import {
    View, StyleSheet, Text, TouchableOpacity, TextInput, Alert
} from 'react-native'

import PasswordInputText        from 'react-native-hide-show-password-input';
import Container                from './../resources/components/Container'
import NavBar                   from './../resources/components/NavBar'
import Input                    from './../resources/components/form/Input'
import Button                   from './../resources/components/form/Button'
import colors                   from './../resources/styles/colors'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserEmail: '',
            UserPassword: ''
        }
    }
    render() {
        return (
            <Container>
                <NavBar hideBackButton={true} navigator={ this.props.navigator } title={'SignIn'} />
                <View style={ styles.body }>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Email' }</Text>
                        <TextInput placeholder={'Masukkan Email'} onChangeText={UserEmail => this.setState({UserEmail})} />
                    </View>
                    <View style={ styles.group }>
                        <Text style={ styles.label }>{ 'Kata Sandi' }</Text>
                        <PasswordInputText secureTextEntry={true} placeholder={'Masukkan Kata Sandi'} onChangeText={UserPassword => this.setState({UserPassword})} />
                    </View>
                    <View style={styles.group}>

                    </View>
                    <Button title={ 'Masuk' } onPress={this.signin} />
                    <View></View>
                    <TouchableOpacity tittle ={'Daftar' } onPress={() => this._pressSignUp() } style={ styles.btnRegister } color={'Red'} >
                        <Text style={ styles.btnRegisterTxt }>{ 'Daftar' }</Text>
                    </TouchableOpacity>
                    <View style={styles.group}>

                    </View>
                </View>
            </Container>
        )
    }

    signin = () => {
        const { UserEmail }  = this.state ;
         const { UserPassword }  = this.state ;
 
        fetch('http://192.168.1.125/antara/login.php', {
        method: 'POST',
        headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                 },
 body: JSON.stringify({
 
    email: UserEmail,
    password: UserPassword
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {

        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
            //Then open Profile activity and send user email to profile activity.
            this.props.navigator.push({
                ident: 'Antara',
                redirectIdent: this.props.redirectIdent
            })
        }
        else{
          Alert.alert(responseJson);
        }

      }).catch((error) => {
        console.error(error);
      });
 
  }

    _pressSignIn() {
        this.props.navigator.push({
            ident: this.props.redirectIdent,
            demoAuth: true
        })
    }

    _pressSignUp() {
        this.props.navigator.push({
            ident: 'SignUp',
            redirectIdent: this.props.redirectIdent
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
    btnRegister: {
        alignItems: 'center',
        marginTop: 15
    },
    btnRegisterTxt: {
        color: colors.txt_main,
        textDecorationLine: 'underline',
        paddingBottom: 2
    },
    redirectlink: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    }
})

module.exports = SignIn
