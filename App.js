import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import Monsters from './src/components/monsters'
// import Talking from './src/components/talking';
// import Chuck from './src/components/chuck';
import Giphy from './src/components/giphy';

export default function App() {
  return (
    <ScrollView>
      {/* <Monsters />
      <Talking />
      <Text></Text>
      <Text></Text>
      <Chuck name="Chuck"/> */}
      <Giphy search="coding" />
      <Giphy search="fun" />
      <Giphy search="puppy" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
