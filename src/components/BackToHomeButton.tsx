import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/StackNavigator';

import colors from '../theme/colors';
import spacing from '../theme/spacing';
import typography from '../theme/typography';

const BackToHomeButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
      <Text style={styles.text}>Home Screen</Text>
    </TouchableOpacity>
  );
};

export default BackToHomeButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: 10,
    marginTop: spacing.lg,
    alignItems: 'center',
  },
  text: {
    ...typography.subheading,
    color: colors.titletext,
  },
});
