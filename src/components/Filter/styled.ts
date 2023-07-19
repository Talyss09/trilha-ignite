import styled, { css} from 'styled-components/native'
import theme from '../../theme/theme';

export type FilterSyleProps = {
  isActive?: boolean;
}

export const Container = styled.View`
  flex: 1;

  display: flex;
  flex-direction: row;
  
  max-height: 5%;

  margin-top: 20px;

`

export const Teams = styled.TouchableOpacity<FilterSyleProps>`
  width: 80px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({isActive}) => isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700};
  ` }

  border-radius: 6px;
`

export const Item = styled.Text`
  font-size: ${theme.FONT_SIZE.MD}px;
  font-family: ${theme.FONT_FAMILY.BOLD};

  color: ${theme.COLORS.WHITE};
`
