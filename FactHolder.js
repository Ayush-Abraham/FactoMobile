import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

import {factHolderStyles} from './styles'

/*const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: '#bbb',
            backgroundColor: color,
            width: '95%'
        }}
    />
);*/

class FactHolder extends Component {	

	render(){

		//console.log('given value is '+this.props.factType)

		var facts;

		if(this.props.factType=='event'){
			facts=this.props.rawInfo.data.Events;
		}
		else if(this.props.factType=='birth'){
			facts=this.props.rawInfo.data.Births;
		}
		else{
			facts=this.props.rawInfo.data.Deaths;
		}		

		const factList = facts.map((i)=>
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

		return(			   			
			<View style={factHolderStyles.factHolder}>
				{factList}
			</View>
		)
	}
}

export default FactHolder;