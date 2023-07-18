import styled from 'styled-components/native'
import theme from '../../theme/theme';

export type ButtonTypeStylesProps = 'Primary' | 'Secondary'

type Props = {
  type: ButtonTypeStylesProps;
  
}

export const Container = styled.TouchableOpacity<Props>`
  flex: 1;
  min-width: 100%;
  max-height: 56px;
  background-color: ${({type})  => type === 'Primary' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
  color: ${theme.COLORS.WHITE}
`