import React from 'react'
import {View,Text,StyleSheet,SafeAreaView} from 'react-native'

export default class Setting extends React.PureComponent {
    render() {
        return (
            <SafeAreaView style={styles.setting}>
                <Text>设置</Text>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    setting: {
        flex: 1
    }
})