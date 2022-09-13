import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TouchableHighlight,Image,Button,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {loadImageFromGallery} from '../ImagePick' ;
import * as Clipboard from 'expo-clipboard';
const photo = '../src/gallery.png';

function HomeView({navigation}){
    const clip = 'im a text 4';
    const [visibleButton, setButtonVisible] = React.useState(false);
    const [pic, setPic]= React.useState(photo);

    const [copiedText, setCopiedText] = React.useState('');

    const copyToClipboard = async () => {
      await Clipboard.setStringAsync(clip);
      };
  
    const fetchCopiedText = async () => {
      const text = await Clipboard.getStringAsync();
      setCopiedText(text);
    };
    const setVis=() => {
        selectPhoto();
    }
    const selectPhoto = async() =>{
        const result = await loadImageFromGallery([1,1]);
        if(result.status){
            setPic(result.image) ;
            setButtonVisible(true);
        }
    }
   
    return(
        <View style={styles.Container}>
            <Text style={{justifyContent: 'center',fontSize:16, textAlign: 'center',marginBottom: 20}}> Toca el siguiente cuadro para seleccionar una imágen Vuelve a hacerlo para seleccionar otra.</Text>
                <TouchableHighlight onPress={setVis} underlayColor="#DDDDDD"style={styles.UploadContainer}>
                            <View>
                                <Image source={{uri: pic}} style={{width:300, height:300}}/>
                            </View>
                            
                </TouchableHighlight>
              {
                visibleButton &&(
                    <TouchableOpacity onPress={()=>navigation.navigate('Response',{photo:{pic}})}>
                            <View style={styles.UploadButton}>
                                <Text style={styles.TextButton}>Realizar busqueda</Text>
                            </View>
                        </TouchableOpacity>

                )
              }
                <TouchableOpacity onPress={copyToClipboard}>
                    <Text>{clip}</Text>
                </TouchableOpacity>
                <Button title="View copied text" onPress={fetchCopiedText} />
               
                <Text style={styles.copiedText}>{copiedText}</Text>   
               
                
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
    },
    Boton:{
        borderRadius:10
        
    }
    
})