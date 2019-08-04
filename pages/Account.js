import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import CashOut from './CashOut';

const Screen = styled.View`
  background-color: #fff;
  height: 100%;
  width: 100%;
`;

const borderRadius = '12px';

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

///////////////////////////////////////////////////////////////////////////

const TopSection = styled.View`
  width: 100%;
  height: auto;
  padding-bottom: 15px;
`;

const CardHolder = styled.View`
  background-color: #212121;
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
  shadow-opacity: 0.1;
  shadow-radius: 5px;
  elevation: 15;
`;

const NewCardHolder = styled(CardHolder)`
  background-color: #ff0000;
`;

const Container = styled.View`
  border-radius: ${borderRadius};
  overflow: hidden;
`;

const CardHeader = styled.Text`
  padding-top: 12px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparent'};
  padding-left: 4%;
  font-weight: bold;
  font-size: 18px;
  color: #313131;
`;

const Card = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #212121;
  padding-left: 15px;
  padding-right: 15px;
`;

const AddCard = styled(Card)`
  background-color: #ff0000;
`;

const CardIcon = styled.Image`
  height: 40;
  width: 40;
`;

const CardInfo = styled.View`

`;

const BankType = styled.Text`
  color: white;
`;

const NewBank = styled.Text`
  color: white;
  padding-right: 140px;
  font-weight: bold;
  font-size: 16px;
`;

const CardNum = styled.Text`
  color: white;
  padding-right: 45px;
`;

const Row = styled.View`
  height: 65;
  width: 100%;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
  border-bottom-width: .7px;
  border-style: solid;
  border-color: #d6d6d6;
`;

const Buttons = styled.Image`
  height: 25;
  width: 25;
`;

const ButtonText = styled.Text`
  font-size: 20px;
`;

//////////////////////////////////////////////////////////////////////////////

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

class Account extends React.Component {
  render() {

    return (
      <SafeAreaView>
        <Screen>
          <Header>
            <HomeHeader>Account</HomeHeader>
          </Header>
            <ScrollView style={{ backgroundColor: '#fff'}}>
              <TopSection>
                <CardHeader>Linked Cards</CardHeader>
                <CardHolder>
                    <Container>
                      <View style={{ paddingVertical: 14 }}>
                        <Card>
                          <CardIcon source={require('../media/card.png')}/>
                          <CardInfo>
                            <BankType>Visa</BankType>
                            <CardNum>Card ending in *XXXX7408</CardNum>
                          </CardInfo>
                          <CardIcon source={require('../media/check.png')}/>
                        </Card>
                      </View>
                    </Container>
                </CardHolder>
                <CardHolder>
                    <Container>
                      <View style={{ paddingVertical: 14 }}>
                        <Card>
                          <CardIcon source={require('../media/card.png')}/>
                          <CardInfo>
                            <BankType>Mastercard</BankType>
                            <CardNum>Card ending in *XXXX9012</CardNum>
                          </CardInfo>
                          <CardIcon source={require('../media/check.png')}/>
                        </Card>
                      </View>
                    </Container>
                </CardHolder>
                <NewCardHolder>
                    <Container>
                      <View style={{ paddingVertical: 14 }}>
                        <AddCard>
                          <CardIcon source={require('../media/add.png')}/>
                          <CardInfo>
                            <NewBank>Add Bank</NewBank>
                          </CardInfo>
                          <CardIcon />
                        </AddCard>
                      </View>
                    </Container>
                </NewCardHolder>
              </TopSection>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Cash Out')}>
                <Row>
                  <ButtonText>Transfer Money</ButtonText>
                  <Buttons source={require('../media/forwardarrow.png')}/>
                </Row>
              </TouchableWithoutFeedback>

              <Row>
                <ButtonText>Manage Accounts</ButtonText>
                <Buttons source={require('../media/forwardarrow.png')}/>
              </Row>
              <Row>
                <ButtonText>Transaction History</ButtonText>
                <Buttons source={require('../media/forwardarrow.png')}/>
              </Row>
              <Row>
                <ButtonText>Settings</ButtonText>
                <Buttons source={require('../media/forwardarrow.png')}/>
              </Row>
              <Row>
                <ButtonText>About</ButtonText>
                <Buttons source={require('../media/forwardarrow.png')}/>
              </Row>
              <Row>
                <ButtonText>Contact Us</ButtonText>
                <Buttons source={require('../media/forwardarrow.png')}/>
              </Row>
            </ScrollView>
        </Screen>
      </SafeAreaView>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Account: {
        screen: Account
    },
    'Cash Out': CashOut,

  }, {
    headerMode: 'none'
  }
);

export default createAppContainer(AppNavigator);
