import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import './global.css';
import { WelcomeScreen, WashSelectionScreen, WashDescriptionScreen } from './src/screens';
import { Screen, WashType } from './src/types/wash.types';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [selectedWash, setSelectedWash] = useState<WashType | null>(null);

  const userName = 'Usuario';

  const handleStart = () => {
    setCurrentScreen('washSelection');
  };

  const handleSelectWash = (washType: WashType) => {
    setSelectedWash(washType);
    setCurrentScreen('washDescription');
  };

  const handleBackToSelection = () => {
    setCurrentScreen('washSelection');
  };

  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      {currentScreen === 'welcome' && (
        <WelcomeScreen userName={userName} onStart={handleStart} />
      )}
      {currentScreen === 'washSelection' && (
        <WashSelectionScreen onSelectWash={handleSelectWash} />
      )}
      {currentScreen === 'washDescription' && selectedWash && (
        <WashDescriptionScreen washType={selectedWash} onBack={handleBackToSelection} />
      )}
    </View>
  );
}
