import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import { fetchDetail } from '../../actions/index';
import styles from './News.styles';


class NewsDetail extends React.Component {
 
    static navigationOptions = {
        title: 'NewsDetail',
    };
    componentDidMount() {
        // console.log('Child value:',  this.props.navigation.state.params.id);
        this.props.fetchDetail(this.props.navigation.state.params.id);
      }

      _renderItem = ({item}) => {
        const {url} = item;
        return (
            <TouchableOpacity onPress ={() => {
                this.props.navigation.navigate('NewsWebView', {
                    url
                })
            }}>
                <View style={styles.listItem}>
                <View style={styles.listItemLeft}>
                    <Image
                        style={styles.listItemImage}
                        source={{uri: item.urlToImage}} />
                </View>
                <View style={styles.listItemRight}>
                    <Text>{item.title}</Text>
                    <Text>{item.publishedAt}</Text>
                </View>
            </View>
         </TouchableOpacity>   
        )
    }


    render() {
    
        const { newsDetail, fetchDetail } = this.props;
        const { state } = this.props.navigation;
        var title = state.params.id;
        
        console.log('navigation props', title);
        return(
            <View>
                <ScrollView>
                    <FlatList 
                        data={newsDetail} 
                        renderItem={ this._renderItem } 
                    />
                </ScrollView>

            </View>

        ) 
    }
}

const mapStateToProps = (state) => ({
    newsDetail: state.newsDetail,
    loading: state.loading
});

const mapDispatchToProps = {
    fetchDetail
};

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);

