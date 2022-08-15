import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View } from 'react-native';
function HomeView(){
    return(
        <View style={styles.Container}>
            <Button
            text="Este es mi boton"
            />
        <StatusBar style="auto" />
        </View>
        
    )
}
export default HomeView;
const styles= StyleSheet.create({
    Container:{
        backgroundColor: 'red ;'

    }
    
})