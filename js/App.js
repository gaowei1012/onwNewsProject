import React, {useEffect} from 'react'
import store from './redux/store'
import {YellowBox} from 'react-native'
import AppNavigation from './navigation/AppNavigation';
import {Provider} from 'react-redux'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigation/>
            </Provider>
        )
    }
}
