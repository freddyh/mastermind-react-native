import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Buttons } from '../styles';

interface HomeProps { }

const Home = (props: HomeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}>
        <Text>Start New Game</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}>
        <Text>How to Play</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}>
        <Text>Settings</Text>
      </TouchableOpacity>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: Colors.backgroundColor
  },
  button: {
    ...Buttons.primary,
    margin: 20
  }
});
