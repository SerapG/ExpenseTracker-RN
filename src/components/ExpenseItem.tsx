import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useWindowDimensions } from 'react-native';

import DeleteButton from './DeleteButton';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

type Props = {
  title: string;
  amount: number;
  date: string;
  onPress: () => void;
  onDelete: () => void;
};

const ExpenseItem = ({ title, amount, date, onPress, onDelete }: Props) => {
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 360;  // küçük ekranlarda yazı boyutunu küçültmek için
  return (
    // Bileşenin tamamı dokunulabilir: detay sayfasına yönlendirir
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textGroup}>
        <Text style={[styles.title, isSmallScreen && styles.smallTitle]}>{title}</Text>
        <Text style={styles.amount}>{amount} TL</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <DeleteButton onPress={onDelete} />
    </TouchableOpacity>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.cardbackground,
    padding: spacing.md,
    borderRadius: 8,
    marginBottom: spacing.sm,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  textGroup: {
    flex: 1,
  },
  title: {
    ...typography.heading,
    color: colors.titletext,
    marginBottom: spacing.xs,
  },
  smallTitle: {
    fontSize: 16,
  },
  amount: {
    ...typography.body,
    color: colors.titletext,
  },
  date: {
    ...typography.small,
    color: colors.mutedText,
  },
});
