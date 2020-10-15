import styled, { css } from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { Keyboard } from 'react-native'

interface CreateAcountButtonProps {
  isKeyboardOpen: boolean;
}

export const Container = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
    padding: 0 30px;
`;

export const Title = styled.Text`
    font-size: 24px;
    color: #F4EDE8;
    font-family: 'RobotoSlab-Medium';
    margin: 64px 0 24px;
`;

export const CreateAcountButton = styled.TouchableOpacity<CreateAcountButtonProps>`
  background-color: #312e38;
  border-top-width: 1px;
  border-color: #232129;
  padding: 60px 0 ${16 + getBottomSpace()}px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  ${(props) => props.isKeyboardOpen ? (css` display: none; `) : (css`  display: flex;`)}

`;

export const CreateAcountButtonText = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;