import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorButton from './ColorButton';

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet'
];

export default function App() {
  let buttons = colors.map(color => {
    return (
      <ColorButton 
        key={color}
        colorName='green'/>
    )
  });
  return (
    <View style={rowStyle.container}>
      {buttons}
    </View>
  );
};

const rowStyle = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  }
});