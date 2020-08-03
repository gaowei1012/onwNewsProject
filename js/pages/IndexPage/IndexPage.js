import React, {useState, useEffect} from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import actions from './redux/action'
import { constant } from '../../expand/api'

const IndexPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getNewsData('GET', constant.getNewList))
    })

    const list = useSelector(state => state.news)

    console.log('list', list)

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
