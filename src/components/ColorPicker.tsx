import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
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
        <TouchableOpacity
          key={index}
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: color,
          }}
          onPress={() => {
            this.setState({
              selectedIndex: index
            });
            this.props.colorManager.colorSubject.next(color);
          }}>
        </TouchableOpacity>);
    })
    return (
      <View style={style.container}>
        {colorsButtons}
      </View>
    );
  }
}