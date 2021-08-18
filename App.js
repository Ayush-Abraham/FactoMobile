import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import Constants from 'expo-constants';

import Navbar from './Navbar';
import FactHolder from './FactHolder'

import {mainStyles} from './styles'

const getInfo = async (month,date) => {
  var url = 'https://apizencorsanywhere.herokuapp.com/https://apizen.date/api/'+month+'/'+date

  const response = await fetch(url,{
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin:null,
    },
  })
  const body = await response.json(); 
  return body;
};

function currentDate(){
    var today = new Date();
    var date = [today.getDate(),today.getMonth()+1];
    return date
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,  
      data:'testing'
    };   

    const date=currentDate()

    getInfo(date[1],date[0]).then(res=>{  
      this.setState({
        loading:false,
        factType: 'event',
        rawInfo: res,
      });
    }).catch(err=>{
      console.log('error is this\n\n'+err)
    })
  }

  handleCallback = (newFactType) =>{
    this.setState({
      loading: true,
      factType: newFactType,
    })

    const date=currentDate()
    getInfo(date[1],date[0]).then(res=>{  
      this.setState({
        loading:false,
        factType: newFactType,
        rawInfo: res,
      });
    }).catch(err=>{
      console.log('error is this\n\n'+err)
    })

  }

  render(){
    let content

    if(this.state.loading){
      content = <View style={mainStyles.container}><Text style={mainStyles.loadingText}>Loading...</Text></View>
    }
    else{
      content = <FactHolder rawInfo={this.state.rawInfo} factType={this.state.factType}/>;   
    }

    return (    
      <View style={mainStyles.container}>
      <StatusBar/>
        <Navbar parentCallback={this.handleCallback}/>  
        <ScrollView>
          <View>
            {content}
          </View>   
        </ScrollView>  
      </View>    
    );
  }
}  

export default App;

/*  
    App icon made by MONKIK   
    https://www.flaticon.com/authors/monkik 
*/