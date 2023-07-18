import styled from 'styled-components/native'
import theme from '../../theme/theme'
import { UsersThree} from 'phosphor-react-native'

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 90px;

  background-color: ${theme.COLORS.GRAY_500};

  border-radius: 6px;

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;

  padding: 24px;
  margin-bottom: 12px;

`

export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_200};
  align-self: center;
  flex: 1;
  text-align: center;
`

export const Icon = styled(UsersThree).attrs(({}) => ({
  size: 32,
  color: theme.COLORS.GREEN_700,
}))`
  margin-right: 20px;
`
