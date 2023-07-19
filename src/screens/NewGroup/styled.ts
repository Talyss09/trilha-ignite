import styled from 'styled-components/native'
import theme from '../../theme/theme'
import { UsersThree } from 'phosphor-react-native'

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  padding: 24px;
  align-items: center;
  justify-content: center;
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
`

// export const Icon = styled(UsersThree).attrs(({}) => ({
//   size: 64,
//   color: theme.COLORS.GREEN_700,
// }))`
// `
