import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    height: fit-content;
    justify-content: space-between;
    align-items: center;
    min-height: fit-content;
    height: 4rem;
`;

export const User = styled.Image`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
`; 

export const Slogan = styled.Image`
    width: 6rem;
    height: 0.8rem;
`;

export const Chat = styled.Image`
    height: 2rem;
    width: 2rem;
`;

export const ChatIndicator = styled.View`
    background-color: red;
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 0;
    right: 0;
`;