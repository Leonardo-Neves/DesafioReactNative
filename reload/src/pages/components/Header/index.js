import React, { useEffect, useState, useRef } from 'react';
import { TouchableOpacity } from 'react-native'
import { HeaderContainer, User, Slogan, Chat, ChatIndicator } from './styles'

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { Modalize } from 'react-native-modalize';
import Icon from 'react-native-vector-icons/Feather';

export default function Header() {
  
  const modalizeRef = useRef(null);

  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf')
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
        <HeaderContainer>
          <TouchableOpacity>                
            
            <User source={require('../../../assets/images/user.jpg')}/>
            
          </TouchableOpacity>
          <Slogan source={require('../../../assets/images/logo-black.png')}/>
          <TouchableOpacity>
            <Chat source={require('../../../assets/images/chat_icon.png')}/>
            <ChatIndicator></ChatIndicator>
          </TouchableOpacity>
        </HeaderContainer>
    )
  }
}