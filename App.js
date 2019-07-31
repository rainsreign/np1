import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Home from './pages/Home.js';
import UserLottery from './pages/UserLottery.js';
import Buy from './pages/Buy.js';
import CheckWin from './pages/CheckWin.js';
import CashOut from './pages/CashOut.js';
import Account from './pages/Account.js';
import Amplify, { Auth } from 'aws-amplify';
import axios from 'axios';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

Amplify.configure({
  Auth: {
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',
    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_E4rYLc1l8',
    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '7leo71de8qj31tqqhg6mn4iudg',
    mandatorySignIn: false,
  }
});


const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home
    },
    'My Tickets': {
      screen: UserLottery
    },
    Account: {
      screen: Account
    }
  }, {
    headerMode: 'none'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // Auth.signUp({
    //   username: 'gladys@nativeprototype.com',
    //   password: '00000000',
    //   attributes: {
    //       email: 'gladys@nativeprototype.com',          // optional
    //       // other custom attributes
    //   },
    // })
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    // Auth.signIn({
    //   username: 'gladys@nativeprototype.com', // Required, the username
    //   password: '00000000', // Optional, the password
    // }).then(user => console.log(user))
    // .catch(err => console.log(err));

    // {
    //   identityId: 'useast2f2jeofdkfn2e0fdksfs',
    // }

    // find my lotteries with this id.
  }



  render() {

    return (
      <AppContainer />
    );
  }
}
