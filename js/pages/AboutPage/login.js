import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet,SafeAreaView} from 'react-native'
import {px2dp} from '../../utils/px2dp'
import TopNavigationBar from '../../common/TopNavigationBar'
import {GoBack} from '../../utils/GoBack'

export default class Login extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const renderTopBar = (
            <TopNavigationBar
                statusBar={StatusBar}
                style={{ backgroundColor: "#FEFFFE" }}
                leftButton={GoBack(this.props)}
            />
        )
        return (
            <SafeAreaView style={styles.loginContianer}>
                {renderTopBar}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    loginContianer: {
        flex: 1
    }
})