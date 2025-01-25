import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Simon's App" path="App.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
