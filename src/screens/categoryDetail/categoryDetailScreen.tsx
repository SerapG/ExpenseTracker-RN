import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackNavigator';
import { dummyExpenses } from '../../data/expenses';

const CategoryDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CategoryDetail'>>();
  const { category } = route.params;

  const filteredExpenses = dummyExpenses.filter(
    (expense) => expense.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} kategorisine ait harcamalar</Text>

      {filteredExpenses.length === 0 ? (
        <Text style={styles.emptyText}>Bu kategoriye ait harcama bulunamadı.</Text>
      ) : (
        <FlatList
          data={filteredExpenses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.expenseItem}>
              <Text style={styles.expenseTitle}>{item.title}</Text>
              <Text style={styles.expenseDetail}>
                {item.amount} TL - {item.date}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  expenseItem: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  expenseDetail: {
    fontSize: 14,
    color: '#555',
  },
  emptyText: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#888',
  },
});
