import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity, Alert } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { px2dp } from '../../utils/px2dp'
import SettingItem from './components/SettingItem'
import NavigationUtil from '../../utils/NavigationUtil'
import Modal from 'react-native-modal'
import { Toast } from '../../utils/Toast'

// svg
import Outline from '../../assets/svg/outline.svg'
import Person from '../../assets/svg/person.svg'
import Download from '../../assets/svg/download.svg'
import ArrowRight from '../../assets/svg/arrow_right.svg'
import Save from '../../assets/svg/save.svg'
import Gy from '../../assets/svg/gy.svg'
import Comment from '../../assets/svg/comment.svg'


class AboutPage extends React.PureComponent {
    state = {
        list: [
            { id: 1, text: '收藏', icon: <Save width={24} height={24} />, com: null },
            { id: 2, text: '公益', icon: <Gy width={24} height={24} />, com: null },
            { id: 3, text: '评论', icon: <Comment width={24} height={24} />, com: null }
        ],
        menu: [
            { id: 1, text: '账户设置', isShow: false, isAction: true, icon: <Person />, com: 'Setting' },
            { id: 2, text: '系统更新', isShow: true, isAction: true, icon: <Download />, com: 'update' },
            { id: 3, text: '关于我们', isShow: false, isAction: true, icon: <Outline />, com: 'Personal' }
        ],
        isVisible: false,
    }
    // go page 
    goToPage = (com) => {
        if (com == '') {

        } else if (com == 'update') {
            this.handleModal()
        } else {
            NavigationUtil.goPage({}, com)
        }
    }
    // 显示 modal
    handleModal = () => {
        this.setState({
            isVisible: true
        })
    }
    // 取消 modal
    _cancle = () => {
        this.setState({
            isVisible: false
        })
    }

    handlePage = () => {
        Toast.showToast('功能开发中')
    }

    goToLogin = () => {
        NavigationUtil.goPage({}, 'Login')
    }

    _topHeader() {
        return (
            <>
                <TouchableOpacity
                    onPress={this.goToLogin}
                    activeOpacity={1}
                    style={styles.topContainer}>
                    <View style={styles.avatarBox}>
                        <View style={styles.avatar} />
                        <Text style={styles.username}>执念</Text>
                    </View>
                    <ArrowRight width={24} height={24} />
                </TouchableOpacity>
                {/* 信息 */}
                <View style={styles.topMenuBox}>
                    {this.state.list.map(l => {
                        return <TouchableOpacity
                            activeOpacity={1}
                            onPress={this.handlePage}
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
                {this.state.menu.map(m => {
                    return <SettingItem
                        key={m.id}
                        onChange={() => this.goToPage(m.com)}
                        text={m.text}
                        isActive={m.isAction}
                        isShow={m.isShow}
                        icon={m.icon}
                    />
                })}
            </View>
        )
    }
    // 系统更新
    _modal() {
        return (
            <Modal
                isVisible={this.state.isVisible}
            >
                <View style={styles.modalBox}>
                    <Text style={styles.updateTitle}>更新提示</Text>
                    <Text style={styles.updateVersion}>当前可更新到最新版本墨珩1.0.19</Text>
                    <View style={styles.updateFotter}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._cancle}
                            style={[styles.btn, { borderRightColor: 'rgba(187, 187, 187, 1)', borderRightWidth: px2dp(.5) }]}
                        >
                            <Text style={styles.canleText}>取消</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={this._dowload}
                            style={styles.btn}
                        >
                            <Text style={styles.downloadText}>前往下载</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        )
    }
    render() {
        return (
            <SafeAreaView style={styles.indexContainer}>
                {this._modal()}
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
        marginTop: px2dp(41)
    },
    modalBox: {
        width: px2dp(259),
        height: px2dp(144),
        borderRadius: px2dp(13),
        backgroundColor: '#FDFFFB',
        alignSelf: 'center',
        alignItems: 'center'
    },
    updateTitle: {
        fontSize: px2dp(18),
        color: '#030303',
        marginTop: px2dp(21)
    },
    updateVersion: {
        marginTop: px2dp(4),
        fontSize: px2dp(14),
        color: '#333'
    },
    updateFotter: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: px2dp(44),
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: px2dp(.5),
        borderTopColor: 'rgba(187, 187, 187, 1)'
    },
    btn: {
        width: px2dp(259 / 2),
        height: px2dp(44),
        alignItems: 'center',
        justifyContent: 'center'
    },
    canleText: {
        color: '#E31E1E',
        fontSize: px2dp(17)
    },
    downloadText: {
        fontSize: px2dp(17),
        color: '#4DAB6D'
    }
})
