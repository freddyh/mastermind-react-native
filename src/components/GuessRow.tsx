import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'brown',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
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
};

type MyState = {
  isMutable: boolean;
};

export default class GuessRow extends Component<MyProps, MyState> {
  state: MyState = {
    isMutable: false,
  };

  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const count = 10;
    let i = 0;
    const rows = [];

    while (i < count) {
      const random = this.props.game.randomRow(4);
      const buttons: any[] = random.map((color: any, index: number) => {
        return <ColorButton
          key={index}
          colorName={color}
          mutable={true}
          colorManager={this.props.game.colorManager} />
      });
      const row = (
        <View key={i} style={style.row}>
          {buttons}
          <ResultsContainer results={['match', '', '', '']}>
          </ResultsContainer>
        </View>
      );
      rows.push(row);
      i++;
    }

    return (
      <View style={style.container}>
        {rows}
      </View>
    );
  }
};