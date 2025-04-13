import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

type Props = {
  title: string;            // Görüntülenecek kategori adı
  onPress: () => void;      // Tıklanınca yapılacak işlem (detay ekranına gitmek gibi)
};

const CategoryItem = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
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
  text: {
    ...typography.body,
    color: colors.titletext,
  },
});
