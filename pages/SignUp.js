import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: #000;
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  height: 100;
  width: 100%;
`;

const SignUpForm = styled.View`
  height: 415;
  margin-top: 150;
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

const SignIn = styled.Text`
  font-size: 36px;
  text-align: center;
  margin-top: 25px;
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
  margin-bottom: 10px;
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

const Back = styled.Text`
  font-size: 20px;
  color: #fff;
`;

{/* <View style={{ height: 200, width: '100%', backgroundColor: '#ff0000' }}>
  <SignIn>Sign Up</SignIn>
</View> */}

export default class SignUp extends React.Component {
  state = {
    name: '',
    usertext: '',
    passtext: '',
  };

  // this.setState({ text: 'Gladys' })

  render() {
    return (
      <View>
        <Screen>
          <SignUpForm>
            <Header>
              <SignIn>Sign Up</SignIn>
            </Header>
            <Body>
              <InsertT
                placeholder='Full Name'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}/>
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
              <LoginB><LoginText>Submit</LoginText></LoginB>
            </Body>
          </SignUpForm>
          <Footer>
            <Back>Back</Back>
          </Footer>
        </Screen>
      </View>
    );
  }
}
