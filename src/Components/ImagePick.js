import React from 'react';
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
 * Function to upload a image to firebase 
 * @param {blob} blob a blob file
 */
export const toFirebase = async(file) =>{
    
    const nameFile =  nanoid();
    const reference = ref(storage,nameFile);
    const img = await fetch(file);
    const converted = await img.blob();
    await uploadBytes(reference,converted);
    return nameFile;
};
/**
 * 
 * @param {String} id the id or name's file in firebase
 * @returns {String} The url of the file 
 */
export const getEnlace= async(id) =>{
    
    
}