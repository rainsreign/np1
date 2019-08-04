import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const borderRadius = '12px';

const Screen = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  height: 80;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-top: 25px;
  padding-right: 20px;
  background-color: #fff;
`;

const HomeHeader = styled.Text`
  font-size: 30px;
  color: #313131;
  font-weight: bold;
`;

const WinningNum = styled.View`
  background-color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: ${borderRadius};
  margin-top: 10px;
  shadow-color: black;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 15;
`;

const Container = styled.View`
  border-radius: ${borderRadius};
  overflow: hidden;
`;

const HeaderJText = styled.Text`
  padding-top: 18px;
  padding-bottom: 18px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
  padding-left: 4%;
  font-weight: bold;
  font-size: 20px;
  color: #fff;
`;

const NumbersList = styled.View`
  height: 80;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 45px;
  padding-right: 45px;
`;

const Num1 = styled.TextInput`
  height: 40;
  width: 40;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
`;

const Num6 = styled.TextInput`
  height: 40;
  width: 40;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #ff0000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
`;

const NumText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color ? props.color : '#000'};
`;

const BottomB = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  margin-left: 20px;
  margin-right: 20px;
`;

const Sum = styled.View`
  background-color: #212121;
  height: 50;
  width: 150;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: ${borderRadius};
  margin-top: 20px;
  shadow-color: black;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 15;
`;

const Sum2 = styled.View`
  background-color: #fff;
  height: 50;
  width: 150;
  align-self: flex-end;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: ${borderRadius};
  margin-top: 20px;
  border-width: 3px;
  border-style: solid;
  border-color: #313131;
`;

const SumText = styled.Text`
font-size: 20px;
color: #fff;
`;

const SumText2 = styled.Text`
  color: #313131;
  font-weight: bold;
  font-size: 22;
`;

const Navbar = styled.View`
  position: absolute;
  bottom: 0;
  height: 60;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const IconB = styled.View`
  bottom: 0;
  height: 60;
  width: 50%;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: .5px;
  border-color: #efefef;
`;

const IconText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export default class Buy extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Screen>
          <Header>
            <HomeHeader>Buy a Ticket</HomeHeader>
          </Header>
          <WinningNum>
            <Container>
              <HeaderJText backgroundColor='#212121'>Choose Numbers</HeaderJText>
              <NumbersList>
                <Num1><NumText></NumText></Num1>
                <Num1><NumText></NumText></Num1>
                <Num1><NumText></NumText></Num1>
                <Num1><NumText></NumText></Num1>
                <Num1><NumText></NumText></Num1>
                <Num6><NumText color='#fff'></NumText></Num6>
              </NumbersList>
            </Container>
          </WinningNum>
          <WinningNum>
            <NumbersList>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num6><NumText color='#fff'></NumText></Num6>
            </NumbersList>
          </WinningNum>
          <WinningNum>
            <NumbersList>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num6><NumText color='#fff'></NumText></Num6>
            </NumbersList>
          </WinningNum>
          <WinningNum>
            <NumbersList>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num6><NumText color='#fff'></NumText></Num6>
            </NumbersList>
          </WinningNum>
          <WinningNum>
            <NumbersList>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num1><NumText></NumText></Num1>
              <Num6><NumText color='#fff'></NumText></Num6>
            </NumbersList>
          </WinningNum>
          <BottomB>
            <Sum>
              <SumText>AutoFill</SumText>
            </Sum>
            <Sum2>
              <SumText2>$0</SumText2>
          </Sum2>
          </BottomB>
          <Navbar>
            <TouchableWithoutFeedback onPress={() => this.props.setTicketModal(false)}>
              <IconB>
                <IconText>Cancel</IconText>
              </IconB>
            </TouchableWithoutFeedback>
            <IconB>
              <IconText>Purchase</IconText>
            </IconB>
          </Navbar>
        </Screen>
      </SafeAreaView>
    );
  }
}
