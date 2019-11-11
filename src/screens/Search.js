'use strict'
import React, { Component } from 'react'

import {
    Text, StyleSheet, View, TextInput, ListView, TouchableOpacity, Switch, Dimensions
} from 'react-native'

import Container                    from './../resources/components/Container'
import Input                        from './../resources/components/form/Input'
import LargeProductThumb            from './../resources/components/product/LargeProductThumb'
import colors                       from './../resources/styles/colors'
import searchData                   from './../data/search'
import ModalWrapper                 from 'react-native-modal-wrapper'
import Icon                         from 'react-native-vector-icons/FontAwesome'

let { width } = Dimensions.get('window')
class Search extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            searchStr: '',
            dataSource: ds.cloneWithRows(searchData.data),
            modalSortVisible: false,
            modalSortDataSource: ds.cloneWithRows(searchData.sortData),
            modalFilterDataSource: ds.cloneWithRows(searchData.filterData),
            modalFilterVisible: false
        }
    }

    render() {
        return (
            <Container>
                { this._renderHeader() }
                <ListView
                    enableEmptySections={ true }
                    dataSource={ this.state.dataSource }
                    renderRow={ this._renderRow.bind(this) } />
                { this._renderSortModal() }
                { this._renderFilterModal() }
            </Container>
        )
    }

    _renderHeader() {
        return (
            <View style={ styles.header }>
                <View style={ styles.inpSearchHolder }>
                    <Input autoCapitalize='none' placeholder='Cari' onChangeText={(vl) => { this.setState({searchStr: vl})}} />
                </View>
                <View style={ styles.actionsHolder }>
                    <Text style={ styles.text }>{ '' }</Text>
                    <View style={ styles.filtersHolder }>
                        <TouchableOpacity onPress={() => this.setState({ modalSortVisible: true })} style={ styles.txtSortHolder }>
                            <Text style={ styles.text }>{ 'Urutkan' }</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ modalFilterVisible: true })}>
                            <Text style={[ styles.text, { marginLeft: 15 } ] }>{ 'Filter' }</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    _renderRow(rowData) {
        return (
            <LargeProductThumb onPress={() => this._pressProduct(rowData.id) } { ...rowData } />
        )
    }

    _pressProduct(id) {
        this.props.navigator.push({
            ident: 'ProductDetail',
            id
        })
    }

    _renderSortModal() {
        return (
            <ModalWrapper
                containerStyle={{ alignItems: 'flex-end' }}
                onRequestClose={() => this.setState({ modalSortVisible: false })}
                position="right"
                style={{ width: width - 50, backgroundColor: colors.bg1, flex: 1, flexDirection: 'row' }}
                shouldAnimateOnRequestClose={true}
                visible={ this.state.modalSortVisible }>
                    <Container>
                        { this._renderModalHeader() }
                        { this._renderSortMobdalBody() }
                    </Container>
            </ModalWrapper>
        )
    }

    _renderModalHeader(type = 'Sort') {
        let onPressDone = () => {
            this.setState({ modalSortVisible: false })
        }
        if(type == 'Filter') {
            onPressDone = () => {
                this.setState({ modalFilterVisible: false })
            }
        }
        return (
            <View style={ styles.modalHeader }>
                <View style={ styles.modalHeaderTitleHolder }>
                    <Text>{ type }</Text>
                    <Text style={ styles.modalHeaderDes }>Hasil</Text>
                </View>
                <TouchableOpacity onPress={onPressDone} style={ styles.modalBtnDone }>
                    <Text style={ styles.text }>{ 'Selesai' }</Text>
                </TouchableOpacity>
            </View>
        )
    }

    _renderSortMobdalBody() {
        return (
            <ListView
                enableEmptySections={ true }
                dataSource={ this.state.modalSortDataSource }
                renderRow={ this._renderModalSortRow } />
        )
    }

    _renderModalSortRow = (data) => {
        let nameStyle = styles.rowname;
        if(data.active) {
            nameStyle = [nameStyle, styles.active]
        }
        return (
            <View style={ styles.sortModalRow }>
                <Text style={ nameStyle }>{ data.name }</Text>
                { data.active && <Icon name='check' style={ styles.active } size={16} /> }
            </View>
        )
    }

    _renderFilterModal() {
        return (
            <ModalWrapper
                containerStyle={{ alignItems: 'flex-end' }}
                onRequestClose={() => this.setState({ modalFilterVisible: false })}
                position="right"
                style={{ width: width - 50, backgroundColor: colors.bg1, flex: 1, flexDirection: 'row' }}
                shouldAnimateOnRequestClose={true}
                visible={ this.state.modalFilterVisible }>
                    <Container>
                        { this._renderModalHeader('Filter') }
                        { this._renderFilterModalBody() }
                    </Container>
            </ModalWrapper>
        )
    }

    _renderFilterModalBody() {
        return (
            <ListView
                enableEmptySections={ true }
                dataSource={ this.state.modalFilterDataSource }
                renderRow={ this._renderModalFilterRow } />
        )
    }

    _renderModalFilterRow = (data) => {
        let type = data.type
        let rightPart;
        if(type == 'select') {
            let selectedText = <Text style={ styles.filterRowSelectedText }>Any</Text>
            let selects = data.selected
            if(selects) {
                let text = selects.map((txt, idx) => {
                    if(idx == 0) return txt
                    return ', ' + txt
                })

                selectedText = <Text numberOfLines={1} ellipsizeMode='tail' style={ styles.filterRowSelectedTextActive }>{ text }</Text>
            }
            rightPart = (
                <View style={[ styles.filterRowRightPart, { paddingTop: 7, paddingBottom: 7 } ]}>
                    { selectedText }
                    <Icon name='angle-right' size={18} style={styles.filterRowSelectedIcon} />
                </View>
            )
        } else if(type == 'switch') {
            rightPart = (
                <Switch value={ data.checked } />
            )
        }

        return (
            <View style={[ styles.sortModalRow, { paddingTop: 8, paddingBottom: 8 } ]}>
                <Text style={ styles.rowname }>{ data.name }</Text>
                { rightPart }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header,
        padding: 15
    },
    inpSearchHolder: {

    },
    actionsHolder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    filtersHolder: {
        flexDirection: 'row'
    },
    text: {
        color: colors.txt_main
    },
    txtSortHolder: {
        paddingRight: 15,
        borderRightWidth: 1,
        borderColor: colors.bd_main
    },
    modalHeader: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: colors.bg_header,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: colors.bd_line
    },
    modalHeaderDes: {
        fontSize: 12,
        color: colors.txt_dark,
        fontWeight: '300'
    },
    modalHeaderTitleHolder: {
        alignItems: 'center'
    },
    modalBtnDone: {
        position: 'absolute',
        right: 10,
        top: 20
    },
    sortModalRow: {
        borderColor: colors.bd_line,
        borderBottomWidth: StyleSheet.hairlineWidth,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    rowname: {
        color: colors.txt_dark,
        paddingRight: 20
    },
    active: {
        color: colors.txt_main
    },
    filterRowSelectedText: {
        color: colors.txt_description
    },
    filterRowSelectedTextActive: {
        color: colors.txt_main,
        width: 150,
        textAlign: 'right'
    },
    filterRowSelectedIcon: {
        color: colors.txt_description,
        marginLeft: 10
    },
    filterRowRightPart: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

module.exports = Search
