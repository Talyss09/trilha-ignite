import { StatusBar } from 'react-native';
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components'
import theme from './src/theme/theme'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { Container } from './src/styles/app';
import { Loading } from './src/components/Loading';
import { Groups } from './src/screens/Groups';
import { Hightlight } from './src/components/Highlight';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  })
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar 
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
        />
          {
            fontsLoaded ?  <Groups/> : <Loading /> 
          }
      </Container>
      </ThemeProvider>
  );
};
