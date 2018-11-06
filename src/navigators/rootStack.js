import {createStackNavigator} from 'react-navigation';
import News from '../Containers/News/News';
import NewsDetail from '../Containers/News/NewsDetail';
import NewsWebView from '../Containers/News/NewsDetailWebView';


const RootStack = createStackNavigator({
    Home:{
        screen : News
    },
    NewsDetail:{
        screen:NewsDetail
    },
    NewsWebView:{
        screen:NewsWebView
    }
},{
    initialRouteName : 'Home',
    navigationOptions: {
        headerStyle: {
            backgroundColor :'#f4511e'
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
            fontWeight:'bold'
        }
    }
   
}
);

export default RootStack;