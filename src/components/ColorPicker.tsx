import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import ColorButton from './ColorButton';
import ColorManager from '../models/colorManager';

type Props = {
  colorManager: ColorManager
};

type State = {
  selectedIndex: number,
  selectedColor: string
};

export default class ColorPicker extends Component<Props, State> {
  state = {
    selectedIndex: 0,
    selectedColor: ''
  }
  render() {
    const style = StyleSheet.create({
      container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'space-evenly',
      },
      selected: {
        color: 'white',
      }
    });
    const colorsButtons = this.props.colorManager.colors.map((color: string, index: number) => {
      const button = (
        <ColorButton
          key={index}
          colorName={color}
          mutable={false}
          colorManager={this.props.colorManager}
          callback={(buttonKey) => {
            this.setState({
              selectedIndex: index
            });
            this.props.colorManager.selectedColor = buttonKey;
          }} />
      );

      if (this.state.selectedIndex === index) {
        return (<View style={{ backgroundColor: 'black' }}>{button}</View>)
      }
      return (button);
    })
    return (
      <View style={style.container}>
        {colorsButtons}
      </View>);
  }
}