import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const borderRadius = '12px';

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
  font-size: 30px;
  color: #313131;
  font-weight: bold;
`;

const NBText = styled.Text`
  font-size: 40px;
  color: #212121;
`;

const TopInfo = styled.View`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
  background-color: #fff;
`;

const TopBoxes = styled.View`
  background-color: #fff;
  width: 170;
  border-radius: ${borderRadius};
  shadow-color: black;
  shadow-offset: 0px 5px;
  shadow-opacity: 0.2;
  shadow-radius: 10px;
  elevation: 15;
`;

const HeaderTText = styled.Text`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 15px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #ff0000;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
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
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
  padding-left: 10px;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

const DrawingDate = styled.Text`
  align-self: center;
  margin-top: 15px;
`;

const TotalCashAmt = styled.Text`
  align-self: center;
  font-size: 36px;
  margin-top: 14px;
  margin-bottom: 14px;
  font-weight: bold;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
`;

const Num6 = styled.View`
  height: 40;
  width: 40;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: red;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
`;

const NumText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color ? props.color : '#000'};
`;

const PPNum = styled.Text`
  align-self: center;
  font-weight: bold;
  padding-bottom: 3px;
`;

const CashAward = styled.Text`
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
  background-color: #fff;
`;

const IconB = styled.View`
  height: 25;
  width: auto;
  background-color: transparent;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
        cashAwardNumber: 0
      },
      {
        number1: 5,
        number2: 7,
        number3: 8,
        number4: 9,
        number5: 13,
        specialNumber1: 23,
        powerPlayNumber: 5,
        cashAwardNumber: 26
      },
      {
        number1: 4,
        number2: 6,
        number3: 22,
        number4: 26,
        number5: 30,
        specialNumber1: 32,
        powerPlayNumber: 10,
        cashAwardNumber: 120
      },
      {
        number1: 2,
        number2: 3,
        number3: 4,
        number4: 5,
        number5: 6,
        specialNumber1: 8,
        powerPlayNumber: 1,
        cashAwardNumber: 0
      },
      {
        number1: 5,
        number2: 7,
        number3: 8,
        number4: 9,
        number5: 13,
        specialNumber1: 23,
        powerPlayNumber: 22,
        cashAwardNumber: 5
      },
      {
        number1: 4,
        number2: 6,
        number3: 22,
        number4: 26,
        number5: 30,
        specialNumber1: 32,
        powerPlayNumber: 14,
        cashAwardNumber: 0
      }
    ],
  };

  render() {
  return (
      <SafeAreaView>
        <Screen>
          <Header>
            <HomeHeader>My Tickets</HomeHeader>
            <NBText> + </NBText>
          </Header>
            <ScrollView style={{ backgroundColor: '#fff'}}>
                <TopInfo>
                <TopBoxes>
                  <Container>
                    <HeaderTText backgroundColor='#ff0000'>Current Balance</HeaderTText>
                    <View style={{ }}>
                      <TotalCashAmt>$431</TotalCashAmt>
                    </View>
                  </Container>
                </TopBoxes>
                <TopBoxes>
                  <Container>
                    <HeaderTText backgroundColor='#ff0000'>Winning Tickets</HeaderTText>
                    <View style={{ }}>
                      <TotalCashAmt>4</TotalCashAmt>
                    </View>
                  </Container>
                </TopBoxes>
              </TopInfo>
              <WinningNum>
                <Container>
                  <HeaderJText backgroundColor='#212121'>Ticket History (6)</HeaderJText>
                  <DrawingDate>Wednesday July 01, 2019</DrawingDate>
                  <NumbersList>
                    <Num1><NumText>21</NumText></Num1>
                    <Num1><NumText>3</NumText></Num1>
                    <Num1><NumText>15</NumText></Num1>
                    <Num1><NumText>12</NumText></Num1>
                    <Num1><NumText>27</NumText></Num1>
                    <Num6><NumText color='#fff'>30</NumText></Num6>
                  </NumbersList>
                  <PPNum>Power Play: 3</PPNum>
                  <CashAward>Cash Award: $280</CashAward>
                </Container>
              </WinningNum>
            {
                this.state.previousWinNumberArray.map(item => (
                  <WinningNum>
                    <DrawingDate>Wednesday June 23, 2019</DrawingDate>
                    <NumbersList>
                      <Num1><NumText>{item.number1}</NumText></Num1>
                      <Num1><NumText>{item.number2}</NumText></Num1>
                      <Num1><NumText>{item.number3}</NumText></Num1>
                      <Num1><NumText>{item.number4}</NumText></Num1>
                      <Num1><NumText>{item.number5}</NumText></Num1>
                      <Num6><NumText color='#fff'>{item.specialNumber1}</NumText></Num6>
                    </NumbersList>
                    <PPNum><Text>Power Play: {item.powerPlayNumber}</Text></PPNum>
                    <CashAward><Text>Cash Award: ${item.cashAwardNumber}</Text></CashAward>
                  </WinningNum>
                ))
              }

            </ScrollView>
        </Screen>
      </SafeAreaView>
    );
  }
}
