import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';


// Bileşen tipi: dışarıdan title ve onPress fonksiyonu alır
type Props = {
  title: string;  // Butonun üstünde gösterilecek yazı
  onPress: () => void; // Butona tıklanınca çalışacak fonksiyon
};

const AddButton = ({ title, onPress }: Props) => {
  return (
    // Buton görünümünde dokunulabilir alan
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...typography.subheading,
    color: colors.titletext,
  },
});
