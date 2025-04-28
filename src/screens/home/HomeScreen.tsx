import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

import { useExpense } from '../../../context/ExpenseContext';
import ExpenseGroup from '../../components/ExpenseGroup';
import AddButton from '../../components/AddButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import { Expense } from '../../data/expenses';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const { expenses, addExpense, deleteExpense } = useExpense(); // <-- Context'ten veri çekiyoruz

  // Yeni bir harcama eklendiginde global state'e ekle
  useEffect(() => {
    const newExpense = route.params?.newExpense;
    if (newExpense) {
      addExpense(newExpense);
      navigation.setParams({ newExpense: undefined });
    }
  }, [route.params?.newExpense, addExpense, navigation]);

  // Harcama silindiyse global state'ten çıkar
  useEffect(() => {
    const deletedId = route.params?.deletedExpenseId;
    if (deletedId) {
      deleteExpense(deletedId);
      navigation.setParams({ deletedExpenseId: undefined });
    }
  }, [route.params?.deletedExpenseId, deleteExpense, navigation]);

  // Harcamaları kategoriye göre gruplandır
  const groupedExpenses = expenses.reduce((acc: Record<string, typeof expenses[number][]>, expense) => {
    if (!acc[expense.category]) acc[expense.category] = [];
    acc[expense.category].push(expense);
    return acc;
  }, {});

  // Detay sayfasına git
  const handleItemPress = (expense: Expense) => {
    navigation.navigate('ExpenseDetail', { expense });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      <View style={styles.buttonGroup}>
        <AddButton title="ADD EXPENSE" onPress={() => navigation.navigate('AddExpense')} />
        <AddButton title="CATEGORIES" onPress={() => navigation.navigate('Category')} />
      </View>

      {Object.keys(groupedExpenses).map((category) => (
        <ExpenseGroup
          key={category}
          category={category}
          expenses={groupedExpenses[category] || []}
          onPressItem={handleItemPress}
          onDeleteItem={deleteExpense} // <-- handleDelete yerine doğrudan kullanıyoruz
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
