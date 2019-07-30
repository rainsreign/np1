import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: #FEE05A;
  height: 100%;
  width: 100%;
`;

const LoginForm = styled.View`
  height: auto;
  margin-top: 180;
  width: auto;
  background-color: #efefef;
  border-radius: 20px;
  margin-right: 15px;
  margin-left: 15px;
  shadow-color: black;
  shadow-offset: 10px 15px;
  shadow-opacity: 1;
  shadow-radius: 15px;
  elevation: 10;
`;

const Header = styled.View`
  height: 100;
  width: 100%;
`;

const SignIn = styled.Text`
  font-size: 36px;
  text-align: center;
  padding-top: 20px;
`;

const Body = styled.View`
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 200;
  width: 100%;
  margin-bottom: 40px;
`;

const UserT = styled.TextInput`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
`;

const PassT = styled.TextInput`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
`;

const LoginB = styled.View`
  height: 50;
  width: 150;
  border-radius: 20px;
  background-color: #FEE05A;
  shadow-color: black;
  shadow-offset: 10px 15px;
  shadow-opacity: 1;
  shadow-radius: 15px;
  elevation: 10;
`;

const LoginText = styled.Text`
  font-size: 24px;
  align-self: center;
  padding-top: 8px;
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
  color: #282828;
`;

export default class LoginPage extends React.Component {
  state = {
    usertext: '',
    passtext: ''
  };
  render() {
    return (
      <View>
        <Screen>
          <LoginForm>
            <Header>
              <SignIn>Sign In</SignIn>
            </Header>
            <Body>
              <UserT
                placeholder='Email'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ usertext: text })}
                value={this.state.usertext}/>
              <PassT
                placeholder='Password'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ passtext: text })}
                value={this.state.passtext}/>
              <LoginB><LoginText>Let's Go!</LoginText></LoginB>
            </Body>
          </LoginForm>
          <Footer>
            <SignUp>Sign Up</SignUp>
          </Footer>
        </Screen>
      </View>
    );
  }
}
