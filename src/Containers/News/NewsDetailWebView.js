import React from 'react';
import {
  WebView
} from 'react-native';


export default class NewsDetailWebView extends React.Component {
 
    static navigationOptions = {
        title: 'NewsWebView',
    };


    render() {
    debugger;
       
        return(
           <WebView
            source={{uri: `${this.props.navigation.state.params.url}`}}
            />
        )
        
    }
}



