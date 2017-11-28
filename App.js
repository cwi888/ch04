/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './js/home';
import Detail from './js/detail';
import Main from './main';
import More from './js/more';
import TestDemo from './js/TestWebView'

const AppNavigator = StackNavigator({
    Main:{
        screen: Main,
        navigationOptions: {
            header: null,
        },
    },
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    mTest: {
        screen: TestDemo,
        navigationOptions: {
            header: null,
        },
    },
    More:{
        screen: More,
        navigationOptions: {
            header: null,
        },
    },
    mDetail: {
        screen: Detail,
        navigationOptions: {
            headerBackTitle:true

        },

    }
});

export default class App extends Component<{}> {

    render() {
        return (
           <AppNavigator ref={nav => {this.navigator = nav;}} />
        );
    }
}








