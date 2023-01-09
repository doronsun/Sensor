import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.container}>
    {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#131313",
        alignItems: "center",
        justifyContent: "center",
      },
})