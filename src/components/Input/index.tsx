import React from 'react'
import { Container, Content, Icon } from './styled'
import { useTheme } from 'styled-components'

import { TextInputProps  } from 'react-native'
import { Plus, X } from 'phosphor-react-native'

type Props = TextInputProps & {
  isAdd?: boolean
  isRemove?: boolean
}

export const Input = ({isAdd, isRemove,...rest}: Props) => {

  const { COLORS } = useTheme()
  return (
    <Content {...rest}>
      <Container
      placeholderTextColor={COLORS.GRAY_300}
>
      </Container>
      <Icon>
        { isAdd && <Plus color='#00875F' size={20}/> }
        { isRemove && <X color='#CC2937' size={20}/> }
      </Icon>
    </Content>
  )
}
