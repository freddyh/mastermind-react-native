import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ColorButton from './ColorButton';
import ColorManager from '../models/colorManager';

type Props = {
  colorManager: ColorManager,
  didSelectColor: (color: string) => void
};

type State = {
  selectedIndex: number,
  selectedColor: string
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
    selectedColor: ''
  }

  render() {
    const colorsButtons = this.props.colorManager.colors.map((color: string, index: number) => {
      return (
        <ColorButton
          key={index}
          colorName={color}
          mutable={false}
          colorManager={this.props.colorManager}
          callback={(buttonKey) => {
            this.setState({
              selectedIndex: index
            });
            this.props.didSelectColor(buttonKey);
            this.props.colorManager.selectedColor = buttonKey;
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