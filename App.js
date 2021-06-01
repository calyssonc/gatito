import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import TelaPadrao from './src/componentes/TelaPadrao';
import Reactotron from 'reactotron-react-native';

import Rotas from './src/Rotas';

//Para debugar o projeto
Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
  return <TelaPadrao><Rotas/></TelaPadrao>;
}
