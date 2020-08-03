import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'

const HotPage = () => {
    return (
        <SafeAreaView style={styles.indexContainer}>
            <Text>hot  page</Text>
        </SafeAreaView>
    )
}

export default HotPage


const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    }
})
