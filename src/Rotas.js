import React from 'react';
import {
    Router,
    Scene
} from 'react-native-router-flux';

import Principal from './components/Principal';
import SobreJogo from './components/SobreJogo';
import OutrosJogo from './components/OutrosJogos';
import Resultado from './components/Resultado';

const Rotas = () => (
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

export default Rotas;