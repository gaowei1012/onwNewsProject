import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native'
import { px2dp } from '../../utils/px2dp'
import { width } from '../../utils/px2dp'

export default class TabBar extends React.Component {
    static defaultPorps = {
        data: [],
        index: -1,
        id: null,
        // name: null,
        onChange: () => { }
    }
    constructor(porps) {
        super(porps)
        this.state = {
            index: this.props.index,
            id: this.props.id,
            type: null
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
                        onPress={() => this.setInex(index, item.id, item.type)}
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
                this.setInex(nextProps.index, nextProps.id, nextProps.type, false);
            }, 200)
        }
    }

    setLout(layout, index) {
        this.laout_list[index] = layout;
        this.scrollW += layout.width;
    }

    setInex(index, id, type, bl = true) {
        this.setState({ index, id, type});
        if (!this.scroll) return;
        let layout = this.laout_list[index];
        let rx = width / 2;
        let sx = layout.x - rx + layout.width / 2;
        if (sx < 0) sx = 0;
        sx < this.scrollW - width && this.scroll.scrollTo({ x: sx, animated: bl });
        sx >= this.scrollW - width && this.scroll.scrollToEnd({ animated: bl });
        this.props.onChange && this.props.onChange(index, id, type);
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
        paddingHorizontal: px2dp(18),
        paddingTop: px2dp(2),
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: px2dp(18),
        marginTop: Platform.OS === 'ios' ? 0 : px2dp(8), // fix android
    },
    item: {
        fontSize: px2dp(14),
        color: "#333",
    },
    active: {
        fontSize: px2dp(14),
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