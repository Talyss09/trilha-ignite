import React from 'react'
import { Container, FilterSyleProps, Item, Teams } from './styled'
import { TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & FilterSyleProps & {
}

const Arr = [
  { title: 'Team A'},
  { title: 'Team B'},
  { title: 'Team C'},
]

export const Filter = ({} : Props) => {
  return (
    <Container>/

    </Container>
  )
}