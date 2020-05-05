import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ColorButton from './ColorButton';
import ColorManager from '../models/colorManager';

type Props = {
  colorManager: ColorManager
};

type State = {
  selectedIndex: number,
};

const style = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    flexDirection: 'column',
    height: '100%',
    alignItems: 'center',
    alignContent: 'stretch',
    justifyContent: 'space-evenly',
  }
});

export default class ColorPicker extends Component<Props, State> {
  state = {
    selectedIndex: 0,
  }

  render() {
    const colorsButtons = this.props.colorManager.colors.map((color: string, index: number) => {
      return (
        <ColorButton
          key={index}
          colorName={color}
          mutable={false}
          callback={() => {
            this.setState({
              selectedIndex: index
            });
            this.props.colorManager.colorSubject.next(color);
          }} />
      );
    })
    return (
      <View style={style.container}>
        {colorsButtons}
      </View>
    );
  }
}