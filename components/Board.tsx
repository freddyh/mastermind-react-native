import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorButton from './ColorButton';
import ColorManager from '../colorManager';

const style = StyleSheet.create({
  container: {
      color: 'brown',
      backgroundColor: 'brown',
      width: '100%',
      height: '100%',
      borderWidth: 2,
      borderRadius: 8,
  },
  row: {
      borderWidth: 2,
      borderRadius: 8,
      borderColor: 'green',
      flex: 1,
      flexDirection: 'row',
  }
});

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const colorManager = new ColorManager('easy');
        const buttons = colorManager.colors().map(color => {
            return (<ColorButton key={color} colorName={color} />)
        });

        return (
            <View style={style.container}>
                <View style={style.row}>
                    {buttons}
                </View>
            </View>
        );
    }
};