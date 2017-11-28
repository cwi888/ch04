import React, {Component} from 'react';
import Home from './js/home';
import More from './js/more';
import {TabBarIOS} from 'react-native';

export default class main extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
          selectedTab: 'home'
      };
    }
    render(){
        return(
            <TabBarIOS unselectedTintColor='gray' tintColor='white' barTintColor='orange'>
                <TabBarIOS.Item title='首页' icon={require('./images/icon-home.png')} selected={this.state.selectedTab === 'home'}
                                onPress={() => {this.setState({selectedTab:'home'});
                                }}>
                    <Home navigation = {this.props.navigation}/>
                </TabBarIOS.Item>

                <TabBarIOS.Item systemIcon='more' badge={2} selected={this.state.selectedTab === 'more'}
                                onPress={() =>{
                                    this.setState({selectedTab: 'more'});
                                }}>
                    <More navigation = {this.props.navigation}/>
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
}