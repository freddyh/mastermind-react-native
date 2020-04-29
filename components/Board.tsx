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
    }

    render() {
        const colors = this.props.game.secret;
        const buttons = colors.map((color, index) => {
            return (<ColorButton key={`${color}-${index}`} colorName={color} />);
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