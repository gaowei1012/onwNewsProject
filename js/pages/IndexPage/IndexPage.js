import React, { useState, useEffect, useCallback } from 'react'
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import actions from './redux/action'
import { constant } from '../../expand/api'
import TabBar from './TabBar'
import { px2dp } from '../../utils/px2dp'
import NavigationUtil from '../../utils/NavigationUtil'

class IndexPage extends React.PureComponent {
    state = {
        data:[{ id: 1, name: '头条' },
        { id: 2, name: '社会' },
        { id: 3, name: '国内' },
        { id: 4, name: '国际' },
        { id: 5, name: '娱乐' },
        { id: 6, name: '体育' },
        { id: 7, name: '军事' },
        { id: 8, name: '科技' },
        { id: 9, name: '财经' },
        { id: 10, name: '时尚' }],
        index: 0,

    }
    componentDidMount() {
        const { getNewsData } = this.props
        const url = `${constant.getNewList}?type=top&key=b76916adef25551ed9eb76af5a218d6f`;
        getNewsData('GET', url)
    }
    onChangeTab = () => {

    }
    _renderItem(data) {
        console.log('data', data)
        const item = data.item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    const url = item.url
                    NavigationUtil.goPage({url}, 'OneWebView')
                    console.log('uerr', item.url)
                }}
                style={styles.listBox}
            >
                <Image style={styles.image} source={{uri: item.thumbnail_pic_s}}/>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    _renderContent() {
        const list = this.props.news;
        console.log('list', list)
        if (!list) {
            return <Text>加载中...</Text>
        }
        const data = list.item;
        return (
            <FlatList
                data={data}
                renderItem={this._renderItem}
            />
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.indexContainer}>
                <TabBar
                    ref={e => this.tabs = e}
                    index={this.state.index}
                    data={this.state.data}
                    onChange={(index, id, type) => this.onChangeTab(index, id, type)}
                />
                {this._renderContent()}
            </SafeAreaView>
        )
    }
}

export default connect(({news}) => ({
    news
}), dispatch => ({
    getNewsData(method, url) {
        dispatch(actions.getNewsData(method, url))
    }
}))(IndexPage)


const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
    listBox: {
        flexDirection: 'row',
        alignItems: 'center',
        width: px2dp(335),
        alignSelf: 'center',
        paddingVertical: px2dp(10)
    },
    title: {
        width: px2dp(280),
        marginLeft: px2dp(10)
    },
    image: {
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(10)
    },
    date: {
        paddingHorizontal: px2dp(10),
        marginTop: px2dp(10),
        fontSize: px2dp(12),
        color: '#333'
    }
})
