import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

function LoadingComponent(){
  return(
    <View style={styles.container}>
    
      <ActivityIndicator size="large" color="#280C3D" />
      <Text> Espera un momento</Text>
    
  </View>

  )
 
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
});

export default LoadingComponent;