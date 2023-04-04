import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import {StyleSheet, Text, View, Button,Image} from 'react-native';


export default function App() {
const [data, setdata] = useState([])

useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=> setdata(json))
}, [])

  return (
    <View style={styles.container}>
      {data?.map((item) => (
        <view
        style={styles.card}
        key={item.id}>
          <Text style={styles.heading}>{item.title}</Text>
          <Image
        source={{
          uri: item.image
        }}
        style={{ width: 200, height: 200 }}
/>
          <Button
           onPress={() => alert(item.id)}
           style={styles.button}
            title={'Click'}
            />
        </view>
      ))}
      <Text style={styles.heading}>Open up App.js!</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontsize: '30px',
  },
  card: {
  border:"2px solid grey",
  paddingBottom:"20px",
  marginBottom:"20px",
 }
});
