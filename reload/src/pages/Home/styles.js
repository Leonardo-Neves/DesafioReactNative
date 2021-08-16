import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContainerRow = styled.View`
    flex-direction: row;
    width: 100%;
    height: 2rem;
`;

export const HeaderModal = styled.View`
    width: 100%;
    height: 3rem;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const ContentModal = styled.View`
    width: 100%;
    height: fit-content;
    padding-left: 1rem;
    padding-right: 1rem;
`;

export const Ilustration = styled.ImageBackground`
    height: 12rem;
    min-height: fit-content;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: center;
`; 

export const Title = styled.Text`
    color: white;
    font-size: 1.1rem;
    margin-bottom: 0.4rem;
`; 

export const TitleModal = styled.Text`
    color: #494949;
    margin-left: 0.5rem;
`;

export const Description = styled.Text`
    color: white;
    font-size: 0.85rem;
    max-width: 50%;
`; 

export const ButtonOptions = styled.TouchableOpacity`
    height: 3rem;
    width: 50%;
    justify-content: center;
    align-items: center;
`;

export const TextButtonOptions = styled.Text`
    color: #494949;
`;

export const ButtonApply = styled.TouchableOpacity`
    flex-direction: row;
    width: 80%;
    height: 3rem;
    background-image: linear-gradient(43deg, #4a54df 4%, #15d4d8 69%);
    border-radius: 2rem;
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    justify-content: center;
    align-items: center;
`;

export const TextButtonApply = styled.Text`
    color: white;
    
`;



