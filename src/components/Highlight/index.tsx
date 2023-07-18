import React from 'react'
import { Container, Subtitle, Title } from './styled'

type Props ={
  title: string
  subtitle: string
}
export const Hightlight = ({...props}: Props) => {
  return (
    <Container>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  )
}
