import React, {Component} from 'react';
import {View,StyleSheet,Slider, Text} from 'react-native';

export default class TestSlide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sliderValue: 5
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <Slider style={styles.slide} minimumValue={0} maximumValue={10} step={1} maximumTrackTintColor='red'
                        minimumTrackTintColor='blue' value={this.state.sliderValue} onValueChange={(value) => this.setState({sliderValue:value})}>
                </Slider>
                <Text>Slider值:{this.state.sliderValue}</Text>
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