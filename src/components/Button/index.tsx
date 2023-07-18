import React from 'react'
import { Container, Title, ButtonTypeStylesProps } from './styled'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStylesProps;
}

export const Button = ({title, type = 'Primary', ...rest}: Props) => {
  return (
    <Container type={type} {...rest}>
        <Title>{title}</Title>
    </Container>
  )
}
