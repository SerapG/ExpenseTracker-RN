import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type DeleteButtonProps = {
  onPress: () => void; // Butona tıklanınca çağrılacak fonksiyon (örneğin silme işlemi)
};

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return (
    // Dokunulabilir küçük bir buton, ikon içeriyor
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Delete</Text>
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
