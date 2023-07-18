import React from 'react'
import { TouchableHighlightProps } from 'react-native'
import { Container, Icon, Title } from './styled'

type Props = TouchableHighlightProps & {
  title: string
}
export const GroupCard = ({title, ...rest}: Props) => {
  return (
    <Container {...rest}>
      <Icon weight='fill'/>
      <Title>{title}</Title>
    </Container>
  )
}
