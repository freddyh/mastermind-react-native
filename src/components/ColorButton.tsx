import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import ColorManager from '../models/colorManager';

type Props = {
  callback: (props: Props) => void,
  colorName: any,
  mutable: boolean,
};

type State = {
  colorName: any,
  mutable: boolean
};

class ColorButton extends Component<Props, State> {
  state: State = {
    colorName: null,
    mutable: false
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      colorName: props.colorName,
      mutable: props.mutable
    };
  };

  onPress = () => {
    this.props.callback(this.props.colorName);
  }

  render() {
    const style = StyleSheet.create({
      container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: this.state.mutable ? '#cccccc' : 'transparent',
        borderWidth: this.state.mutable ? 2 : 0,
        backgroundColor: this.state.colorName,
      }
    });

    return (
      <TouchableOpacity
        style={style.container}
        onPress={this.onPress}>
      </TouchableOpacity>
    );
  }
}

export default ColorButton;