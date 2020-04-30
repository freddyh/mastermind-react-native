import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorButton from './ColorButton';
import ColorManager from '../colorManager';

const style = StyleSheet.create({
  container: {
      backgroundColor: 'brown',
      width: '100%',
      height: '100%',
      borderWidth: 2,
      borderRadius: 8,
  },
  row: {
      borderWidth: 2,
      borderRadius: 8,
      flex: 1,
      flexDirection: 'row',
  }
});

export default class Board extends Component {
    constructor(props) {
        super(props);
        this.game = this.props.game;
    }

    render() {
        const colors = this.game.colorManager.colors();

        const count = 10;
        var i = 0;
        const rows = [];

        while (i < count) {
            const random = this.game.randomRow(4);
            rows.push(random);
            i++;
        }
        rows.push(colors);

        return (
            <View style={style.container}>
                {rows.map((row, index) => {
                    return <View key={index} style={style.row}>
                        {row.map((color, index) => {
                            return <ColorButton key={`${color}-${index}`} colorName={color} mutable={true}/>
                        })}
                    </View>
                })}
            </View>
        );
    }
};