import type { Expense } from '../data/expenses';


import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import AddExpenseScreen from '../screens/addExpense/AddExpenseScreen';
import ExpenseDetailScreen from '../screens/expenseDetail/ExpenseDetailScreen';
import CategoryScreen from '../screens/category/CategoryScreen';

export type RootStackParamList = {
  Home: { newExpense?: Expense } | undefined;
  AddExpense: undefined;
  ExpenseDetail: undefined;
  Category: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddExpense" component={AddExpenseScreen} />
      <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

