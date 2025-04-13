import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

import AddButton from '../../components/AddButton';
import BackToHomeButton from '../../components/BackToHomeButton';
import CategoryItem from '../../components/CategoryItem';


import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const CategoryScreen = () => {
  const [categories, setCategories] = useState<string[]>(['Market', 'Fatura', 'Eğlence']);
  const [newCategory, setNewCategory] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Yeni kategori ekleme işlemi
  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    // Boş kategori girilmesini engelle
    if (!trimmed) {
      Alert.alert('Warning', 'Category cannot be empty!');
      return;
    }
    // Aynı kategori zaten varsa ekleme
    if (categories.includes(trimmed)) {
      Alert.alert('Warning', 'This category already exists!');
      return;
    }
    // Yeni kategoriyi listeye ekle
    setCategories((prev) => [...prev, trimmed]);
    setNewCategory('');
  };

  const handleCategoryPress = (category: string) => {
    navigation.navigate('CategoryDetail', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Add New Category</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Please write a category name"
          style={styles.input}
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <AddButton title="Add" onPress={handleAddCategory} />
      </View>

      <Text style={styles.subheading}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryItem title={item}
          onPress={() => handleCategoryPress(item)}/>
        )}/>

      <BackToHomeButton />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
    backgroundColor: colors.background,
  },
  label: {
    ...typography.heading,
    marginBottom: spacing.xs,
    color:colors.titletext,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    borderColor: colors.border,
    borderWidth: 1,
    padding: spacing.sm,
    borderRadius: 8,
    backgroundColor: colors.white,
    color:colors.brown
  },
  subheading: {
    ...typography.heading,
    marginBottom: spacing.sm,
    color: colors.titletext,
  },
  item: {
    backgroundColor: colors.white,
    padding: spacing.sm,
    borderRadius: 8,
    marginBottom: spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  itemText: {
    ...typography.body,
    color:colors.titletext,
  },
});
