import React, {Component} from 'react';
import {View} from 'react-native';

export default class more extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            language: 'java'
        }
    }

    render(){
        return(
            this.props.navigation.navigate('mTest')
        );
    }

}
