import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: #efefef;
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  height: 200;
  width: 100%;
`;

const SignIn = styled.Text`
  font-size: 36px;
  text-align: center;
  padding-top: 130px;
`;

const Body = styled.View`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 200;
  width: 100%;
  margin-bottom: 30px;
`;

const UserT = styled.Text`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 13px;
`;

const PassT = styled.Text`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 13px;
`;

const LoginB = styled.View`
  height: 50;
  width: 150;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
`;

const AltSignUp = styled.Text`
  font-size: 20px;
  align-self: center;
`;

const Shortcut = styled.View`
  height: 100;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-right: 130px;
  padding-left: 130px;
`;

const Facebook = styled.View`
  height: 50;
  width: 50;
  background-color: red;
`;

const Google = styled.View`
  height: 50;
  width: 50;
  background-color: red;
`;

const Footer = styled.View`
  height: 100;
  width: 100%;
  position: absolute;
  bottom: 0;
  align-items: center;
  padding-top: 30px;
`;

const SignUp = styled.Text`
  font-size: 20px;
`;

export default class LoginPage extends React.Component {
  render() {
    return (
      <View>
        <Screen>
          <Header>
            <SignIn>Sign In</SignIn>
          </Header>
          <Body>
            <UserT>Username or Email</UserT>
            <PassT>Password</PassT>
            <LoginB></LoginB>
          </Body>
          <AltSignUp>Or sign with</AltSignUp>
          <Shortcut>
            <Facebook></Facebook>
            <Google></Google>
          </Shortcut>
          <Footer>
            <SignUp>Sign Up</SignUp>
          </Footer>
        </Screen>
      </View>
    );
  }
}
