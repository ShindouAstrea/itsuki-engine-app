import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,Text, VirtualizedList} from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import * as Clipboard from 'expo-clipboard';
  const Item = ({ title,match }) => (
    <View style={styles.item}>
      <Text >{title}</Text>
      <Text >{match}</Text>
    </View>
  );
export default function MoreResponseView({route}){
    const {array} = route.params;
    let listado = array["array"];
    return(
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
              <VirtualizedList
                data={listado}
                initialNumToRender={5}
                renderItem={({ item }) => <Item title={item.filename} match={item.similarity}/>}
                keyExtractor={item => item.key}

            />

                <StatusBar style="auto" />
            </View>
    )
}
const styles= StyleSheet.create({
    Container:{
        flex: 1, 
        alignItems: 'center', 
        marginTop:50

    },
    ImageSearched:{
        height:350,
        width:350,
        marginTop:20,
        marginBottom:50,
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
        textAlign:'center',
        fontSize:18,
    },
    UploadButton:{
        height:50,
        justifyContent: 'center',
        marginTop:100,
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