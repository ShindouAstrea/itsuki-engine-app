import * as ImagePicker from "expo-image-picker";
// Library to create a unic Id non encrypted
import { nanoid } from 'nanoid/non-secure'
//firebaseConfig
import firebaseConfig from '../database/firebaseConfig.tsx';
import {initializeApp} from 'firebase/app';
import {getDownloadURL, getStorage,ref,uploadBytes} from 'firebase/storage';
//----------------------------------------------------------------
initializeApp(firebaseConfig);
const storage = getStorage();

/**
 * 
 * @param {Array} Size The aspect ratio of the photo
 * @returns 
 */
export const loadImageFromGallery = async(array)=>{
    const response = {status:false,image:null};
    
    const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect:array ,
    })
    if(result.cancelled) return response ;
    response.status = true ;
    response.image = result.uri ;

    return response
}
/**
 * Function to convert an image to blob format
 * @param {String} path THe path of the file to be convert
 * @returns {blob} the converted file into a blob object
 */
export const toBlob =async(ruta)=>{
    const file =await fetch(ruta);
    const blob = await file.blob();
    return blob ;
}
/**
 * Function to upload a image to firebase 
 * @param {blob} blob a blob file
 */
export const toFirebase = async(blob) =>{
    
    const nameFile =  nanoid();
    const reference = ref(storage,nameFile);
    const img = await fetch(result.image);
    const converted = await img.blob();
    await uploadBytes(reference,converted);

};
/**
 * 
 * @param {String} id the id or name's file in firebase
 * @returns {String} The url of the file 
 */
export const enlace= async(id) =>{
    const[url,setURL]=React.useState();
    const reference = ref(storage,id);
    await getDownloadURL(reference)
    .then((resultado)=>setURL(resultado));
    
    return url;
}