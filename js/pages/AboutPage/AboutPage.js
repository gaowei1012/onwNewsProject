import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp } from '../../utils/px2dp'
import SettingItem from './components/SettingItem'

// svg
import Outline from '../../assets/svg/outline.svg'
import Person from '../../assets/svg/person.svg'
import Download from '../../assets/svg/download.svg'
import ArrowRight from '../../assets/svg/arrow_right.svg'

class AboutPage extends React.PureComponent {
    state = {
        list: [
            { id: 1, text: '信息1', icon: <Person/>, com: null },
            { id: 2, text: '信息2', icon: <Person/>, com: null },
            { id: 3, text: '信息3', icon: <Person/>, com: null }
        ]
    }
    _topHeader() {
        return (
            <>
                <View style={styles.topContainer}>
                    <View style={styles.avatarBox}>
                        <View style={styles.avatar} />
                        <Text style={styles.username}>name</Text>
                    </View>
                    <ArrowRight width={27} height={27}/>
                </View>
                {/* 信息 */}
                <View style={styles.topMenuBox}>
                    {this.state.list.map(l => {
                        return <TouchableOpacity
                            style={styles.menuItemBox}
                        >
                            <View style={styles.menuIcon}>
                                {l.icon}
                            </View>
                            <Text>{l.text}</Text>
                        </TouchableOpacity>
                    })}
                </View>
            </>
        )
    }
    // top header
    _renderTopBar() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        return <TopNavigationBar
            title='个人中心'
            statusBar={StatusBar}
            style={{ backgroundColor: "#FEFFFE" }}
        />
    }
    _renderContent() {
        return (
            <View style={styles.settingBox}>
                <SettingItem
                    onChange={this.goToPage}
                    text={'账户设置'}
                    isActive={true}
                    isShow={false}
                    icon={<Person/>}
                />
                 <SettingItem
                    onChange={this.goToPage}
                    text={'系统更新'}
                    isActive={true}
                    isShow={true}
                    icon={<Download/>}
                />
                 <SettingItem
                    onChange={this.goToPage}
                    text={'关于我们'}
                    isActive={true}
                    isShow={false}
                    icon={<Outline/>}
                />
            </View>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.indexContainer}>
                {this._renderTopBar()}
                {this._topHeader()}
                {this._renderContent()}
            </SafeAreaView>
        )
    }
}

export default AboutPage


const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: px2dp(335),
        alignSelf: 'center'
    },
    avatarBox: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    avatar: {
        width: px2dp(64),
        height: px2dp(64),
        borderRadius: px2dp(32),
        backgroundColor: 'red'
    },
    username: {
        marginLeft: px2dp(12)
    },
    topMenuBox: {
        flexDirection: 'row',
        width: px2dp(345),
        marginVertical: px2dp(20),
        justifyContent: 'space-around'
    },
    menuIcon: {
        width: px2dp(30),
        height: px2dp(30),
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: px2dp(10)
    },
    menuItemBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    settingBox: {
        alignSelf: 'center',
        marginTop: px2dp(51)
    },
})
