import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';
// import ColorButtonModel from '../colorButtonModel';

const style = StyleSheet.create({
  container: {
    backgroundColor: 'brown',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  }
});

type MyProps = {
  game: any;
};

type MyState = {
  isActive: boolean;
};

export default class Board extends Component<MyProps, MyState> {
  state: MyState = {
    isActive: false,
  };

  constructor(props: MyProps) {
    super(props);
  }

  render() {
    const colors = this.props.game.colorManager.colors;

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
        </View>
      );
      rows.push(row);
      i++;
    }

    // const immutableColors: any[] = colors.map((color: any) => {
    //   return { color: color, mutable: false };
    // });
    // rows.push(immutableColors);

    return (
      <View style={style.container}>
        {rows}
      </View>
    );
  }
};