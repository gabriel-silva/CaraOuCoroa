import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Principal from './src/components/Principal';
import SobreJogo from './src/components/SobreJogo';
import OutrosJogo from './src/components/OutrosJogos';
import Resultado from './src/components/Resultado';

export default class App extends Component {
  render() {
    return (
      //initil, props para definir a cena principal
      // hideNavBar, esconde navBar.
      //sceneStyle, aplica estilos em todas as cenas.
      <Router sceneStyle={{ paddingTop: 50 }}>
        <Scene key='app'>
          <Scene key='principal' component={Principal} initil title="Cara ou Coroa" />
          <Scene key='sobrejogo' component={SobreJogo} title="Sobre o Jogo" />
          <Scene key='outrosjogos' component={OutrosJogo} title="Outros Jogos" />
          <Scene key='resultado' component={Resultado} title="Resultado" />
        </Scene>
      </Router>
    );
  }
}