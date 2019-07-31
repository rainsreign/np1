import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: red;
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  height: 100;
  width: 100%;
`;

const SignUpForm = styled.View`
  height: auto;
  margin-top: 100;
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
`;

const Phone = styled.TextInput`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
`;

const Birthdate = styled.TextInput`
  height: 50;
  width: 300;
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  padding-left: 15px;
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
  border-radius: 15px;
  background-color: black;
  shadow-color: black;
  shadow-offset: 0px 15px;
  shadow-opacity: .2;
  shadow-radius: 15px;
  elevation: 10;
`;

const LoginText = styled.Text`
  font-size: 26px;
  align-self: center;
  padding-top: 5px;
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
  color: black;
`;

{/* <View style={{ height: 200, width: '100%', backgroundColor: '#ff0000' }}>
  <SignIn>Sign Up</SignIn>
</View> */}

export default class SignUp extends React.Component {
  state = {
    name: '',
    usertext: '',
    passtext: '',
    phonetext: '',
    birthdaytext: ''
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
              <Name
                placeholder='Full Name'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ name: text })}
                value={this.state.name}/>
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
              <Phone
                placeholder='Phone Number'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ phonetext: text })}
                value={this.state.phonetext}/>
              <Birthdate
                placeholder='Birthday'
                placeholderTextColor='#525252'
                onChangeText={(text) => this.setState({ birthdaytext: text })}
                value={this.state.birthdaytext}/>
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
