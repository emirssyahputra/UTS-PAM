import React, {useState} from 'react';
import { useEffect } from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Button,Image, ImageBackground, Dimensions } from 'react-native';
import Task from './Task';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import backbtn from '../assets/Arrow.png'
import { AntDesign } from '@expo/vector-icons';



export default function TaskScreen ( { navigation } ) {

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const [sound, setSound] = React.useState();

  const App = () => (
    <View
      style={{
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: '#fff' }}>Notice that the status bar has light text!</Text>
      <StatusBar style="light" />
    </View>
  );

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../assets/Hello.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  const [fontsLoaded] = useFonts ({
    'Inter': require('../assets/fonts/Inter-LightItalic.otf'),
  }); 

  useEffect (() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  },[]);

  if (!fontsLoaded){
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }


  return (
    <View style={styles.container}>
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
            <AntDesign name='leftcircle' size={30} color="white"/>
          </TouchableOpacity>
        <Text style={styles.sectionTitle}>Aktivitas Hari Ini</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    </ScrollView>
        <View style={styles.musik}>
          <Button title="Play Sound" onPress={playSound} />
        </View>
      <View style={styles.kotak}>
        <Text style={{fontFamily:"Inter", fontSize:13}}>Copyright Emirssyah Putra - 120140169</Text>
      </View>
      
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput style={styles.input} placeholder={'Tulis Aktivitas....'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
        
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    top:-32,
    left:40,
    fontFamily: "Inter",
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 300,
  },
  kotak: {
  alignItems:'center'
  },
  addWrapper: {
    width: 100,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  musik: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  img: {
    width:10,
  },
  addText: {},
});
