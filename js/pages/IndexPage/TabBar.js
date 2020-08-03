import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { width } from '../../utils/px2dp'

export default class TabBar extends React.Component {
    static defaultPorps = {
        data: [],
        index: -1,
        onChange: () => { }
    }
    constructor(porps) {
        super(porps)
        this.state = {
            index: this.props.index
        }
        this.scroll = null;
        this.laout_list = [];
        this.scrollW = 0;
    }
    render() {
        return (<View>
            <ScrollView
                ref={e => this.scroll = e}
                horizontal directionalLockEnabled
                showsHorizontalScrollIndicator={false}
                snapToAlignment='center'
            >
                {this.props.data.map((item, index) =>
                    <TouchableOpacity
                        key={item.id}
                        style={styles.itemBtn}
                        onPress={() => this.setInex(index)}
                        activeOpacity={1}
                        onLayout={e => this.setLout(e.nativeEvent.layout, index)}
                    >
                        <Text style={[styles.item, this.state.index === index ? styles.active : '']}>{item.name}</Text>
                        <View style={[styles.line, this.state.index === index ? styles.active2 : '']} />
                    </TouchableOpacity>
                )}
            </ScrollView>
        </View>)
    }

    scroll = null;
    laout_list = [];
    scrollW = 0;
    shouldUpdate = true;
    shouldComponentUpdate() {
        if (!this.shouldUpdate) return false;
        return !(this.shouldUpdate = false);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.index != this.props.index) {
            this.setState({ index: nextProps.index });
            setTimeout(() => {
                this.setInex(nextProps.index, false);
            }, 200)
        }
    }

    setLout(layout, index) {
        this.laout_list[index] = layout;
        this.scrollW += layout.width;
    }

    setInex(index, bl = true) {
        this.setState({ index });
        if (!this.scroll) return;
        let layout = this.laout_list[index];
        let rx = width / 2;
        let sx = layout.x - rx + layout.width / 2;
        if (sx < 0) sx = 0;
        sx < this.scrollW - width && this.scroll.scrollTo({ x: sx, animated: bl });
        sx >= this.scrollW - width && this.scroll.scrollToEnd({ animated: bl });
        this.props.onChange && this.props.onChange(index);
        this.shouldUpdate = true;
    }
}

const styles = StyleSheet.create({
    tab: {
        backgroundColor: '#fbfafc',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        borderBottomColor: '#efefef',
        borderBottomWidth: px2dp(1),
        height: px2dp(40)
    },
    itemBtn: {
        paddingHorizontal: px2dp(12),
        paddingTop: px2dp(2),
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center"
    },
    item: {
        fontSize: px2dp(16),
        color: "#858385",
    },
    active: {
        fontSize: px2dp(16),
        color: "#d0648f"
    },
    line: {
        width: px2dp(16),
        height: px2dp(2),
        backgroundColor: "#fbfafc",
        marginTop: px2dp(5),
        marginBottom: px2dp(2),
        borderRadius: px2dp(6)
    },
    active2: {
        backgroundColor: "#d0648f"
    },
    sortimg: {
        width: px2dp(55),
        height: px2dp(40),
    }
})