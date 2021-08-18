import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

import {factHolderStyles} from './styles'

class FactHolder extends Component {	

	render(){

		var facts;
		var factList;

		try{
			if(this.props.factType=='event'){
			facts=this.props.rawInfo.data.Events;
			}
			else if(this.props.factType=='birth'){
				facts=this.props.rawInfo.data.Births;
			}
			else{
				facts=this.props.rawInfo.data.Deaths;
			}

			factList = facts.map((i)=>
				<View style={factHolderStyles.container} key={i.text}>

					<View style={factHolderStyles.dateContainer}>
						<Text style={factHolderStyles.dateFont}>{i.text.includes("&#8211;")? i.text.split(" &#8211;")[0] : i.text.split(" –")[0]}</Text>
					</View>	

					{/*<ColoredLine/>*/}

					<View style={factHolderStyles.factContainer}>
						<Text style={factHolderStyles.factFont}>{i.text.includes("&#8211;")? i.text.split("&#8211; ")[1] : i.text.split("– ")[1]}</Text>
					</View>	
				</View>			
			)
		}catch(err){
			factList = <View><Text style={factHolderStyles.errorText}>Too many requests, try again after 30 seconds</Text></View>
		}

		return(			   			
			<View style={factHolderStyles.factHolder}>
				{factList}
			</View>
		)
	}
}

export default FactHolder;