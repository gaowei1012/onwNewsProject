import React from 'react'
import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'

export default class Setting extends React.PureComponent {
    render() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        const _renderTop = (
            <TopNavigationBar
                title='设置'
                statusBar={StatusBar}
                style={{ backgroundColor: "#FEFFFE" }}
                leftButton={GoBack(this.props)}
            />
        );
        return (
            <SafeAreaView style={styles.setting}>
                {_renderTop}
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    setting: {
        flex: 1
    }
})