import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: #efefef;
  height: 100%;
  width: 100%;
`;

const Header = styled.View`
  background-color: white;
  height: 80;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-top: 25px;
  padding-right: 20px;
  background-color: #6CF4C0;
`;

const Jackpot = styled.View`
  background-color: white;
  height: auto;
  width: 100%;
`;

const HeaderText = styled.Text`
  padding-top: 5px;
  height: 30;
  width: 100%;
  background-color: #efefef;
  padding-left: 10px;
  font-weight: bold;
`;

const DrawingDate = styled.Text`
  align-self: center;
  padding-top: 15px;
`;

const JPAmtDesc = styled.Text`
  align-self: center;
  margin-top: 10px;
`;

const EstJPAmt = styled.Text`
  align-self: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const EstCashAmt = styled.Text`
  align-self: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const MyTickets = styled.View`
  background-color: white;
  height: 100;
  width: 100%;
`;

const WinningNum = styled.View`
  background-color: white;
  height: auto;
  width: 100%;
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

const Num1 = styled.View`
  height: 40;
  width: 40;
  border-radius: 20px;
  background-color: #efefef;
`;

const Num2 = styled.View`
  height: 40;
  width: 40;
  border-radius: 20px;
  background-color: #efefef;
`;

const Num3 = styled.View`
  height: 40;
  width: 40;
  border-radius: 20px;
  background-color: #efefef;
`;

const Num4 = styled.View`
  height: 40;
  width: 40;
  border-radius: 20px;
  background-color: #efefef;
`;

const Num5 = styled.View`
  height: 40;
  width: 40;
  border-radius: 20px;
  background-color: #efefef;
`;

const Num6 = styled.View`
  height: 40;
  width: 40;
  border-radius: 20px;
  background-color: red;
`;

const PPNum = styled.Text`
  align-self: center;
  font-weight: bold;
`;

const JPWinners = styled.Text`
  align-self: center;
  padding-bottom: 15px
`;

const MoreNum = styled.Text`
  align-self: flex-end;
  flex-direction: row;
  padding-bottom: 15px;
  padding-right: 10px;
  padding-top: 5px;
  font-weight: bold;
`;

const Navbar = styled.View`
  position: absolute;
  bottom: 0;
  background-color: white;
  height: 60;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #6CF4C0;
`;

const HomeB = styled.View`
  height: 25;
  width: 35;
  background-color: #efefef;
`;

const BuyB = styled.View`
  height: 25;
  width: 35;
  background-color: #efefef;
`;

const CashOutB = styled.View`
  height: 30;
  width: 35;
  background-color: #efefef;
`;

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Screen>
          <Header>
          </Header>
            <ScrollView>
              <Jackpot>
                <HeaderText>Upcoming Jackpot</HeaderText>
                <DrawingDate>Wednesday July 14, 2019</DrawingDate>
                <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                <EstJPAmt>$329 Million/$201.2 Million</EstJPAmt>
              </Jackpot>
              <HeaderText>Winning Numbers</HeaderText>
              <WinningNum>
                <DrawingDate>Wednesday July 01, 2019</DrawingDate>
                <NumbersList>
                  <Num1 />
                  <Num2 />
                  <Num3 />
                  <Num4 />
                  <Num5 />
                  <Num6 />
                </NumbersList>
                <PPNum>Power Play: 3</PPNum>
                <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                <EstCashAmt>$163 Million/$97.2 Million</EstCashAmt>
                <JPWinners>NO JACKPOT WINNERS</JPWinners>
              </WinningNum>
                <HeaderText>Previous Numbers</HeaderText>
              <WinningNum>
                <DrawingDate>Wednesday June 23, 2019</DrawingDate>
                <NumbersList>
                  <Num1 />
                  <Num2 />
                  <Num3 />
                  <Num4 />
                  <Num5 />
                  <Num6 />
                </NumbersList>
                <MoreNum>View More...</MoreNum>
              </WinningNum>
            </ScrollView>
          <Navbar>
            <HomeB></HomeB>
            <BuyB></BuyB>
            <CashOutB></CashOutB>
          </Navbar>
        </Screen>
      </View>
    );
  }
}
