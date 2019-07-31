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
  ${'' /* overflow: hidden; */}
  elevation: 15;
`;

const Container = styled.View`
  border-radius: ${borderRadius};
  overflow: hidden;
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
  padding-top: 12px;
  padding-bottom: 12px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
  padding-left: 4%;
  font-weight: bold;
  font-size: 18px;
  color: #fff;
`;

// border-top-right-radius: 25px;
// border-top-left-radius: 25px;

const DrawingDate = styled.Text`
  align-self: center;
  margin-top: 15px;
`;

const JPAmtDesc = styled.Text`
  align-self: center;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const EstJPAmt = styled.Text`
  align-self: center;
  font-size: 26px;
  font-weight: bold;
  margin-top: 10px;
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
  ${'' /* text-align: center; */}
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: white;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
  ${'' /* padding-top: 10px; */}
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
  ${'' /* padding-top: 10px; */}
`;

const NumText = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color ? props.color : '#000'};
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
  background-color: #fff;
  ${'' /* shadow-offset: 10px 15px;
  shadow-opacity: .8;
  shadow-radius: 15px;
  elevation: 24; */}
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


const RoundedRectangle = styled.View`
  height: ${props => props.height ? props.height : '100px'};
  width: ${props => props.width ? props.width : '200px'};
  border-radius: 7px;
  background-color: ${props => props.bg ? props.bg : '#d1d1d1'};
`;

const Box = styled.View`
  width: 100px;
  height: 100px;
  backgroundColor: red;
`;

const Box2 = styled(Box)`
  backgroundColor: blue;

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




    // return (
    //   <SafeAreaView style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
    //     {/* <RoundedRectangle />
    //     <RoundedRectangle bg='#ff0000' style={{ marginVertical: 10 }}/>
    //     <RoundedRectangle width={100} height={400} style={{ marginVertical: 10 }}/> */}
    //     {/* <Box></Box>
    //     <Box2></Box2> */}
    //     {/* <View style={{ height: 100, width: '95%', backgroundColor: '#d1d1d1', borderRadius: 20, shadowColor: '#000', shadowOffset: { width: 10, height: 10 }, shadowOpacity: 1  }}>
    //       <View style={{ borderRadius: 20, height: '100%', width: '100%', overflow: 'hidden'}}>
    //         <View style={{ height: 30, width: '100%', backgroundColor: 'red' }}>
    //
    //         </View>
    //       </View>
    //     </View> */}
    //     {/* <Text style={{ fontFamily: 'San Francisco'}}>Gladys</Text> */}
    //     {/* <Text style={{ fontFamily: 'serif'}}>Gladys</Text>
    //     <Text style={{ fontFamily: 'Roboto'}}>Gladys</Text> */}
    //
    //   </SafeAreaView>
    //
    // );


    return (
      <SafeAreaView>
        <Screen>
          <Header>
            <HomeHeader>Home</HomeHeader>
            <NewTicketB><NBText> + </NBText></NewTicketB>
          </Header>
            <ScrollView style={{ backgroundColor: '#fff'}}>
              <WinningNum>
                <Container>
                  <HeaderJText backgroundColor='#212121'>Upcoming Jackpot</HeaderJText>
                  <View style={{ paddingVertical: 14 }}>
                    <DrawingDate>Wednesday July 14, 2019</DrawingDate>
                    <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                    <EstJPAmt>$329 Million/$201.2 Million</EstJPAmt>
                  </View>

                </Container>
              </WinningNum>
              <WinningNum>
                <Container>
                  <HeaderJText backgroundColor='#ff0000'>Winning Numbers</HeaderJText>
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
                  <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                  <EstCashAmt>$163 Million/$97.2 Million</EstCashAmt>
                  <JPWinners>NO JACKPOT WINNERS</JPWinners>
                </Container>
              </WinningNum>
              {/* <HeaderPWText>Previous Numbers</HeaderPWText> */}
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
                    <JPAmtDesc>Annuity/Cash Value</JPAmtDesc>
                    <EstCashAmt><Text>${item.annuityAmount} Million/${item.cashAmount} Million</Text></EstCashAmt>
                    <MoreNum>View More...</MoreNum>
                  </WinningNum>
                ))
              }

            </ScrollView>
        </Screen>
      </SafeAreaView>
    );
  }
}
