import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import ColorManager from '../colorManager';

const style = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});

type Props = {
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
    if (!this.state.mutable) {
      return;
    }
    this.setState({
      colorName: this.randomColor()
    });
  }

  render() {
    return (
      <View
        style={style.container}
        borderColor={this.state.mutable ? 'rgba(158, 150, 150, .5)' : ''}
        borderWidth={this.state.mutable ? 5 : 0}
        backgroundColor={this.state.colorName}>
        <Button
          onPress={this.onPress}
          title=""//{this.state.colorName}
          accessibilityLabel={`Just a ${this.props.colorName} button`}
        />
      </View>
    )
  }
}

export default ColorButton;