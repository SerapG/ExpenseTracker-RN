import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

import { dummyExpenses, Expense } from '../../data/expenses';
import DeleteButton from '../../components/DeleteButton';

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'Home'>>();

  const [expenses, setExpenses] = useState<Expense[]>(dummyExpenses);

  // Yeni gider eklendiğinde
  useEffect(() => {
    if (route.params?.newExpense) {
      const newExpense = route.params.newExpense;
      setExpenses((prev) => [newExpense, ...prev]);
    }
  }, [route.params?.newExpense]);

  // Gider silindiğinde
  useEffect(() => {
    if (route.params?.deletedExpenseId) {
      setExpenses((prev) => prev.filter((e) => e.id !== route.params!.deletedExpenseId));
    }
  }, [route.params?.deletedExpenseId]);

  // Gideri sil
  const handleDelete = (id: string) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  // Giderleri kategoriye göre grupla
  const groupedExpenses = expenses.reduce((acc: Record<string, Expense[]>, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = [];
    }
    acc[expense.category].push(expense);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Button title="Harcama Ekle" onPress={() => navigation.navigate('AddExpense')} />
      <Button title="Kategoriler" onPress={() => navigation.navigate('Category')} />

      {Object.keys(groupedExpenses).map((category) => (
        <View key={category} style={styles.categoryGroup}>
          <Text style={styles.categoryTitle}>{category}</Text>
          <FlatList
            data={groupedExpenses[category]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.expenseItem}>
                <TouchableOpacity
                  style={styles.expenseInfo}
                  onPress={() => navigation.navigate('ExpenseDetail', { expense: item })}
                >
                  <Text style={styles.expenseTitle}>{item.title}</Text>
                  <Text style={styles.expenseDetail}>
                    {item.amount} TL - {item.date}
                  </Text>
                </TouchableOpacity>
                <DeleteButton onPress={() => handleDelete(item.id)} />
              </View>
            )}
          />
        </View>
      ))}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  categoryGroup: {
    marginTop: 16,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
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
