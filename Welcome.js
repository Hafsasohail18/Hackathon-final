import React from 'react';
import {
	StyleSheet,
	Text,
	View,
} from 'react-native';
import {Button,Icon} from 'native-base'



//...
export default function Welcome({navigation}) {

	return(
		<View style={styles.container}>
        <View style={{ alignItems: "center" }}>
            </View>
        
            <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('Login')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                        Student
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
               
                </View>
                
            <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('CompanyLogin')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                Company
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
               
                </View>
                <View style={styles.buttonPlaceholder}>
                {/* //..UPDATE BUTTON */}
                <Button
                onPress={()=>navigation.navigate('Login')}
                 style={styles.login}>
                <Text style={styles.textstyle}>
                Admin
                    </Text>
                </Button>
                {/* //..UPDATE BUTTON */}
               
                </View>
            </View>
      
        
	);
}

const styles = StyleSheet.create({
	container: {
        flexDirection:'column',
        marginHorizontal:70,
        alignSelf:'center',
        marginVertical:150,
        marginTop: 100,
        
	},
	header1: {
		// marginTop: '0%',
		fontSize:15,
        color: 'red',
    },
    header2: {
        position:'relative',
        textAlign:'center',
		fontSize: 20,
		color: 'red',
		
    },
	buttonPlaceholder: {
        flexDirection: 'column',
        flex:1,
        marginTop:0,

	},
	login: {
        padding:20,
        borderRadius:20,
        marginBottom:10,
        backgroundColor:'#ff9579',
        justifyContent:'center',
        

    },
    textstyle:{
            color:'white',
            fontSize:45,
            textAlign:'center'
    }
    
});