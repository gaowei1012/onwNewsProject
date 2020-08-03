import React, {useState, useEffect, useCallback} from 'react'
import {View,StyleSheet,Text,SafeAreaView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import actions from './redux/action'
import { constant } from '../../expand/api'
import TabBar from './TabBar'

const IndexPage = () => {

    const data = [
        {id: 1, name: '头条'},
        {id: 2, name: '社会'},
        {id: 3, name: '国内'},
        {id: 4, name: '国际'},
        {id: 5, name: '娱乐'},
        {id: 5, name: '体育'},
        {id: 5, name: '军事'},
        {id: 5, name: '科技'},
        {id: 5, name: '财经'},
        {id: 5, name: '时尚'}
    ];

    const [index, setIndex] = useState(0)
    const [tabs] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        const url = `${constant.getNewList}?type=top&key=b76916adef25551ed9eb76af5a218d6f`
        dispatch(actions.getNewsData('GET', url))
    }, [])

    const onChangeTab = useCallback((index, id) => {

    })

    const list = useSelector(state => state.news)

    if (!list) {
        return <View/>
    }

    console.log('list', list)

    return (
        <SafeAreaView style={styles.indexContainer}>
            <TabBar
                ref={e => this.tabs = e}
                index={index}
                data={data}
                onChange={(index, id) => onChangeTab(index, id)}
            />
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
