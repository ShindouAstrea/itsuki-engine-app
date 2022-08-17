import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {loadImageFromGallery} from './ImagePick' ;

function HomeView({navigation}){
    const [visibleButton, setButtonVisible] = React.useState(false);
    const setVis=() => {
        selectPhoto();
        setButtonVisible(!visibleButton);
    }
    const selectPhoto = async() =>{
        const result = await loadImageFromGallery([1,1]);
        console.log(result) ;
    }
    return(
        <View style={styles.Container}>
                <TouchableHighlight onPress={setVis} underlayColor="#DDDDDD"style={styles.UploadContainer}>
                            <Text style={styles.Text}>Subir Foto</Text>
                </TouchableHighlight>
              {
                visibleButton &&(
                    <TouchableOpacity onPress={()=>navigation.navigate('Response')}>
                            <View style={styles.UploadButton}>
                                <Text style={styles.TextButton}>Realizar busqueda</Text>
                            </View>
                        </TouchableOpacity>

                )
              }
                        
               
                
        <StatusBar style="auto" />
        </View>
        
    )
}
export default HomeView;
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