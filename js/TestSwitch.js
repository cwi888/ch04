import React, {Component} from 'react';
import {View, StyleSheet, Switch} from 'react-native';

export default class TestSwitch extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            isOn: false
        }
    }
    render() {
        return (
          <View style={styles.container}>
              <Switch onTintColor='blue' thumbTintColor='green' tintColor='black' value={this.state.isOn === true}
                      onValueChange={() => this.setState({isOn: !this.state.isOn})}>
              </Switch>
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

    slide:{
        width: 200,
    }

});