import MasterMindGame from '../models/mastermindGame';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type StackParamList = {
  Home: undefined;
  Game: { game: MasterMindGame };
};

export type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

export type GameScreenRouteProp = RouteProp<StackParamList, 'Game'>;
export type GameScreenNavigationProp = StackNavigationProp<StackParamList, 'Game'>;
