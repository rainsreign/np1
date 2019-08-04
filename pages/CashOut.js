import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View, Image, ScrollView, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';


const Screen = styled.View`
  background-color: #111111;
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
  background-color: #111111;
`;

const HomeHeader = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
`;

///////////////////////////////////////////////////////////////////////////

const CardHolder = styled.View`
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
  elevation: 10;
`;

const Container = styled.View`
  border-radius: ${borderRadius};
  overflow: hidden;
`;

const CardHeader = styled.Text`
  padding-top: 20px;
  padding-bottom: 12px;
  width: 100%;
  padding-left: 4%;
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

const Card = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-left: 15px;
  padding-right: 15px;
`;

const CardInfo = styled.View`
  padding-top: 3px;
  padding-bottom: 3px;
`;

const TransferText = styled.TextInput`
  width: 500;
  font-size: 16px;
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


export default class CashOut extends React.Component {
  state = {
    fromtext: '',
    totext: '',
    amounttext: ''
  };
  render() {
    return (
      <SafeAreaView>
        <Screen>
          <Header>
            <HomeHeader>Transfer Money</HomeHeader>
          </Header>
            <ScrollView style={{ backgroundColor: '#111111'}}>
              <CardHeader>Transaction Details</CardHeader>
              <CardHolder>
                  <Container>
                    <View style={{ paddingVertical: 14 }}>
                      <Card>
                        <CardInfo>
                          <TransferText
                            placeholder='From'
                            placeholderTextColor='#313131'
                            onChangeText={(text) => this.setState({ fromtext: text })}
                            value={this.state.fromtext}/>
                        </CardInfo>
                      </Card>
                    </View>
                  </Container>
              </CardHolder>
              <CardHolder>
                  <Container>
                    <View style={{ paddingVertical: 14 }}>
                      <Card>
                        <CardInfo>
                          <TransferText
                            placeholder='To'
                            placeholderTextColor='#313131'
                            onChangeText={(text) => this.setState({ totext: text })}
                            value={this.state.totext}/>
                        </CardInfo>
                      </Card>
                    </View>
                  </Container>
              </CardHolder>
              <CardHolder>
                  <Container>
                    <View style={{ paddingVertical: 14 }}>
                      <Card>
                        <CardInfo>
                          <TransferText
                            placeholder='Amount'
                            placeholderTextColor='#313131'
                            onChangeText={(text) => this.setState({ amounttext: text })}
                            value={this.state.amounttext}/>
                        </CardInfo>
                      </Card>
                    </View>
                  </Container>
              </CardHolder>
            </ScrollView>
          <Navbar>
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Account')}>
              <IconB>
                <IconText>Cancel</IconText>
              </IconB>
            </TouchableWithoutFeedback>

            <IconB>
              <IconText>Submit</IconText></IconB>
          </Navbar>
        </Screen>
      </SafeAreaView>
    );
  }
}
