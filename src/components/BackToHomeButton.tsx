import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../navigation/StackNavigator';

const BackToHomeButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Button title="Ana Sayfaya Dön" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default BackToHomeButton;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
