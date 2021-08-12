import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

const styles = StyleSheet.create({
	container:{
		display: 'flex',
		//alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderStyle: 'solid',
		borderColor: '#bbb',
		margin: 7,
		padding: 10
		
	},
	factHolder: {
		margin: 10,
	    padding: 10,
	    backgroundColor: '#3a3f4a'
  	},
  	factFont:{
  		fontSize: Platform.OS === 'android'? 14:18,
  		color: 'rgb(230,230,230)',
  	},
  	dateFont:{
  		fontSize: Platform.OS === 'android'? 16:20,
  		color: 'rgb(230,230,230)',
  		alignItems: 'flex-start'
  	},
  	dateContainer:{
  		alignItems: 'center'
  	},
  	factContainer:{
  		alignItems: 'flex-start',
  		padding: '2%'
  	}

})

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
	constructor(props){
		super(props);
    	this.state = {	      	
	      	rawInfo: this.props.rawInfo,
      }
	}

	render(){		
		const events=this.state.rawInfo.data.Events;
		//console.log(factList)
		const eventList = events.map((i)=>
			<View style={styles.container} key={i.text}>

				<View style={styles.dateContainer}>
					<Text style={styles.dateFont}>{i.text.includes("&#8211;")? i.text.split(" &#8211;")[0] : i.text.split(" –")[0]}</Text>
				</View>	

				{/*<ColoredLine/>*/}

				<View style={styles.factContainer}>
					<Text style={styles.factFont}>{i.text.includes("&#8211;")? i.text.split("&#8211; ")[1] : i.text.split("– ")[1]}</Text>
				</View>		

			</View>			
		)

		return(			   			
			<View style={styles.factHolder}>
				{eventList}
			</View>
		)
	}
}

export default FactHolder;