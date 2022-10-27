import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TouchableHighlight,Image,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {loadImageFromGallery,toFirebase} from '../ImagePick' ;
import LoadingComponent from '../LoadingComponent';

//firebaseConfig
import firebaseConfig from '../../database/firebaseConfig.tsx';
import {initializeApp} from 'firebase/app';
import {connectStorageEmulator, getDownloadURL, getStorage,ref} from 'firebase/storage';
//----------------------------------------------------------------
initializeApp(firebaseConfig);
const storage = getStorage();

function HomeView({navigation}){

    const [visibleButton, setButtonVisible] = React.useState(false);
    const [pic, setPic]= React.useState();
    const [flag,setFlag] = React.useState(false) ;
    const [resultado,setResultado] = React.useState([]);
    const [ isLoading, setIsLoading] = React.useState(false);
    const [link,setLink]= React.useState({});
    const saveNames=(object) => {
        
        let arrayResultado = object;
        setResultado(arrayResultado["result"]);
 
        }
        
    const verResultado =() => {
       
    }
               
    const searchAnime= () =>{
        setIsLoading(true);
        const linkConverted = link ;
        fetch(
            `https://api.trace.moe/search?url=${encodeURIComponent(linkConverted)}`)
        .then((response)=> {
            return response.json()
        })
        .then(
            (result)=>{
                setIsLoading(false);
                saveNames(result);  
            }
        )
        .catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
             // ADD THIS THROW error
              throw error;
        })
    };
    const setVista=() => {
        selectPhoto();
    }
    const selectPhoto = async() =>{
        const result = await loadImageFromGallery([1,1]);
        if(result.status){
            setPic(result.image) ;
            setButtonVisible(true);
        }
    }
    async function uploadFirebase(){
        mensaje();
        setFlag(true);
      const uploadAndgetNameFile = await toFirebase(pic) ;
      const reference = ref(storage,`/${uploadAndgetNameFile}`);
      await getDownloadURL(reference)
      .then((resultado)=>{
        setLink(resultado);
        verResultado();
        searchAnime();
        console.log(link)}
        )
        .catch(error => console.log(error));
      
      
    }
    function mensaje(){
        return(
        <View style={{alignItems: 'center'}}>
        {
             Alert.alert(
                "Aviso",
                "Si el botón de Ver Resultado no carga, toca nuevamente  el botón de realizar búsqueda",
                [
                  { text: "Entendido"}
                ]
              )
        }
    </View>
        )
    };
    return(
        <View style={styles.Container}>
                    {
                        pic ?
                        (
                            <>
                                <Text style={styles.Text}>Toca nuevamente para cambiar la imágen.</Text>
                                <TouchableHighlight onPress={setVista} underlayColor="#DDDDDD"style={styles.UploadContainer}>
                                    <View >
                                        <Image source={{uri:pic}} style={{width:350, height:350}}/>
                                    </View>
                                </TouchableHighlight>
                               
                            </>
                           
                            ):
                        (
                            <>
                            <Text style={styles.Text}>Toca el siguiente cuadro para seleccionar una imágen.</Text>
                            <TouchableHighlight onPress={setVista} underlayColor="#DDDDDD"style={styles.UploadContainer}>
                                <View >
                                    <Image source={require('../../../assets/picture.png')} style={{width:350, height:350}}/>
                                </View>
                            </TouchableHighlight>
                                
                            </>
                            
                            )
                    }
          {
            isLoading ? (
                <>
                    <LoadingComponent />
                    
                </>
                
            ) : (
               (visibleButton && pic ) &&(
                <>
                <TouchableOpacity onPress={uploadFirebase}>
                <View style={styles.UploadButton}>
                    <Text style={styles.TextButton}>Realizar búsqueda</Text>
                </View>
                </TouchableOpacity>
                </>
               )     
            ) 
          }
          {
            ( resultado &&link  && flag &&
            <TouchableOpacity onPress={()=>navigation.navigate('Response',{array:{resultado}})}>
            <View style={styles.UploadButton}>
                <Text style={styles.TextButton}>Ver Resultados</Text>
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
        flex: 1, 
        alignItems: 'center', 
        marginTop:50
    },
    UploadContainer:{
        height:350,
        width:350,
        marginTop:20,
        marginBottom:40,
       alignItems:'center',
       justifyContent: 'center',
       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    Text:{
        fontSize:20, 
        textAlign: 'center',
        marginBottom: 20
    },
    UploadButton:{
        marginBottom:20,
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