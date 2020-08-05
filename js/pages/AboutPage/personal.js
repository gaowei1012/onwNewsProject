import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import {GoBack} from '../../utils/GoBack'

export default class Personal extends React.PureComponent {
    _renderTopBar() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        return <TopNavigationBar
            title='关于我们'
            statusBar={StatusBar}
            style={{ backgroundColor: "#FEFFFE" }}
            leftButton={GoBack(this.props)}
        />
    }
    render() {
        return (
            <SafeAreaView style={styles.personalContainer}>
                {this._renderTopBar()}
                <Text>个人中心</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    personalContainer: {
        flex: 1
    }
})