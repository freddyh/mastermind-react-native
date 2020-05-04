import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ColorManager from '../models/colorManager';

type Props = {
  callback: (buttonKey: string) => void,
  colorName: any,
  mutable: boolean,
  colorManager: ColorManager,
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

  randomColor = () => {
    return this.props.colorManager.random();
  }

  onPress = () => {
    this.props.callback(this.props.colorName)
    // if (!this.state.mutable) {
    //   return;
    // }
    // this.setState({
    //   colorName: this.props.colorManager.selectedColor
    // });
  }

  render() {
    const style = StyleSheet.create({
      container: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: this.state.mutable ? 'black' : 'transparent',
        borderWidth: this.state.mutable ? 2 : 0,
        backgroundColor: this.state.colorName
      }
    });

    return (
      <View style={style.container}>
        <Button
          onPress={this.onPress}
          title=""
          accessibilityLabel={`Just a ${this.props.colorName} button`}
        />
      </View >
    )
  }
}

export default ColorButton;