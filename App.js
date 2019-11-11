import React, { Component} from 'react'
import {
    AppRegistry, StyleSheet
} from 'react-native'

import TabNavigator             from 'react-native-tab-navigator'
import {Navigator}              from 'react-native-deprecated-custom-components'
import Icon                     from 'react-native-vector-icons/FontAwesome'
import colors                   from './src/resources/styles/colors'
import Route                    from './src/Route'


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: 'Beranda',
            searchData: {}
        }
    }

    render() {
        return (
            <TabNavigator>
                <TabNavigator.Item
                    tabStyle={ styles.tab }
                    selected={this.state.selectedTab === 'Beranda'}
                    title={ 'Beranda' }
                    titleStyle={ styles.title }
                    renderIcon={() => <Icon name="home" size={25} style={[ styles.icon, { color: colors.txt_description }]} />}
                    renderSelectedIcon={() => <Icon name="home" size={25} style={[ styles.icon, { color: colors.txt_main }]} />}
                    onPress={() => this.setState({ selectedTab: 'Beranda' })}>
                    <Route initialRoute={{ ident: 'Beranda' }} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    tabStyle={ styles.tab }
                    selected={this.state.selectedTab === 'user'}
                    title={ 'Akun Saya' }
                    titleStyle={ styles.title }
                    renderIcon={() => <Icon name="user" size={25} style={[ styles.icon, { color: colors.txt_description }]} />}
                    renderSelectedIcon={() => <Icon name="user" size={25} style={[ styles.icon, { color: colors.txt_main }]} />}
                    onPress={() => this.setState({ selectedTab: 'user' })}>
                    <Route initialRoute={{ ident: 'Antara' }} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    tabStyle={ styles.tab }
                    selected={this.state.selectedTab === 'Search'}
                    title={ 'Cari' }
                    titleStyle={ styles.title }
                    renderIcon={() => <Icon name="search" size={25} style={[ styles.icon, { color: colors.txt_description }]} />}
                    renderSelectedIcon={() => <Icon name="search" size={25} style={[ styles.icon, { color: colors.txt_main }]} />}
                    onPress={() => this.setState({ selectedTab: 'Search' })}>
                    <Route initialRoute={{ ident: 'Search', searchData: this.state.searchData }} />
                </TabNavigator.Item>

                <TabNavigator.Item
                    tabStyle={ styles.tab }
                    selected={this.state.selectedTab === 'cart'}
                    title={ 'Keranjang' }
                    titleStyle={ styles.title }
                    renderIcon={() => <Icon name="cart-plus" size={25} style={[ styles.icon, { color: colors.txt_description }]} />}
                    renderSelectedIcon={() => <Icon name="cart-plus" size={25} style={[ styles.icon, { color: colors.txt_main }]} />}
                    onPress={() => this.setState({ selectedTab: 'cart' })}>
                    <Route initialRoute={{ ident: 'CartScreen' }} />
                </TabNavigator.Item>
                
                <TabNavigator.Item
                    tabStyle={ styles.tab }
                    selected={this.state.selectedTab === 'notification'}
                    title={ 'Notifikasi' }
                    titleStyle={ styles.title }
                    renderIcon={() => <Icon name="bell-o" size={25} style={[ styles.icon, { color: colors.txt_description }]} />}
                    renderSelectedIcon={() => <Icon name="bell" size={25} style={[ styles.icon, { color: colors.txt_main }]} />}
                    onPress={() => this.setState({ selectedTab: 'notification' })}>
                    <Route initialRoute={{ ident: 'Notification' }} />
                </TabNavigator.Item>
 
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tab: {
        paddingBottom: 5
    },
    icon: {
        marginBottom: -4
    },
    title: {
        color: colors.txt_description
    }
})

AppRegistry.registerComponent('antara', () => App);
