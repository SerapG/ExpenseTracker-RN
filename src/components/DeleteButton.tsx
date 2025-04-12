import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type DeleteButtonProps = {
  onPress: () => void;
};

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Sil</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;

const styles = StyleSheet.create({
  button: {
    padding: 6,
    borderRadius: 4,
    backgroundColor: '#ff4d4d',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
