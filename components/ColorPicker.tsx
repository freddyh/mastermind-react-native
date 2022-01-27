import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ColorManager from '../models/colorManager';

type Props = {
  colorManager: ColorManager
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

export default class ColorPicker extends Component<Props> {
  render() {
    console.log(`render ColorPicker`);
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