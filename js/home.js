/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    TextInput,
    Button,
    ScrollView,
    Dimensions,
    ListView,
    FlatList,
    Alert,
    TouchableHighlight, StatusBar, Image,RefreshControl
} from 'react-native';


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2
});

const circleSize = 8;
const circleMargin = 5;



export default class home extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing:false,
            currentPage: 0,
            dataSource: ds.cloneWithRows([
                {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品1',
                    subTitle: '描述1'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品2',
                    subTitle: '描述2'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品3',
                    subTitle: '描述3'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品4',
                    subTitle: '描述4'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品5',
                    subTitle: '描述5'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品6',
                    subTitle: '描述6'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品7',
                    subTitle: '描述7'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品8',
                    subTitle: '描述8'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品9',
                    subTitle: '描述9'
                }, {
                    image: require('../images/product-image-01.jpg'),
                    title: '商品10',
                    subTitle: '描述10'
                }
            ]),
            advertisements: [
                {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511864568&di=bedd788f7c2c38cd0f055007fcb94803&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F011f4356d56e336ac7252ce6e85df4.jpg'},
                {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511864742&di=16d590c97dd165924438b33111bb3e6b&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01592157635bbc0000018c1baf7d9a.jpg%401280w_1l_2o_100sh.jpg'},
                {url: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1511864807&di=96671933dda5bd34effceb861a3aebf4&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01081f56df99e532f875520f396fd9.jpg'}
            ],
            advertisements2: [
                {image: require('../images/advertisement-image-01.jpg')},
                {image: require('../images/advertisement-image-02.jpg')},
                {image: require('../images/advertisement-image-03.jpg')}
            ],
            searchText: ''
        };
    }


    render() {

        const advertisementsCount = this.state.advertisements2.length;
        const indicatorWidth = circleSize * advertisementsCount + circleMargin * advertisementsCount * 2;
        const left = (Dimensions.get('window').width - indicatorWidth) / 2;

        return (
            <View style={styles.container}>
                <StatusBar backgroundColor={'blue'} barStyle={'default'}
                           networkActivityIndicatorVisible={true}></StatusBar>
                <View style={styles.searchbar}>
                    <TextInput style={styles.input} placeholder='搜索商品' onChangeText={(text) => {
                        this.setState({searchText: text});
                        console.log('输入的内容是  ' + this.state.searchText)
                    }}></TextInput>
                    <Button style={styles.button} title='搜索' color='red'
                            onPress={() => Alert.alert('搜索内容' + this.state.searchText, null, null)}></Button>
                </View>

                <View style={styles.advertisement}>
                    <ScrollView ref="scrollView" horizontal={true} showsHorizontalScrollIndicator={false}
                                pagingEnabled={true}>
                        {this.state.advertisements2.map((advertisement, index) => {
                            return (
                                <TouchableHighlight onPress={() => Alert.alert('你点了轮播图', null, null)}>
                                    <Image style={styles.advertisementContent}
                                           source={advertisement.image}></Image>
                                </TouchableHighlight>
                            );
                        })}
                    </ScrollView>
                    <View style={[styles.indicator, {left: left}]}>
                        {this.state.advertisements2.map((advertisement, index) => {
                            return (
                                <View
                                    style={(index === this.state.currentPage) ? styles.circleSelected : styles.circle}></View>
                            );
                        })}
                    </View>

                </View>

                <View style={styles.products}>
                    <ListView dataSource={this.state.dataSource} renderRow={this._renderRow}
                              showsVerticalScrollIndicator={false} refreshControl={this._renderRefreshControl()}></ListView>
                </View>
            </View>
        );
    }

    _renderRefreshControl(){
        return(
            <RefreshControl refreshing={this.state.isRefreshing} onRefresh={this._onRefresh} tintColor={"#FF0000"} title={'正在刷新数据，请稍后...'}
                            titleColor={'#0000FF'}>
            </RefreshControl>
        );
    }

    _onRefresh = () => {
        this.setState({isRefreshing:true});
        setTimeout(() =>{
            const products = Array.from(new Array(10)).map((value, index) => ({
                image:require('../images/product-image-01.jpg'),
                title: '新商品' + index,
                subTitle: '新商品描述' + index
            }));
            this.setState({isRefreshing:false, dataSource: ds.cloneWithRows(products)});
        }, 2000);
    }



    _renderRow = (rowDate, sectionID, rowID) => {
        return (
            <TouchableHighlight onPress={() => {
                this.props.navigation.navigate('mDetail',{name:'detail', productTitle:rowDate.title});
            }}>
                <View style={styles.row}>
                    <Image source={rowDate.image} style={styles.productImage}></Image>
                    <View style={styles.productText}>
                        <Text style={styles.productTitle}>{rowDate.title}</Text>
                        <Text style={styles.productSubTitle}>{rowDate.subTitle}</Text>
                    </View>
                </View>
            </TouchableHighlight>

        );
    }

    componentDidMount() {
        this._startTime();
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    _startTime() {
        this.interval = setInterval(() => {
            nextPage = this.state.currentPage + 1;
            if (nextPage >= 3) {
                nextPage = 0;
            }
            this.setState({currentPage: nextPage});
            const offSetX = nextPage * Dimensions.get('window').width;
            this.refs.scrollView.scrollResponderScrollTo({x: offSetX, y: 0, animated: true});
        }, 2000);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchbar: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        height: 40,
        flexDirection: 'row'
    },
    input: {
        flex: 1,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10
    },
    button: {
        flex: 1,
        backgroundColor: 'black'
    },
    advertisement: {
        height: 180,
    },
    advertisementContent: {
        width: Dimensions.get('window').width,
        height: 180
    },
    products: {
        flex: 1,
    },
    row: {
        height: 60,
        flexDirection: 'row',
        alignItems: 'center'
    },

    indicator: {
        position: 'absolute',
        top: 160,
        flexDirection: 'row'
    },

    circle: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'gray',
        marginHorizontal: circleMargin
    },

    circleSelected: {
        width: circleSize,
        height: circleSize,
        borderRadius: circleSize / 2,
        backgroundColor: 'white',
        marginHorizontal: circleMargin
    },

    productImage: {
        marginLeft: 10,
        width: 40,
        height: 40
    },

    productText: {
        flex: 1,
        flexDirection: 'column',
        margin: 10
    },
    productTitle: {
        flex: 3,
        fontSize: 16
    },
    productSubTitle: {
        flex: 2,
        fontSize: 14,
        color: 'gray'
    }

});
