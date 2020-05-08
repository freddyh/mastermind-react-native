import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

type Props = {
  callback: () => void,
  colorName: any,
  mutable: boolean,
};

export default class ColorButton extends Component<Props> {
  onPress = () => {
    this.props.callback();
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderColor: this.props.mutable ? '#cccccc' : 'transparent',
          borderWidth: this.props.mutable ? 2 : 0,
          backgroundColor: this.props.colorName,
        }}
        onPress={this.onPress}>
      </TouchableOpacity>
    );
  }
}