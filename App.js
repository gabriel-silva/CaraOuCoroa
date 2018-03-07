import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogo from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';
import Rotas from './src/Rotas';

export default class App extends Component {
  render() {
    return (
      <Rotas />
    );
  }
}