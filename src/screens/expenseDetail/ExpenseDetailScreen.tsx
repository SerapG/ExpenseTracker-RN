import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackNavigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const ExpenseDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ExpenseDetail'>>();
  const { expense } = route.params;

  const handleDelete = () => {
    Alert.alert('Confirm', 'Do you really want to delete this expense?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Yes',
        onPress: () => {
          navigation.navigate('Home', { deletedExpenseId: expense.id });
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Category</Text>
      <Text style={styles.value}>{expense.category}</Text>

      <Text style={styles.label}>Title</Text>
      <Text style={styles.value}>{expense.title}</Text>

      <Text style={styles.label}>Amount</Text>
      <Text style={styles.value}>{expense.amount} TL</Text>

      <Text style={styles.label}>Date</Text>
      <Text style={styles.value}>{expense.date}</Text>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Delete Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ExpenseDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
    backgroundColor: colors.background,
  },
  label: {
    ...typography.subheading,
    marginTop: spacing.sm,
    marginBottom: spacing.xs,
    color: colors.titletext,
  },
  value: {
    ...typography.body,
    color: colors.danger,
    marginBottom: spacing.sm,
  },
  deleteButton: {
    backgroundColor: colors.danger,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.xl,
  },
  deleteButtonText: {
    ...typography.subheading,
    color: colors.white,
  },
});
