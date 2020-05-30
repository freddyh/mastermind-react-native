import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackParamList } from './Types';
import Game from './Game';
import Home from './Home';

// import { StyleSheet } from 'react-native';
// import { Colors } from '../styles';

const Stack = createStackNavigator<StackParamList>();

export default class App extends Component {
  render() {
    console.log(`render App`);
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Game"
            component={Game}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

// const style = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     alignContent: 'center',
//     justifyContent: 'space-evenly',
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: Colors.background
//   },
//   game: {
//     width: '100%',
//     height: '100%'
//   }
// });