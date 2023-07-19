import styled, { css } from 'styled-components/native'
import theme from '../../theme/theme'

export const Container = styled.TextInput`
  flex: 1;
  width: 100%;
  height: 100%;
  
  display: flex;
  flex-direction: row;
  
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;

  background-color: ${theme.COLORS.GRAY_700};
  color: ${theme.COLORS.WHITE};

  border-radius: 6px;
  padding: 10px;
  margin-left: 1rem;

`

export const Content = styled.View`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  min-height: 56px;
  max-height: 56px;

  background-color: ${theme.COLORS.GRAY_700};

`

export const Icon = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  height: 100%;
  width: 5rem;

  margin-right: 1rem;
  padding-right: 10px;
`