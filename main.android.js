import React, {Component} from 'react';
import Home from './js/home';
import More from './js/more';
import {StyleSheet, View, Text, ViewPagerAndroid} from 'react-native'

export default class main extends React.Component {
    render(){
        return(
            <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
               <View styles={styles.pagesty}>
                   <Home navigation = {this.props.navigation}/>
               </View>
                <View styles={styles.pagesty}>
                    <More navigation = {this.props.navigation}/>
                </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({

    viewPager:{
        flex:1
    },

    pageStyle:{

    }
});