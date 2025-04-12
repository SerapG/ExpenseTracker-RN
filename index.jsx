import { useSafeAreaInsets } from "react-native-safe-area-context";
import React from "react";
import { StyleSheet, View, } from 'react-native'

const SafeScreen = ({children}) => {
    const {top,bottom} = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, top, bottom}}>
      [children]
    </View>
  )
}

export default SafeScreen

const styles = StyleSheet.create({})