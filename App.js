import {React, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [showText, setshowText]= useState("");
  const [text, setText] = useState("");

  return (
    
    <>
    <View style={styles.container}>
      <Text>hola polshu, contate algo</Text>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        value={Text}
        onChangeText={setText}
        placeholder="contame aca         "
      />
      <Button
        title="Apretame"
        onPress={() => {setshowText(text); setText("")}}
      />
      <Text>
      {showText}
    </Text>
    </View>
    
    
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
