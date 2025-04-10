import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/navigation'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
        <RootNavigator/>
    </SafeAreaProvider>
    
  );
}

export default App;
