import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ColorButton from './ColorButton';
import ResultsContainer from './ResultsContainer';
import Guess from '../models/guess';
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
  guess: Guess;
  results: GuessResult[];
  active: boolean;
};

type State = {
  selectedIndex: number;
  guess: Guess;
};

export default class GuessRow extends Component<Props, State> {
  state: State = {
    selectedIndex: 0,
    guess: new Guess([])
  };

  public guess: Guess;
  private sub: Subscription;

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
      console.log(`GuessRow received color ${color}`);
      if (!this.props.game.colorManager.colors.includes(color)) { return; }
      this.setState((prevState, props) => {
        let guess = prevState.guess;
        const i = prevState.selectedIndex;
        guess.values[i] = color;
        guess.debugDescription();
        return {
          guess: guess,
          selectedIndex: this.nextIndex()
        }
      })
    });

  }

  render() {
    const buttons = this.state.guess.values.map((color: any, index: number) => {
      return (
        <ColorButton
          key={index}
          colorName={color}
          mutable={this.props.active}
          callback={() => {
            console.log(`selected index ${index}`);
            this.setState({
              selectedIndex: index
            })
          }} />
      );
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