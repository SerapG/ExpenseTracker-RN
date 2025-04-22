import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackNavigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Expense, dummyExpenses } from '../../data/expenses';
import ExpenseItem from '../../components/ExpenseItem';
import BackToHomeButton from '../../components/BackToHomeButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const CategoryDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CategoryDetail'>>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const { category } = route.params;

  // Seçilen kategoriye ait harcamaları tutan local state
  const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>([]);

  // Sayfa yüklendiğinde sadece ilgili kategoriye ait harcamaları filtrele
  useEffect(() => {
    const filtered = dummyExpenses.filter((expense) => expense.category === category);
    setFilteredExpenses(filtered);
  }, [category]);

  // Harcamayı siler ve state'i günceller
  const handleDelete = (id: string) => {
    setFilteredExpenses((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Sayfa başlığı */}
      <Text style={styles.title}>Category: {category}</Text>

      {/* Kategoriye ait harcamaların listesi */}
      <FlatList
        data={filteredExpenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem
            {...item}
            onPress={() => navigation.navigate('ExpenseDetail', { expense: item })} // Detaya yönlendir
            onDelete={() => handleDelete(item.id)} // Harcamayı sil
          />
        )}
        ListFooterComponent={<BackToHomeButton />} // En altta "Ana Sayfa" butonu
      />
    </View>
  );
};

export default CategoryDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
    flex: 1,
  },
  title: {
    ...typography.heading,
    color: colors.titletext,
    marginBottom: spacing.md,
  },
});
