import { StyleSheet, Platform} from 'react-native';

const mainStyles = StyleSheet.create({
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
  },
  loadingText:{
    color: '#f2f2f2',
    fontWeight: 'bold',
    fontSize: 20
  }
}); 

const navStyles = StyleSheet.create({
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
        textAlign: 'center',
        color: '#f2f2f2',
        fontWeight: 'bold',
        fontSize: Platform.OS === 'android'? 15:23,
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: Platform.OS === 'android'? 15:23,
        color: '#f2f2f2',
    }

})

const factHolderStyles = StyleSheet.create({
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
  	},
    errorText:{
        color: 'yellow',
        fontWeight: 'bold',
        fontSize: 20
    }
})

export {mainStyles, navStyles, factHolderStyles}