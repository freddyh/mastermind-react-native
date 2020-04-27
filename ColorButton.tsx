import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

class ColorButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorName: props.colorName
        };
    };

    onPress = () => {
        this.setState({
            colorName: 'blue'
        });
    }

    render(props) {
        return (
        <Button
            // key={this.props.colorName}
            onPress={this.onPress}
            title={this.state.colorName}
            color={this.state.colorName}
            accessibilityLabel={`Just a ${this.props.colorName} button`}
        />
        )
    }
}

export default ColorButton;