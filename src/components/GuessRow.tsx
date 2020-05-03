import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';
import Guess from '../models/guess';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'brown',
    width: '100%',
    height: '100%',
  },
  row: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  }
});

type MyProps = {
  game: any;
  guess: Guess;
};

type MyState = {
  isMutable: boolean;
  selectedIndex: number;
};

export default class GuessRow extends Component<MyProps, MyState> {
  state: MyState = {
    isMutable: false,
    selectedIndex: 0,
  };

  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const buttons = this.props.game.randomRow(4).map((color: any, index: number) => {
      return <ColorButton
        key={index}
        colorName={color}
        mutable={true}
        colorManager={this.props.game.colorManager}
        callback={(buttonKey) => {
          console.log(`Guess Row Clicked ${buttonKey}`)
          this.setState({
            selectedIndex: index
          })
        }} />
    });
    const row = (
      <View style={style.row}>
        {buttons}
        <ResultsContainer results={['match', '', '', '']}>
        </ResultsContainer>
      </View>
    );

    return (
      <View style={style.container}>
        {row}
      </View>
    );
  }
};