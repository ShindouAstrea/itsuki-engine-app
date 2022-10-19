import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text,TouchableHighlight,Image,Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {loadImageFromGallery,getEnlace,toFirebase} from '../ImagePick' ;
import LoadingComponent from '../LoadingComponent';
import { useNavigation } from '@react-navigation/native';
//firebaseConfig
import firebaseConfig from '../../database/firebaseConfig.tsx';
import {initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage,ref} from 'firebase/storage';
//----------------------------------------------------------------
initializeApp(firebaseConfig);
const predetermined='../../../assets/gallery.png';
const storage = getStorage();

function HomeView({navigation}){

    const [visibleButton, setButtonVisible] = React.useState(false);
    const [pic, setPic]= React.useState(predetermined);
    const [resultado,setResultado] = React.useState([]);
    const [ isLoading, setIsLoading] = React.useState(false);
    const [link,setLink]= React.useState();
    let listNames=[{
    }]
    const saveNames=(objects) => {
        objects.forEach((item) => {
            listNames.push({
                sauce:item.filename,
                match: parseFloat(item.similarity).toFixed(3) *100
            });
        });
        console.table(listNames);
    }
    const searchAnime= () =>{
        setIsLoading(true);
        const linkConverted = link
        fetch(
            `https://api.trace.moe/search?url=${encodeURIComponent(linkConverted)}`)
        .then((response)=> {
            return response.json()
        })
        .then(
            (result)=>{
                setResultado(result.result);
                setIsLoading(false);
                console.log(resultado);
                ToResponse();
            },
            (error)=>{
                setIsLoading(false);
                Alert("Hubo algun error, intenta en un rato")
            }
        )
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
    const uploadFirebase= async() =>{
      const uploadAndgetNameFile = await toFirebase(pic) ;
      const reference = ref(storage,`/${uploadAndgetNameFile}`);
      await getDownloadURL(reference)
      .then((resultado)=>setLink(resultado));
      searchAnime()
    }
   
    return(
        <View style={styles.Container}>
             <Text style={{justifyContent: 'center',fontSize:16, textAlign: 'center',marginBottom: 20}}> Toca el siguiente cuadro para seleccionar una imágen Vuelve a hacerlo para seleccionar otra.</Text>
                <TouchableHighlight onPress={setVista} underlayColor="#DDDDDD"style={styles.UploadContainer}>
                            <View>
                                <Image source={{uri:pic}} style={{width:300, height:300}}/>
                            </View>
                            
                </TouchableHighlight>
          {
            isLoading ? (
                <>
                    <LoadingComponent />
                    
                </>
                
            ) : (
               visibleButton && (
                <TouchableOpacity onPress={uploadFirebase}>
                        <View style={styles.UploadButton}>
                            <Text style={styles.TextButton}>Realizar busqueda</Text>
                        </View>
                    </TouchableOpacity>
               )
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
        justifyContent: 'center',
        elevation:0

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