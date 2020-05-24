'use strict'
import React, { Component } from 'react'

import {Navigator} from'react-native-deprecated-custom-components'
// Import all screens
import Beranda                     from './screens/Beranda'
import SignIn                   from './screens/SignIn'
import SignUp                   from './screens/SignUp'
import Myantara                   from './screens/Myantara'
import Search                   from './screens/Search'
import Notification             from './screens/Notification'
import Categories               from './screens/Categories'
import Deals                    from './screens/Deals'
import Collections              from './screens/Collections'
import ProductsList             from './screens/ProductsList'
import CollectionDetail         from './screens/CollectionDetail'
import ProductDetail            from './screens/ProductDetail'
import CartScreen               from './screens/CartScreen'
import CheckoutPertama          from './screens/CheckoutPertama'
import CheckoutKedua            from './screens/CheckoutKedua'
import CheckoutKetiga           from './screens/CheckoutKetiga'
import CheckoutKeempat          from './screens/CheckoutKeempat'
import Help                     from './screens/Help'
import Categories2              from './screens/Categories2'
import Notif                    from './screens/Notif'

class Route extends Component {
    constructor(props) {
        super(props)
    }

    _renderScene(route, navigator) {
        let ident = route.ident
        var globalData = { navigator, ...route }

        //Authentication middleware
        let authIdents = ['Antara', 'Notification']
        if(authIdents.indexOf(ident) != -1) {
            if(!route.demoAuth) { //Check signed in user data, if already signed in ignore and continue
                return <SignIn { ...globalData } redirectIdent={ ident } />
            }
        }

        switch(ident) { // check route ident to return correct screen
            case 'SignIn':              return <SignIn { ...globalData } />
            case 'SignUp':              return <SignUp { ...globalData } /> // Redirect to coreect ident after sign up
            case 'Myantara':              return <Myantara { ...globalData } />
            case 'Search':              return <Search { ...globalData } />
            case 'Notification':        return <Notification { ...globalData } />
            case 'Categories':          return <Categories { ...globalData } />
            case 'Deals':               return <Deals { ...globalData } />
            case 'Collections':         return <Collections { ...globalData } />
            case 'ProductsList':        return <ProductsList { ...globalData } />
            case 'CollectionDetail':    return <CollectionDetail { ...globalData } />
            case 'ProductDetail':       return <ProductDetail { ...globalData } />
            case 'CartScreen':          return <CartScreen {...globalData} />
            case 'CheckoutPertama':     return <CheckoutPertama {...globalData} />
            case 'CheckoutKedua':       return <CheckoutKedua {...globalData} />
            case 'CheckoutKetiga':      return <CheckoutKetiga {...globalData} />
            case 'CheckoutKeempat':     return <CheckoutKeempat {...globalData} />
            case 'Help':                return <Help {...globalData} />
            case 'Categories2':         return <Categories2 {...globalData} />
            case 'Notif':               return <Notif {...globalData} />
            default:                    return <Beranda { ...globalData } /> // tabBar is use for search button on Beranda page
        }
    }
        
    render() {
        return (
            <Navigator
                ref='appNavigator'
                initialRoute = { this.props.initialRoute }
                renderScene = { this._renderScene.bind(this) }
            />
        )
    }
}

module.exports = Route
