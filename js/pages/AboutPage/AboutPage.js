import React from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'

const AboutPage = () => {
    return (
        <SafeAreaView style={styles.indexContainer}>
            <Text>about  page</Text>
        </SafeAreaView>
    )
}

export default AboutPage


const styles = StyleSheet.create({
    indexContainer: {
        flex: 1
    }
})
