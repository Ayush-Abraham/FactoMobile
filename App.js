import React, {Component} from 'react';
import { StyleSheet, Text, View, StatusBar, ScrollView} from 'react-native';
import Constants from 'expo-constants';
//import fetch from 'node-fetch'

import Navbar from './Navbar';
import FactHolder from './FactHolder'


const getInfo = async (month,date) => {
  //var url = 'https://cors-anywhere.herokuapp.com/https://apizen.date/api/'+month+'/'+date+'/';
  //var url = 'https://cors-anywhere.herokuapp.com/https://apizen.date/api/1/1'
  var url = 'https://apizencorsanywhere.herokuapp.com/https://apizen.date/api/'+month+'/'+date
  //var url = 'https://apizen.date/api/'+month+'/'+date

  const response = await fetch(url,{
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Origin:null,
    },
  })
  const body = await response.json(); 
  //console.log(typeof(body))
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
    };

    const date=currentDate()
    //console.log(date)

    getInfo(date[1],date[0]).then(res=>{  
      this.setState({
        loading:false,
        rawInfo: res,
      });
    }).catch(err=>{
      console.log('error is this\n\n'+err)
    })
  }

  render(){
    let content

    if(this.state.loading){
      content = <Text>Loading...</Text>
    }
    else{
      content = <FactHolder rawInfo={this.state.rawInfo}/>;   
    }

    return (    
      <View style={styles.container}>
      <StatusBar/>
        <Navbar/>  
        <ScrollView>
          <View>
            {content}
          </View>   
        </ScrollView>  
      </View>    
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#3a3f4a',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,

  },
  scrollView: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
    backgroundColor: 'pink',    
  }
}); 

export default App;