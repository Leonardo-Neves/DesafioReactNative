import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity, Text } from 'react-native'
import { Container, ContainerRow, HeaderModal, ContentModal, ButtonApply, TextButtonApply, Ilustration, ButtonOptions, TextButtonOptions, Title, TitleModal, Description } from './styles'
import Header from '../components/Header';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Modalize } from 'react-native-modalize';
import CalendarPicker from 'react-native-calendar-picker';
import Icon from 'react-native-vector-icons/Feather';

export default function Home() {
  
  const modalizeRef = useRef(null);

  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../assets/fonts/Roboto-Bold.ttf')
  });

  function openModal() {
    modalizeRef.current?.open()
  }

  function closeModal() {
    modalizeRef.current?.close()
  }

  if(!fontsLoaded) {
    return <AppLoading />
  } else {
    return (      
      <Container>
        
        <Header />

        <Ilustration source={require('../../assets/images/ilustration_lifestyle.png')}>
          <Title style={{fontFamily: "Roboto-Bold"}}>Lifestyle</Title>
          <Description style={{fontFamily: "Roboto-Regular"}}>Get a holistic view of your activities to enhance your wellbeing and benefit from even more accurate recommendations.</Description>
        </Ilustration>
        <ContainerRow>
          <ButtonOptions onPress={() => openModal()}>
            <TextButtonOptions style={{fontFamily: "Roboto-Bold"}}>Timestamp feed</TextButtonOptions>
          </ButtonOptions>
          <ButtonOptions onPress={() => openModal()}>
            <TextButtonOptions style={{fontFamily: "Roboto-Bold"}}>Activity feed</TextButtonOptions>
          </ButtonOptions>
        </ContainerRow>
        
  
        <Modalize ref={modalizeRef} snapPoint="500" modalHeight="500" HeaderComponent={
          <HeaderModal>
            <TouchableOpacity onPress={() => closeModal()}>
              <Icon name="x" size={24} color="#494949" />
            </TouchableOpacity>
            <TitleModal style={{fontFamily: "Roboto-Bold"}}>Calendar</TitleModal>
          </HeaderModal>
        }>
          <ContentModal>
            <CalendarPicker 
              textStyle={{fontFamily: "Roboto-Regular"}}
              startFromMonday={true}
              allowRangeSelection={true}
              weekdays={["M", "T", "W", "T", "F", "S", "S"]}
              todayBackgroundColor="#15D4D8"
              selectedDayColor="#15D4D8"
              selectedDayTextColor="#FFFFFF"
            />
            <ButtonApply onPress={() => closeModal()}>
              <TextButtonApply style={{fontFamily: "Roboto-Bold"}}>Apply</TextButtonApply>
            </ButtonApply>
          </ContentModal>

        </Modalize>
  
        
      </Container>
      
    );
  }

  
  
}
