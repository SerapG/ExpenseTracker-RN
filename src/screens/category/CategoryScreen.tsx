import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

import AddButton from '../../components/AddButton';
import BackToHomeButton from '../../components/BackToHomeButton';

const CategoryScreen = () => {
  const [categories, setCategories] = useState<string[]>(['Market', 'Fatura', 'Eğlence']);
  const [newCategory, setNewCategory] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (!trimmed) {
      Alert.alert('Uyarı', 'Kategori boş olamaz!');
      return;
    }
    if (categories.includes(trimmed)) {
      Alert.alert('Uyarı', 'Bu kategori zaten var!');
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
      {/* Kategori Ekleme Alanı */}
      <Text style={styles.label}>Yeni Kategori Ekle:</Text>
      <View style={styles.inputRow}>
        <TextInput
          placeholder="Kategori adı"
          style={styles.input}
          value={newCategory}
          onChangeText={setNewCategory}
        />
        <AddButton title="Ekle" onPress={handleAddCategory} />
      </View>

      {/* Kategori Listesi */}
      <Text style={styles.subheading}>Kategoriler:</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => handleCategoryPress(item)}>
            <Text style={styles.itemText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Ana Sayfa Butonu */}
      <BackToHomeButton />
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 8,
  },
  input: {
    flex: 1,
    borderColor: '#aaa',
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  item: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
  },
});
