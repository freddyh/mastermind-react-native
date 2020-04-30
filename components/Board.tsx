import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorButton from './ColorButton';
import ColorManager from '../colorManager';
import ColorButtonModel from '../colorButtonModel';

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
            const models = random.map((color) => { return new ColorButtonModel({color: color, mutable: true }); });
            rows.push(models);
            i++;
        }
        const immutableColors = colors.map((color) => { return new ColorButtonModel({color: color, mutable: false }); });
        rows.push(immutableColors);

        return (
            <View style={style.container}>
                {rows.map((row, index) => {
                    return <View key={index} style={style.row}>
                        {row.map((model, index) => {
                            return (<ColorButton key={`${model}-${index}`} colorName={model.color} mutable={model.mutable}/>);
                        })}
                    </View>
                })}
            </View>
        );
    }
};