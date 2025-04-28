import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { ExpenseProvider } from './context/ExpenseContext';

export default function App() {
  return (
    <ExpenseProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
    </ExpenseProvider>
    
  );
}
