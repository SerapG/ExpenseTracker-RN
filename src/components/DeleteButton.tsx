import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type DeleteButtonProps = {
  onPress: () => void;
};

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>🗑️</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
