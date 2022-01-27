/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

// import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
// import { CompositeScreenProps, NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import {  RouteProp } from '@react-navigation/native';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackNavigationProp } from '@react-navigation/stack';

import MasterMindGame from './models/mastermindGame';

// declare global {
//   namespace ReactNavigation {
//     interface RootParamList extends RootStackParamList {}
//   }
// }

// export type RootStackParamList = {
//   Root: NavigatorScreenParams<RootTabParamList> | undefined;
//   Modal: undefined;
//   NotFound: undefined;
// };

// export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
//   RootStackParamList,
//   Screen
// >;

// export type RootTabParamList = {
//   TabOne: undefined;
//   TabTwo: undefined;
// };

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >;

export type StackParamList = {
  Home: undefined;
  Game: { game: MasterMindGame };
};

export type HomeScreenRouteProp = RouteProp<StackParamList, 'Home'>;
export type HomeScreenNavigationProp = StackNavigationProp<StackParamList, 'Home'>;

export type GameScreenRouteProp = RouteProp<StackParamList, 'Game'>;
export type GameScreenNavigationProp = StackNavigationProp<StackParamList, 'Game'>;
