import React from 'react'
import { Container, Content, Icon } from './styled'
import { Header } from '../../components/Header'
import { Hightlight } from '../../components/Highlight'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export const NewGroups = () => {
  return (
    <Container>
      <Header showBackButton/>
      <Content>
        <Icon weight='bold'/>
        <Hightlight title='Nova turma' subtitle='crie uma turma para adicionar pessoas'/>
        <Input placeholder='Nome da turma'/>
        <Button title='Criar' style={{marginTop: 20}}/>
      </Content>
    </Container>
  )
}
