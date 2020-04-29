import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ColorManager from '../colorManager';

const style = StyleSheet.create({
  container: {
      borderColor: 'black',
      borderWidth: 5,
      width: 50,
      height: 50,
      borderRadius: 25
  }
});

class ColorButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorName: props.colorName
        };
    };

    randomColor = () => {
        const generator = new ColorManager('easy');
        return generator.random();
    }

    onPress = () => {
        this.setState({
            colorName: this.randomColor()
        });
    }

    render(props) {
        return (
            <View 
                style={style.container}
                backgroundColor={this.state.colorName}>
                <Button
                    onPress={this.onPress}
                    title={this.state.colorName}
                    accessibilityLabel={`Just a ${this.props.colorName} button`}
                />
            </View>
        )
    }
}

export default ColorButton;