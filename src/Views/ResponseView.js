import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ResponseView({navigation,route}){
    const {photo} = route.params ;
    const pic =  JSON.stringify(photo).slice(8,JSON.stringify(photo).length -2) ;
    console.log(pic);
    return(
        <View style={styles.Container}>
                <View style={{marginBottom:40}}>
                    <Image source={{uri: pic}} style={{width:300, height:300}}/>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('MoreResponse')}>
                    <View style={styles.UploadButton}>
                        <Text style={styles.TextButton}>Ver más resultados</Text>
                    </View>
                </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
        
    )
}
export default ResponseView;
const styles= StyleSheet.create({
    Container:{
        backgroundColor: 'red ;',
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center' 

    },
    UploadContainer:{
        height:300,
        width:300,
        justifyContent: 'center',
        backgroundColor: "#DDDDDD",
        marginBottom:40,
    },
    Text:{
        textAlign:'center',
        fontSize:18,
    },
    UploadButton:{
        height:50,
        justifyContent: 'center',
        paddingLeft:10,
        paddingRight:10,
        borderRadius:10,
        backgroundColor:'#E94057'
    },
    TextButton:{
        fontSize:16,
        color:'#ffff',
        textAlign:'center'
    }
    
})