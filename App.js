import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Home from './pages/Home.js';
import Buy from './pages/Buy.js';
import CheckWin from './pages/CheckWin.js';
import MyLotto from './pages/MyLotto.js';
import CashOut from './pages/CashOut.js';

export default class App extends React.Component {
  render() {
    return (
      // <Login />
      // <SignUp />
      <Home />
    );
  }
}
