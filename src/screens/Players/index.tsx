import React from 'react'
import { Container, Title } from './styled'
import { Header } from '../../components/Header'
import { Hightlight } from '../../components/Highlight'
import { Input } from '../../components/Input'
import { Filter } from '../../components/Filter'

export const Players = () => {
  return (
    <Container>
      <Header showBackButton/>
      
      <Hightlight title='Nome da turma' subtitle="adicione a galera e separe o time" />
      <Input isAdd/>

      {/* <Filter/> */}

    </Container>
  )
}
