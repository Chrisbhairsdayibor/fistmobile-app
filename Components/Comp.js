import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export default function Comp() {
  return (
    <View>
      <Text style={styles.heading}>Comp</Text>
      <Image
        source={{
          uri: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => {
          console.log(
            'Button',
            '<------This is the data😊😊😊😊😊😊😊😊😊😊😊😊'
          )
        }}
        title='Hello'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: '30px',
    color: 'red',
  },
})
