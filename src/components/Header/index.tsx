import React from 'react'
import { BackIcon, Container, Logo, Title, BackButton } from './styled'
import LogoImage from '../../../assets/logo.png'

type Props = {
  showBackButton?: boolean;
}

export const Header = ({showBackButton = false}: Props) => {
  return (
    <Container>
      { showBackButton && 
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={LogoImage} />
    </Container>
  )
}
