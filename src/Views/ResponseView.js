import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { fileToBlob } from '../ImagePick';

function ResponseView({navigation,route}){
    const {photo} = route.params ;
    const body = new FormData();
    const pic =  JSON.stringify(photo).slice(8,JSON.stringify(photo).length -2) ;
  
    React.useEffect(()=>{
        const searchAnime= async() =>{
            const picToUpload =  await fileToBlob(pic);
            console.log(picToUpload);
            body.append("image", picToUpload);
            await fetch("https://api.trace.moe/search",{
            method: 'POST',
            body: body,
           })
           .then((response)=>response.json())
           .then((response)=>console.log(JSON.stringify(response)))
           .catch((error)=>console.log( `error : ${error}`))
        }
        searchAnime() ;
    },[])
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