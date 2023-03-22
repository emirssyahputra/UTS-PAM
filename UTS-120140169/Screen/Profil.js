import {React,useState} from "react";
import { Image,a, StyleSheet, Text, Button, View,TextInput,ImageBackground,TouchableOpacity,useRef } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import {Link} from 'react-router-dom';

export default function ProfilScreen ( { navigation } ) {
    return(
      <ImageBackground 
        style={styles.background} 
        source={require("../assets/bg3.jpg")}>
        <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign name='leftcircle' size={30} color="white"/>
            <Text style={styles.Text}>Profil</Text>
        </TouchableOpacity>
        </View>
       <View style={styles.body}>
       <Image source={require("../assets/foto.png")} style={styles.gambar}/>
       <View style={styles.nama}>
       <Text>Nama   : Emirssyah Putra</Text>
       <Text>NIM    : 120140169</Text>
       <Text>Kelas  : RA</Text>
       </View>
       </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        flexDirection:"column",
        justifyContent: "space-around",
        alignItems: "center",
      },
      top: {
        top:50,
        height:10,
        width:350,
    },
    Text: {
        top:-30,
        left:40,
        height:50,
        width:350,
        fontSize:20,
    },
    body: {
        flex: 1,
    },
    gambar: {
        top:160,
        height:210,
        width:170,
    },
    nama:{
    top:200,
    alignItems:"center",
    fontSize: 50,
    backgroundColor:"lightgreen",
    padding:10,
    borderRadius:10,
    },
    gi: {
        top:230,
        left:1,
    },
    ig: {
        top:180,
        left: 70,
    },
    lin:{
        top:130,
        left:140,
    }
    });