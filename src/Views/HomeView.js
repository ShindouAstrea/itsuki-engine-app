import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, View,Text } from 'react-native';
function HomeView(){
    return(
        <View style={styles.Container}>
            <Text>Este es il inicio</Text>
            <Button
            title="Este es mi boton"
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