import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AddExpenseScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AddExpenseScreen</Text>
    </View>
  )
}

export default AddExpenseScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#fff'
    },
})