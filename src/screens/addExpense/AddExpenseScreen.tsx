import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

const AddExpenseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = () => {
    if (!title || !amount || !date || !category) {
      Alert.alert('Tüm alanları doldurun!');
      return;
    }

    const newExpense = {
      id: Date.now().toString(), // Şimdilik bu kalsın
      title,
      amount: parseFloat(amount),
      date,
      category,
    };

    navigation.navigate('Home', { newExpense });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kategori</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Örn: Market, Fatura"
      />

      <Text style={styles.label}>Gider Başlığı</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Örn: Elektrik Faturası"
      />

      <Text style={styles.label}>Tutar (₺)</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        placeholder="Örn: 200"
      />

      <Text style={styles.label}>Tarih</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="YYYY-MM-DD"
      />

      <Button title="Gideri Kaydet" onPress={handleSubmit} />
    </View>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    marginTop: 12,
    fontWeight: 'bold',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    marginTop: 4,
  },
});
