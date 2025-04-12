import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/StackNavigator';

const CategoryDetail = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'CategoryDetail'>>();
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category} kategorisine ait harcamalar</Text>
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
