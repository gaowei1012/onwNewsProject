import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'

const IndexPage = () => {
    return (
        <SafeAreaView style={styles.indexContainer}>
            <Text>index  page</Text>
        </SafeAreaView>
    )
}

export default IndexPage


const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    }
})
