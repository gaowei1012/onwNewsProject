import React from 'react'
import RootSilblings from 'react-native-root-siblings'
import { View, StyleSheet, ActivityIndicator } from 'react-native'

import {width, px2dp} from '../utils/px2dp'

let sibling = undefined

const Loading = {
    show: () => {
        sibling = new RootSilblings(
            <View style={styles.maskStyle}>
                <View style={styles.backViewStyle}>
                    <ActivityIndicator size='large' color='white' />
                </View>
            </View>
        )
    },
    hidden: () => {
        if (sibling instanceof RootSilblings) {
            sibling.destroy()
        }
    }
}

export {
    Loading
}

const styles = StyleSheet.create({
    maskStyle: {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: width,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backViewStyle: {
        backgroundColor: '#222',
        width: px2dp(120),
        height: px2dp(100),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    }
})
