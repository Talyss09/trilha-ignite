import { Image } from "react-native";
import styled from "styled-components/native";
import { CaretLeft } from 'phosphor-react-native'
import theme from "../../theme/theme";


export const Container = styled.View`
width: 100%;
flex-direction: row;
align-items: center;
justify-content: center;
`

export const Logo = styled.Image`
  width: 36px;
  height: 40px;
`


export const Title = styled.Text`
color: red;
`

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`


export const BackIcon = styled(CaretLeft).attrs(({}) => ({
  size: 36,
  color: theme.COLORS.WHITE
}))``;