import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';
import ColorPicker from './ColorPicker';

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'brown',
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
  },
  board: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'brown',
    width: '70%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 8,
  },
  right: {
    // backgroundColor: 'gray',
    flex: 1,
    flexDirection: 'column',
    maxWidth: '30%',
  },
  picker: {
    // backgroundColor: 'green',
    width: '100%',
    height: '90%',
    // borderWidth: 2,
    // borderRadius: 8,
  },
  submit: {
    height: '10%',
    // width: '30%',
    backgroundColor: 'blue',
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
          colorManager={this.props.game.colorManager}
          callback={(cname) => {
            // console.log(`other callback ${this.props.game.colorManager.selectedColor}`)
          }} />
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
        <View style={style.board}>
          {rows}
        </View>
        <View style={style.right}>
          <View style={style.picker}>
            <ColorPicker colorManager={this.props.game.colorManager} />
          </View>
          <Button title="Submit" onPress={() => {
            console.log("hello submit button");
          }} />
        </View>
        {/* <View style={style.picker}>
          <ColorPicker colorManager={this.props.game.colorManager} />
        </View> */}
      </View>
    );
  }
};