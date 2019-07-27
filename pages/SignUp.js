import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
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
  height: 400;
  width: 100%;
  margin-bottom: 30px;
`;

const Name = styled.TextInput`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 13px;
`;

const Phone = styled.Text`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 13px;
`;

const Birthdate = styled.Text`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
  padding-top: 13px;
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
`;

{/* <View style={{ height: 200, width: '100%', backgroundColor: '#ff0000' }}>
  <SignIn>Sign Up</SignIn>
</View> */}

export default class SignUp extends React.Component {
  state = {
    text: ''
  };

  // this.setState({ text: 'Gladys' })

  render() {
    return (
      <View>
        <Screen>
          <Header>
            <SignIn>Sign Up</SignIn>
          </Header>
          <Body>
            <Name
              placeholder='Full Name'
              placeholderTextColor='#000000'
              onChangeText={(text) => this.setState({ text: text })}
              value={this.state.text}/>
            <UserT>Username or Email</UserT>
            <PassT>Password</PassT>
            <Phone>Phone Number</Phone>
            <Birthdate>Birthdate</Birthdate>
            <LoginB></LoginB>
          </Body>
          <Footer>
            <Back>Back</Back>
          </Footer>
        </Screen>
      </View>
    );
  }
}
