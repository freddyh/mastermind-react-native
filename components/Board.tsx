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
    // borderWidth: 2,
    // borderRadius: 8,
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
      const models: any[] = random.map((color: any) => { return { color: '', mutable: true }; });
      // const models: ColorButtonModel[] = random.map((color: any) => { return new ColorButtonModel({ color: color, mutable: true }); });
      rows.push(models);
      i++;
    }
    const immutableColors: any[] = colors.map((color: any) => { return { color: color, mutable: false }; });
    // const immutableColors: ColorButtonModel[] = colors.map((color: any) => { return new ColorButtonModel({ color: color, mutable: false }); });
    rows.push(immutableColors);

    return (
      <View style={style.container}>
        {rows.map((row, index) => {
          return <View key={index} style={style.row}>
            {row.map((model: any, index: number) => {
              return (
                <ColorButton
                  key={`${model}-${index}`}
                  colorName={model.color}
                  mutable={model.mutable}
                  colorManager={this.props.game.colorManager} />
              );
            })}
            <ResultsContainer results={['match', '', 'match', '']}>
            </ResultsContainer>
          </View>
        })}
      </View>
    );
  }
};