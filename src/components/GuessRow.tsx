import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Code from '../models/code';
import { Subscription } from 'rxjs';
import MasterMindGame from '../models/mastermindGame';
import { Colors } from '../styles';

type Props = {
  game: MasterMindGame;
  code: Code;
  isCompleted: boolean;
  isActive: boolean;
  handleColorSelected: (color: string, index: number) => void;
};

type State = {
  selectedIndex: number;
};

export default class GuessRow extends Component<Props, State> {
  state: State = {
    selectedIndex: 0,
  };

  public code: Code;
  private sub: Subscription | undefined;

  constructor(props: Props) {
    super(props);
    this.code = props.code;
    this.state = {
      selectedIndex: 0,
    };
  }

  nextIndex(): number {
    let next = this.state.selectedIndex + 1;

    if (next === this.props.game.codeLength) {
      next = 0;
    }

    return next;
  }

  componentDidMount() {
    this.sub = this.props.game.colorManager.colorSubject.subscribe((color: string) => {
      if (!this.props.isActive) {
        return;
      }
      if (!this.props.game.colorManager.colors.includes(color)) { return; }
      this.props.handleColorSelected(color, this.state.selectedIndex);
      this.setState({
        selectedIndex: this.nextIndex()
      });
    });
  }

  componentWillUnmount() {
    this.sub?.unsubscribe();
  }

  render() {
    console.log(`render GuessRow`);
    const buttons = this.props.code.values.map((color: any, index: number) => {
      const showSelectedIndicator = this.state.selectedIndex === index && this.props.isActive;
      return (<TouchableOpacity
        disabled={!this.props.isActive}
        key={index}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderColor: this.props.isActive ? Colors.secondary : Colors.secondary,
          borderWidth: this.props.isCompleted ? 0 : 2,
          backgroundColor: this.props.isActive ? color : color,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onPress={() => {
          this.setState({
            selectedIndex: index
          });
        }}>

        {showSelectedIndicator &&
          <View
            style={{
              backgroundColor: Colors.secondary,
              width: 20,
              height: 20,
              maxWidth: 20,
              maxHeight: 20,
              borderRadius: 10
            }}>
          </View>
        }
      </TouchableOpacity >);
    });

    return (
      <View style={style.container} >
        <View style={style.row}>
          {buttons}
        </View>
      </View>
    );
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  row: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  }
});
