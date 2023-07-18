import React, { useState } from 'react'
import { Container, Title } from './styled'
import { Header } from '../../components/Header'
import { Hightlight } from '../../components/Highlight'
import { GroupCard } from '../../components/GroupCard'
import { Text } from 'react-native'
import { EmptyList } from '../../components/EmptyList'
import { Button } from '../../components/Button'

export const Groups = () => {
  const [groups, setGroups] = useState<string[]>(['Galeda da Rocket', 'Rocket'])
  return (
    <Container>
      <Header/>
      <Hightlight title='Turmas' subtitle='Jogue com a sua turma'/>
      {
        !groups ?
        <EmptyList message='Que tal cadastrar a primeira turma?'/> 
        : groups.map((group) => {
            return <GroupCard key={group} title={group} />
        })
    }
      <Button type="Primary" title='Criar nova turma'/>
    </Container>
  )
}
