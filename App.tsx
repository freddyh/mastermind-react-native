import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorButton from './ColorButton';
import ColorManager from './colorManager';

export default function App() {
  let colorManager = new ColorManager('hard');
  console.log(colorManager.colors())
  let buttons = colorManager.colors().map(color => {
    return (
      <ColorButton 
        key={color}
        colorName={color}
      />
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
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});