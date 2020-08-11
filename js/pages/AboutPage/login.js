import React from 'react'
import { View, StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { GoBack } from '../../utils/GoBack'
import TopNavigationBar from '../../common/TopNavigationBar'
import { connect } from 'react-redux'
import actions from './redux/action'
import constant from '../../expand/api'
import { Button } from 'react-native-elements'
import { Toast } from '../../utils/Toast'

const { register } = constant

class Login extends React.PureComponent {
    state = {
        account: null,
        password: null,
        newPassword: null,
        register: true, // 注册
        registerAccount: null,
        registerPassword: null
    }
    handleLoginAccout = (account) => {
        this.setState({ account })
    }
    handleLoginPassword = (password) => {
        this.setState({ password })
    }
    handleRegisterNewPassword = (newPassword) => {
        this.setState({ newPassword })
    }
    handleRegisterPassword = (registerPassword) => {
        this.setState({ registerPassword })
    }
    handleRegisterAccout = (registerAccount) => {
        this.setState({ registerAccount })
    }
    /* 提交注册 */
    _register = () => {
        const { getRegister } = this.props
        const { registerAccount, registerPassword, newPassword } = this.state
        if (registerPassword !== newPassword) {
            return <Text>密码不匹配</Text>
        } else {
            const data = {
                "username": registerAccount,
                "password": registerPassword
            }
            getRegister(register, 'POST', data)
        }
    }
    // 切换到注册
    _switch = () => {
        this.setState({
            register: false
        })
    }
    // 切换到登录
    _switchLogin = () => {
        this.setState({
            register: true
        })
    }
    // 忘记密码
    _forget=()=> {
        Toast.showToast('功能开发中')
    }
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTop = (
            <TopNavigationBar
                statusBar={StatusBar}
                style={{ backgroundColor: "#fff" }}
                leftButton={GoBack(this.props)}
            />
        );
        const _title = (
            <>
                {this.state.register ? <Text style={styles.loginTitle}>账号密码登录</Text> : <Text style={styles.loginTitle}>用户注册</Text>}
            </>
        );
        const _content = (
            <>
                {this.state.register ? <View style={styles.textInputBox}>
                    <TextInput
                        style={styles.textInput}
                        placeholder={'请输入账号'}
                        onChangeText={this.handleLoginAccout}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder={'请输入密码'}
                        onChangeText={this.handleLoginPassword}
                        secureTextEntry={true}
                    />
                </View> : <View style={styles.textInputBox}>
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请输入账号'}
                            onChangeText={this.handleRegisterAccout}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请输入密码'}
                            onChangeText={this.handleRegisterPassword}
                            secureTextEntry={true}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={'请再次输入密码'}
                            onChangeText={this.handleRegisterNewPassword}
                            secureTextEntry={true}
                        />
                    </View>}
            </>
        );
        const _password = (
            <>
                {this.state.register ? <View style={styles.footerBox}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this._switch}
                    >
                        <Text>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this._forget}
                        style={styles.password}
                    >
                        <Text style={styles.passwordText}>忘记密码？</Text>
                    </TouchableOpacity>
                </View> : <TouchableOpacity
                    activeOpacity={1}
                    onPress={this._switchLogin}
                    style={styles.footerBox}>
                        <Text>登录</Text>
                    </TouchableOpacity>}
            </>
        );
        const _footerBtn = (
            <>
                {this.state.register ? <Button
                    style={styles.submitBox}
                    onPress={this._submit}
                    title='登录'
                /> : <Button
                        onPress={this._register}
                        title='注册'
                        style={styles.submitBox}
                    />}
                {_password}
            </>
        );

        return (
            <SafeAreaView style={styles.loginBox}>
                {renderTop}
                {_title}
                {_content}
                {_footerBtn}
            </SafeAreaView>
        )
    }
}

export default connect(({ register }) => ({
    register
}), dispatch => ({
    getRegister(url, method, data) {
        dispatch(actions.getRegister(url, method, data))
    }
}))(Login)

const styles = StyleSheet.create({
    loginBox: {
        flex: 1
    },
    loginTitle: {
        fontSize: px2dp(22),
        color: '#333',
        marginHorizontal: px2dp(16),
        marginVertical: px2dp(20)
    },
    textInputBox: {
        marginTop: px2dp(30),
        alignSelf: 'center',
        width: px2dp(335)
    },
    textInput: {
        backgroundColor: '#ddd',
        height: px2dp(30),
        marginBottom: px2dp(16),
        paddingLeft: px2dp(8),
        borderRadius: px2dp(4)
    },
    submitBox: {
        marginTop: px2dp(80),
        width: px2dp(335),
        alignSelf: 'center'
    },
    submitText: {
        color: '#fff',
        fontSize: px2dp(14),
        fontWeight: '600'
    },
    password: {
        // marginTop: px2dp(6),
        // width: px2dp(335),
        // alignSelf: 'center',
        // alignItems: 'flex-end',
    },
    passwordText: {
        color: '#333'
    },
    footerBox: {
        width: px2dp(335),
        marginTop: px2dp(6),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: px2dp(6),
        justifyContent: 'space-between'
    }
})
