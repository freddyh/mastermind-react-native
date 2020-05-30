import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, Buttons } from '../styles';
import MasterMindGame from '../models/mastermindGame';
import GameDifficulty from '../models/gameDifficulty';
import { HomeScreenRouteProp, HomeScreenNavigationProp } from './Types';

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate(`Game`, {
            game: MasterMindGame.init(GameDifficulty.MEDIUM)
          });
        }}
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
  },
  button: {
    ...Buttons.primary,
    margin: 20
  }
});
