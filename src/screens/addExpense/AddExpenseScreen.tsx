import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../navigation/StackNavigator';

import AddButton from '../../components/AddButton';
import BackToHomeButton from '../../components/BackToHomeButton';

import colors from '../../theme/colors';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const AddExpenseScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [form, setForm] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    if (!form.title || !form.amount || !form.date || !form.category) {
      Alert.alert('Warning', 'Please fill in all fields!');
      return;
    }

    const newExpense = {
      id: Date.now().toString(),
      title: form.title,
      amount: parseFloat(form.amount),
      date: form.date,
      category: form.category,
    };

    navigation.navigate('Home', { newExpense });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.label}>Category</Text>
      <TextInput
        style={styles.input}
        placeholder="Type category"
        value={form.category}
        onChangeText={(value) => handleChange('category', value)}
      />

      <Text style={styles.label}>Expense Header</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Title"
        value={form.title}
        onChangeText={(value) => handleChange('title', value)}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Add Amount"
        value={form.amount}
        keyboardType="numeric"
        onChangeText={(value) => handleChange('amount', value)}
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY-MM-DD"
        value={form.date}
        onChangeText={(value) => handleChange('date', value)}
      />

      <View style={styles.buttonGroup}>
        <AddButton title="Save" onPress={handleSubmit} />
        <BackToHomeButton />
      </View>
    </ScrollView>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    padding: spacing.md,
    paddingBottom: spacing.xl,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  label: {
    ...typography.subheading,
    marginBottom: spacing.xs,
    color:colors.titletext
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    padding: spacing.sm,
    marginBottom: spacing.md,
    backgroundColor: colors.white,
  },
  buttonGroup: {
    marginTop: spacing.lg,
    gap: spacing.md,
  },
});
