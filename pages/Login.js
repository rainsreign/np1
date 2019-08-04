import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';


const Screen = styled.View`
  background-color: #000;
  height: 100%;
  width: 100%;
`;

const LoginForm = styled.View`
  height: 360;
  margin-top: 180;
  width: auto;
  background-color: #efefef;
  border-radius: 20px;
  margin-right: 15px;
  margin-left: 15px;
  shadow-color: black;
  shadow-offset: 0px 15px;
  shadow-opacity: .2;
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
  height: 230;
  width: 100%;
  margin-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
`;

const InsertT = styled.TextInput`
  height: 60;
  width: 100%;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 20px;
  font-size: 16px;
`;

const LoginB = styled.View`
  height: 60;
  width: 150;
  border-radius: 12px;
  background-color: #ff0000;
  shadow-color: black;
  shadow-offset: 0px 15px;
  shadow-opacity: .2;
  shadow-radius: 15px;
  elevation: 10;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginText = styled.Text`
  font-size: 24px;
  color: white;
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
  font-size: 18px;
  color: #fff;
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
              <InsertT
                placeholder='Email'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ usertext: text })}
                value={this.state.usertext}/>
              <InsertT
                placeholder='Password'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ passtext: text })}
                value={this.state.passtext}/>
              <LoginB><LoginText>Let's Go!</LoginText></LoginB>
            </Body>
          </LoginForm>
          <Footer>
            <SignUp>Don't have an account? <Text fontWeight='bold'>Signup</Text></SignUp>
          </Footer>
        </Screen>
      </View>
    );
  }
}
