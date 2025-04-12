import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpenseItem from './ExpenseItem';
import { Expense } from '../data/expenses';

type Props = {
  category: string;
  expenses: Expense[];
  onPressItem: (expense: Expense) => void;
  onDeleteItem: (id: string) => void;
};

const ExpenseGroup = ({ category, expenses, onPressItem, onDeleteItem }: Props) => {
  return (
    <View style={styles.group}>
      <Text style={styles.categoryTitle}>{category}</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem
            title={item.title}
            amount={item.amount}
            date={item.date}
            onPress={() => onPressItem(item)}
            onDelete={() => onDeleteItem(item.id)}
          />
        )}
      />
    </View>
  );
};

export default ExpenseGroup;

const styles = StyleSheet.create({
  group: {
    marginTop: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
