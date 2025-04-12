import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackNavigator';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ExpenseDetailScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<RootStackParamList, 'ExpenseDetail'>>();
  const { expense } = route.params;

  const handleDelete = () => {
    Alert.alert('Onay', 'Bu harcamayı silmek istiyor musun?', [
      { text: 'Vazgeç' },
      {
        text: 'Evet',
        onPress: () => {
          navigation.navigate('Home', { deletedExpenseId: expense.id });
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Kategori:</Text>
      <Text style={styles.value}>{expense.category}</Text>

      <Text style={styles.label}>Gider Başlığı:</Text>
      <Text style={styles.value}>{expense.title}</Text>

      <Text style={styles.label}>Tutar:</Text>
      <Text style={styles.value}>{expense.amount} TL</Text>

      <Text style={styles.label}>Tarih:</Text>
      <Text style={styles.value}>{expense.date}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Gideri Sil" color="#ff4d4d" onPress={handleDelete} />
      </View>
    </View>
  );
};

export default ExpenseDetailScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
  },
  value: {
    fontSize: 16,
    marginTop: 4,
  },
});
