import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
    return <Button
      key={color}
      onPress={() => {
        console.log(`${color} clicked`);
      }}
      title={color}
      color={color}
      accessibilityLabel="Just a {color} button"
    />
  })
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