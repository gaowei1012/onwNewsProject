import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import actions from './redux/action'
import constant from '../../expand/api'
import TabBar from './TabBar'
import { px2dp } from '../../utils/px2dp'
import NavigationUtil from '../../utils/NavigationUtil'
import Spinner from '../../utils/Spinner'

const { getNewList } = constant

class IndexPage extends React.PureComponent {
    state = {
        data: [{ id: 1, name: '头条', type: 'top'},
        { id: 2, name: '社会', type: 'shehui' },
        { id: 3, name: '国内' , type: 'guonei'},
        { id: 4, name: '国际', type: 'guoji' },
        { id: 5, name: '娱乐' , type: 'yule'},
        { id: 6, name: '体育' , type: 'tiyu'},
        { id: 7, name: '军事' , type: 'junshi'},
        { id: 8, name: '科技' , type: 'keji'},
        { id: 9, name: '财经' , type: 'caijing'},
        { id: 10, name: '时尚' , type: 'shishang'}],
        index: 0,
    }
    componentDidMount() {
        this.getData()
    }
    
    onChangeTab = (index, id, type) => {
        this.getData(type)
    }

    getData = (type) => {
        const { getNewsData } = this.props
        const url = `${getNewList}?type=${type}&key=b76916adef25551ed9eb76af5a218d6f`;
        getNewsData('GET', url)
    }
    _renderItem(data) {
        const item = data.item;
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => {
                    const url = item.url
                    NavigationUtil.goPage({ url }, 'OneWebView')
                }}
                style={styles.listBox}
            >
                <Image style={styles.image} source={{ uri: item.thumbnail_pic_s }} />
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    _renderContent() {
        const list = this.props.news;
        if (!list) {
            return <Spinner/>
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

export default connect(({ news }) => ({
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
