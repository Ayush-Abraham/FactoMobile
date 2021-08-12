import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform} from 'react-native';

function currentDate(){
    var today = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var date = today.getDate()+' '+months[today.getMonth()];
    return date
}

const styles = StyleSheet.create({
    header:{
        width: '100%' ,
        height: Platform.OS === 'android'? '10%':60,
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
    },
    headerDate:{
        backgroundColor: '#04AA6D',
        width: Platform.OS === 'android'? '25%':'15%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: Platform.OS === 'android'? '3%':0
       
    },
    headerTitle:{
        backgroundColor: '#333',
        width: Platform.OS === 'android'? '75%':'85%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText:{
        fontWeight: 'bold',
        fontSize: Platform.OS === 'android'? 15:23,
        color: '#f2f2f2',
    }

})

class Navbar extends Component {

    render(){
        //console.log(this.props.testdata)

        return(
                <View style={styles.header}>
                    <View style={styles.headerDate}>
                        <Text style={styles.headerText}>{currentDate()}</Text>
                    </View>
                    <View style={styles.headerTitle}>
                        <Text style={styles.headerText}>Notable events on this day</Text>
                    </View>
                </View>
            );
    }
}

export default Navbar;