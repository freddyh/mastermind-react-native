import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import ResultsContainer from './ResultsContainer';
import Code from '../models/code';
import GuessResult from '../models/guessResult';
import { Subscription } from 'rxjs';

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
  },
  selected: {
    backgroundColor: 'white',
    borderRadius: 10,
    height: '100%',
    width: '100%',
    flex: 1

  }
});

type Props = {
  game: any;
  guess: Code;
  results: GuessResult[];
  active: boolean;
};

type State = {
  selectedIndex: number;
  guess: Code;
};

export default class GuessRow extends Component<Props, State> {
  state: State = {
    selectedIndex: 0,
    guess: new Code([])
  };

  public guess: Code;
  private sub: Subscription | undefined;

  constructor(props: Props) {
    super(props);
    this.guess = props.guess;
    this.state = {
      selectedIndex: 0,
      guess: props.guess
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
    if (!this.props.active) {
      return;
    }
    this.sub = this.props.game.colorManager.colorSubject.subscribe((color: string) => {
      if (!this.props.game.colorManager.colors.includes(color)) { return; }
      this.setState((prevState, props) => {
        let guess = prevState.guess;
        const i = prevState.selectedIndex;
        guess.values[i] = color;
        return {
          guess: guess,
          selectedIndex: this.nextIndex()
        }
      })
    });
  }

  componentWillUnmount() {
    this.sub?.unsubscribe();
  }

  render() {
    const buttons = this.state.guess.values.map((color: any, index: number) => {
      return (<TouchableOpacity
        key={index}
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          borderColor: true ? '#cccccc' : 'transparent',
          borderWidth: 2,
          backgroundColor: color,
        }}
        onPress={() => {
          this.setState({
            selectedIndex: index
          });
        }}>
      </TouchableOpacity>);
    });

    const results = this.props.results.length > 0 ? (
      <ResultsContainer
        key={buttons.length}
        results={this.props.results}>
      </ResultsContainer>
    ) : null;

    const row = (
      <View style={style.row}>
        {buttons}
        {results}
      </View>
    );

    return (
      <View style={style.container}>
        {row}
      </View>
    );
  }
};