import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

// Uygulamanın ana bileşeni
const App = () => {
  return (
    // NavigationContainer, tüm navigasyon yapısını saran üst kapsayıcıdır
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
