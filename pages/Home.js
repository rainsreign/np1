import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: #5C5C5C;
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
  font-size: 26px;
  color: #313131;
  font-weight: bold;
`;

const NewTicketB = styled.View`
  color: white;
  border-style: solid;
  border-width: 3px;
  border-radius: 20px;
  border-color: white;
  height: 38;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3px;
`;

const NBText = styled.Text`
  font-size: 30px;
  color: white;
`;

const WinningNum = styled.View`
  background-color: #efefef;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 25px;
  margin-top: 10px;
  shadow-color: black;
  shadow-offset: 10px 15px;
  shadow-opacity: 1;
  shadow-radius: 15px;
  elevation: 15;
`;


const CurrentWinningNum = styled.View`
  background-color: #efefef;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 10px;
  margin-left: 10px;
  border-radius: 25px;
  margin-bottom: 10px;
  margin-top: 10px;
  shadow-color: black;
  shadow-offset: 10px 15px;
  shadow-opacity: 1;
  shadow-radius: 15px;
  elevation: 15;
`;

const PWinningNum = styled.View`
  background-color: #efefef;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 10px;
  margin-left: 10px;
  shadow-color: black;
  shadow-offset: 10px 15px;
  shadow-opacity: 1;
  shadow-radius: 15px;
  elevation: 15;
  border-color: #4B4B4B;
  border-style: solid;
  border-bottom-width: .5px;
`;

const HeaderJText = styled.Text`
  padding-top: 5px;
  height: 30;
  width: 100%;
  background-color: #FEE05A;
  padding-left: 20px;
  font-weight: bold;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const HeaderWText = styled.Text`
  padding-top: 5px;
  height: 30;
  width: 100%;
  background-color: #52F750;
  padding-left: 20px;
  font-weight: bold;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const HeaderPWText = styled.Text`
  padding-top: 5px;
  height: 30;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin-right: 10px;
  margin-left: 10px;
  background-color: #52F750;
  padding-left: 20px;
  font-weight: bold;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
`;

const DrawingDate = styled.Text`
  align-self: center;
  margin-top: 15px;
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
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  shadow-offset: 5px 10px;
  shadow-opacity: .75;
  shadow-radius: 2px;
  elevation: 5;
  padding-top: 10px;
`;

const Num6 = styled.View`
  height: 40;
  width: 40;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  background-color: red;
  shadow-offset: 5px 10px;
  shadow-opacity: .75;
  shadow-radius: 2px;
  elevation: 10;
  padding-top: 10px;
`;

const NumText = styled.Text`
  font-weight: bold;
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
  height: 60;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 5px;
  background-color: #efefef;
  shadow-offset: 10px 15px;
  shadow-opacity: .8;
  shadow-radius: 15px;
  elevation: 24;
`;

const IconB = styled.View`
  height: 25;
  width: auto;
  background-color: #efefef;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const IconImg = styled.Image`
  width: 27;
  height: 27;
`;

const IconImg2 = styled.Image`
  width: 23;
  height: 23;
  margin-bottom: 4px;
`;

const IconText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export default class Home extends React.Component {
  state = {
    previousWinNumberArray: [
      {
        number1: 2,
        number2: 3,
        number3: 4,
        number4: 5,
        number5: 6,
        specialNumber1: 8,
        powerPlayNumber: 2,
        annuityAmount: 328,
        cashAmount: 187.5
      },
      {
        number1: 5,
        number2: 7,
        number3: 8,
        number4: 9,
        number5: 13,
        specialNumber1: 23,
        powerPlayNumber: 5,
        annuityAmount: 151,
        cashAmount: 87.2
      },
      {
        number1: 4,
        number2: 6,
        number3: 22,
        number4: 26,
        number5: 30,
        specialNumber1: 32,
        powerPlayNumber: 10,
        annuityAmount: 210,
        cashAmount: 101.3
      },
      {
        number1: 2,
        number2: 3,
        number3: 4,
        number4: 5,
        number5: 6,
        specialNumber1: 8,
        powerPlayNumber: 1,
        annuityAmount: 139,
        cashAmount: 86.9
      },
      {
        number1: 5,
        number2: 7,
        number3: 8,
        number4: 9,
        number5: 13,
        specialNumber1: 23,
        powerPlayNumber: 22,
        annuityAmount: 97,
        cashAmount: 56.2
      },
      {
        number1: 4,
        number2: 6,
        number3: 22,
        number4: 26,
        number5: 30,
        specialNumber1: 32,
        powerPlayNumber: 14,
        annuityAmount: 289,
        cashAmount: 177.6
      },
      {
        number1: 2,
        number2: 3,
        number3: 4,
        number4: 5,
        number5: 6,
        specialNumber1: 8,
        powerPlayNumber: 8,
        annuityAmount: 231,
        cashAmount: 128.1
      },
      {
        number1: 5,
        number2: 7,
        number3: 8,
        number4: 9,
        number5: 13,
        specialNumber1: 23,
        powerPlayNumber: 12,
        annuityAmount: 341,
        cashAmount: 206.8
      },
      {
        number1: 4,
        number2: 6,
        number3: 22,
        number4: 26,
        number5: 30,
        specialNumber1: 32,
        powerPlayNumber: 7,
        annuityAmount: 245,
        cashAmount: 168.4
      },
    ],
  };

  render() {
    return (
      <View>
        <Screen>
          <Header>
            <HomeHeader>Home</HomeHeader>
            <NewTicketB><NBText> + </NBText></NewTicketB>
          </Header>
            <ScrollView style={{ backgroundColor: '#fff'}}>
              <WinningNum>
                <HeaderJText>Upcoming Jackpot</HeaderJText>
                <DrawingDate>Wednesday July 14, 2019</DrawingDate>
                <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                <EstJPAmt>$329 Million/$201.2 Million</EstJPAmt>
              </WinningNum>
              <CurrentWinningNum>
                <HeaderWText>Winning Numbers</HeaderWText>
                <DrawingDate>Wednesday July 01, 2019</DrawingDate>
                <NumbersList>
                  <Num1><NumText>21</NumText></Num1>
                  <Num1><NumText>3</NumText></Num1>
                  <Num1><NumText>15</NumText></Num1>
                  <Num1><NumText>12</NumText></Num1>
                  <Num1><NumText>27</NumText></Num1>
                  <Num6><NumText>30</NumText></Num6>
                </NumbersList>
                <PPNum>Power Play: 3</PPNum>
                <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                <EstCashAmt>$163 Million/$97.2 Million</EstCashAmt>
                <JPWinners>NO JACKPOT WINNERS</JPWinners>
              </CurrentWinningNum>
              <HeaderPWText>Previous Numbers</HeaderPWText>
              {
                this.state.previousWinNumberArray.map(item => (
                  <PWinningNum>
                    <DrawingDate>Wednesday June 23, 2019</DrawingDate>
                    <NumbersList>
                      <Num1><NumText>{item.number1}</NumText></Num1>
                      <Num1><NumText>{item.number2}</NumText></Num1>
                      <Num1><NumText>{item.number3}</NumText></Num1>
                      <Num1><NumText>{item.number4}</NumText></Num1>
                      <Num1><NumText>{item.number5}</NumText></Num1>
                      <Num6><NumText>{item.specialNumber1}</NumText></Num6>
                    </NumbersList>
                    <PPNum><Text>Power Play: {item.powerPlayNumber}</Text></PPNum>
                    <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                    <EstCashAmt><Text>${item.annuityAmount} Million/${item.cashAmount} Million</Text></EstCashAmt>
                    <MoreNum>View More...</MoreNum>
                  </PWinningNum>
                ))
              }

            </ScrollView>
          <Navbar>
            <IconB>
              <IconImg source={require('../media/home.png')}/>
              <IconText>Home</IconText>
            </IconB>
            <IconB>
              <IconImg2 source={require('../media/userticketsbutton.png')}/>
              <IconText>My Tickets</IconText>
            </IconB>
            <IconB>
              <IconImg source={require('../media/cashoutbutton.png')}/>
              <IconText>Cash Out</IconText></IconB>
          </Navbar>
        </Screen>
      </View>
    );
  }
}
