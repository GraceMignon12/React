import React from 'react';
import {
  View,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import { connect } from 'react-redux';
import Button from '../../components/Button/ButtonComponent';
import { fetchNews, fetchNewsSuccess } from '../../actions/index';
import styles from './News.styles';
import NewsDetail from './NewsDetail';

import { createStackNavigator } from 'react-navigation';

class Home extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    _renderItem = ({item}) => {
        const {id} = item;
        console.log('renderItem',id);
        return (
            <TouchableOpacity onPress ={() => {
                this.props.navigation.navigate('NewsDetail', {
                    id
                })
            }}>
                <View style={styles.listItem}>
                    
                    <View style={styles.listItemCenter}>
                        <Text>{item.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    
    }

    componentDidMount() {
        this.props.fetchNews();
      }

    render() {
        const { news, fetchNews, loading } = this.props;
        // console.log('Render',fetchNews);

        return(
            <View style={{ flex: 1 }}>
                { loading && <ActivityIndicator/> }
                <ScrollView>
                    <FlatList 
                    data={news} 
                    renderItem={ this._renderItem } 
                    />
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news,
    loading: state.loading
});

const mapDispatchToProps = {
    fetchNews
};

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);
