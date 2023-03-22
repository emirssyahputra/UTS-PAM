import {React,useState} from "react";
import { Image, StyleSheet, Text, Button, View,TextInput,ImageBackground,TouchableOpacity } from 'react-native';

export default function Home ( { navigation } ) {
    return(
      <ImageBackground 
        style={styles.background} 
        source={require("../assets/Background.jpg")}>
            <Image source={require("../assets/Keep.png")} style={styles.gambar}/>

            <Text style={styles.textbox}>Welcome !</Text>


          <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate('ProfilScreen')}>
            <Button
                color= 'lightgreen'
                title="Profil"
                onPress={() => navigation.navigate('ProfilScreen')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.button2}>
            <TouchableOpacity onPress={() => navigation.navigate('TaskScreen')}>
            <Button
                color= 'lightgreen'
                title="To Do List"
                onPress={() => navigation.navigate('TaskScreen')}
              />
            </TouchableOpacity>
          </View>

          </ImageBackground>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
  },
  background: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    margin:10,
    bottom:150,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  button2: {
    margin:10,
    bottom:400,
    resizeMode: "contain",
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  gambar: {
    top:0,
    width: 300,
    height: 200,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  },
  textbox: {
    color:'white',
    bottom:150,
    fontSize:22,
    flexDirection: "column",
    justifyContent:"center",
    alignItems:"center",
  }
});