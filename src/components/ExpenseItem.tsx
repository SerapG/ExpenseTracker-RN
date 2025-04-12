import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DeleteButton from './DeleteButton';

type ExpenseItemProps = {
  title: string;
  amount: number;
  date: string;
  onPress: () => void;
  onDelete: () => void;
};

const ExpenseItem = ({ title, amount, date, onPress, onDelete }: ExpenseItemProps) => {
  return (
    <View style={styles.expenseItem}>
      <TouchableOpacity style={styles.expenseInfo} onPress={onPress}>
        <Text style={styles.expenseTitle}>{title}</Text>
        <Text style={styles.expenseDetail}>
          {amount} TL - {date}
        </Text>
      </TouchableOpacity>
      <DeleteButton onPress={onDelete} />
    </View>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  expenseInfo: {
    flex: 1,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  expenseDetail: {
    fontSize: 14,
    color: '#555',
  },
});
