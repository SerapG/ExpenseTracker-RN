import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { Expense } from '../data/expenses';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

type Props = {
  category: string;
  expenses: Expense[];
  onPressItem: (expense: Expense) => void;
  onDeleteItem: (id: string) => void;
};

const ExpenseGroup = ({ category, expenses, onPressItem, onDeleteItem }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          {...expense}
          onPress={() => onPressItem(expense)}
          onDelete={() => onDeleteItem(expense.id)}
        />
      ))}
    </View>
  );
};

export default ExpenseGroup;

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.heading,
    marginBottom: spacing.sm,
    color: colors.titletext,
  },
});
