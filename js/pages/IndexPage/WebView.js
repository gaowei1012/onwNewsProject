import React from 'react'
import { View, SafeAreaView, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'
import TopNavigationBar from '../../common/TopNavigationBar'
import { GoBack } from '../../utils/GoBack'


export default class OneWebView extends React.PureComponent {
    state = {
        url: null
    }
    componentDidMount() {
        const {url} = this.props.navigation.state.params;
        this.setState({url})
    }
    _renderTopBar() {
        const StatusBar = {
            backgroundColor: "#ffffff",
            barStyle: "dark-content",
        };
        return <TopNavigationBar
            title='详情'
            statusBar={StatusBar}
            style={{ backgroundColor: "#fff" }}
            leftButton={GoBack(this.props)}
        />
    }
    render() {
        return <SafeAreaView style={styles.webView}>
            {this._renderTopBar()}
            <WebView source={{ uri: this.state.url }} />
        </SafeAreaView>
    }
}

const styles = StyleSheet.create({
    webView: {
        flex: 1
    }
})