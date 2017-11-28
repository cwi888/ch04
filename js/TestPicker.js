import React, {Component} from 'react';
import {View, Text, StyleSheet,ActivityIndicator, Dimensions, Picker} from 'react-native';

export default class TestPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            language: 'java'
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Picker style={styles.picker} selectedValue={this.state.language} onValueChange={(lang) => this.setState({language:lang})}>
                    <Picker.Item label='java' value='java'/>
                    <Picker.Item label='JavaScropt' value='javaScripe'/>
                </Picker>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    picker:{
        width: 200,
        height: 200
    }

});