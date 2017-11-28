import React, {Component} from 'react';
import {View, StyleSheet, WebView} from 'react-native';

export default class TestWebView extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <WebView source={{uri: 'https://m.baidu.com'}} style={styles.webView}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


});