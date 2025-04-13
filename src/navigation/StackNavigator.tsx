import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/HomeScreen';
import AddExpense from '../screens/addExpense/AddExpenseScreen';
import ExpenseDetailScreen from '../screens/expenseDetail/ExpenseDetailScreen';
import CategoryScreen from '../screens/category/CategoryScreen';
import CategoryDetailScreen from '../screens/categoryDetail/CategoryDetailScreen';
import type { Expense } from '../data/expenses';
import colors from '../theme/colors';


// Tüm ekranların navigation parametrelerini tanımlar
export type RootStackParamList = {
  Home: { newExpense?: Expense; deletedExpenseId?: string } | undefined;
  AddExpense: undefined;
  ExpenseDetail: {expense: Expense};
  Category: undefined;
  CategoryDetail: { category: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home"
    screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
        headerTintColor: colors.titletext,
      }}>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="AddExpense" component={AddExpense}/>
      <Stack.Screen name="ExpenseDetail" component={ExpenseDetailScreen} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
