import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';
import { dummyExpenses } from '../../data/expenses';

const CategoryScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [newCategory, setNewCategory] = useState('');
  const [categories, setCategories] = useState<string[]>(() => {
    // Harcamalardan kategori listesini çıkar
    const unique = new Set(dummyExpenses.map((e) => e.category));
    return Array.from(unique);
  });

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (!trimmed) {
      Alert.alert('Kategori boş olamaz!');
      return;
    }

    if (categories.includes(trimmed)) {
      Alert.alert('Bu kategori zaten mevcut!');
      return;
    }

    setCategories((prev) => [...prev, trimmed]);
    setNewCategory('');
  };

  const handleCategoryPress = (category: string) => {
    navigation.navigate('CategoryDetail', { category }); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kategoriler</Text>

      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
            <Text style={styles.categoryText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      <TextInput
        style={styles.input}
        placeholder="Yeni kategori ekle"
        value={newCategory}
        onChangeText={setNewCategory}
      />
      <Button title="Kategori Ekle" onPress={handleAddCategory} />

      <View style={{ marginTop: 16 }}>
        <Button title="Ana Sayfaya Dön" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginVertical: 8,
  },
  categoryItem: {
    padding: 12,
    backgroundColor: '#eee',
    marginBottom: 8,
    borderRadius: 6,
  },
  categoryText: {
    fontSize: 16,
  },
});
