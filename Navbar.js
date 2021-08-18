import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, Picker} from 'react-native';

import {navStyles} from './styles'

function currentDate(){
    var today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = today.getDate()+' '+months[today.getMonth()];
    return date
}

class Navbar extends Component { 

     constructor(props) {
        super(props);
        this.state = {
            chosenIndex:0,
            language:''
        };
    }   

    render(){         
   
        return(
                <View style={navStyles.header}>
                    <View style={navStyles.headerDate}>
                        <Text style={navStyles.headerText}>{currentDate()}</Text>
                    </View>
                    <View style={navStyles.headerTitle}>

                    {/*this.props.parentCallback(this.state.language)*/}

                        <Picker style={navStyles.headerTitle} 
                        selectedValue={this.state.language}  
                        onValueChange={(itemValue, itemPosition) =>  {
                            this.setState({
                                language: itemValue, choosenIndex: itemPosition
                            })
                            this.props.parentCallback(itemValue)
                        }}  
                        >  
                            <Picker.Item label={Platform.OS === 'android'? "Notable events":"Notable events on this day"} value="event" />                
                            <Picker.Item label={Platform.OS === 'android'? "Notable birthdays":"Notable birthdays on this day"} value="birth" />  
                            <Picker.Item label={Platform.OS === 'android'? "Notable deaths":"Notable deaths on this day"} value="death" />  
                         </Picker> 

                    </View>
                </View>
            );
    }
}

export default Navbar;