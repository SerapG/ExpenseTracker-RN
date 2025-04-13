import React, { useEffect, useState } from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

import { dummyExpenses, Expense } from '../../data/expenses';
import ExpenseGroup from '../../components/ExpenseGroup';
import AddButton from '../../components/AddButton';


import colors from '../../theme/colors';
import spacing from '../../theme/spacing';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const [expenses, setExpenses] = useState<Expense[]>(dummyExpenses);

  useEffect(() => {
    const newExpense = route.params?.newExpense;
    if (newExpense) {
      setExpenses((prev) => [newExpense, ...prev]);
      navigation.setParams({ newExpense: undefined });
    }
  }, [route.params?.newExpense]);

  useEffect(() => {
    const deletedId = route.params?.deletedExpenseId;
    if (deletedId) {
      setExpenses((prev) => prev.filter((e) => e.id !== deletedId));
      navigation.setParams({ deletedExpenseId: undefined });
    }
  }, [route.params?.deletedExpenseId]);

  const handleDelete = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  const handleItemPress = (expense: Expense) => {
    navigation.navigate('ExpenseDetail', { expense });
  };

  const groupedExpenses = expenses.reduce((acc: Record<string, Expense[]>, expense) => {
    if (!acc[expense.category]) acc[expense.category] = [];
    acc[expense.category].push(expense);
    return acc;
  }, {});

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:100}}>
      <View style={styles.buttonGroup}>
        <AddButton title="ADD EXPENSE" onPress={() => navigation.navigate('AddExpense')} />
        <AddButton title="CATEGORIES" onPress={() => navigation.navigate('Category')} />

      </View>

      {Object.keys(groupedExpenses).map((category) => (
        <ExpenseGroup
          key={category}
          category={category}
          expenses={groupedExpenses[category]}
          onPressItem={handleItemPress}
          onDeleteItem={handleDelete}
        />
      ))}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
    backgroundColor: colors.background,
  },
  buttonGroup: {
    gap: spacing.sm,
    marginBottom: spacing.md,
  },
});
