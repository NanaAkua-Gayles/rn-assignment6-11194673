import React, { useState } from 'react';
import { View, Text,StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const navigation = useNavigation();

  const products = [
    {
        id: 1,
        name: 'Office Wear',
        description: 'reversible cardigan',
        price: 120,
        image: require('../assets/dress1.png'),
    },
    {
        id: 2,
        name: 'Black',
        description: 'reversible cardigan',
        price: 120,
        image: require('../assets/dress2.png'),
    },
    {
        id: 3,
        name: 'Church Wear',
        description: 'reversible cardigan',
        price: 120,
        image: require('../assets/dress3.png'),
    },
    {
        id: 4,
        name: 'Lamerei',
        description: 'reversible cardigan',
        price: 120,
        image: require('../assets/dress4.png'),
    },
    {
        id: 5,
        name: '21WN',
        description: 'reversible cardigan',
        price: 120,
        image: require('../assets/dress5.png'),
    },
    {
        id: 6,
        name: 'Lopo',
        description: 'reversible angora cardigan',
        price: 120,
        image: require('../assets/dress6.png'),
    },
    {
      id: 7,
      name: '21WN',
      description: 'reversible cardigan',
      price: 120,
      image: require('../assets/dress7.png'),
  },
  {
    id: 8,
    name: 'lame',
    description: 'reversible cardigan',
    price: 120,
    image: require('../assets/dress3.png'),
},

];

const addToCart = async (item) => {
  const cart = await AsyncStorage.getItem('cart');
  let cartItems = cart ? JSON.parse(cart) : [];
  cartItems.push(item);
  await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
  navigation.navigate('Cart'); 
};


  return (
    <SafeAreaView style={{ flex: 1 }}>
    
      <View style={styles.header}>
      <Image source={require('../assets/Menu.png')} style={{ width: 24, height: 24 }} />
      <Image source={require('../assets/Logo.png')} style={{ width: 230, height: 90 ,alignSelf: 'center' }} />
      
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity>
      <Image source={require('../assets/Search.png')} style={{ width: 24, height: 24, marginRight: 10 }} />
      </TouchableOpacity>
      <TouchableOpacity>
      <Image source={require('../assets/shoppingBag.png')} style={{ width: 24, height: 24 }} />
      </TouchableOpacity>
      </View>
      </View>


      <View style={styles.subheader}>
                <Text style={{ fontSize: 24, padding: 10 }}>OUR STORY</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('../assets/Listview.png')} style={{ width: 30, height: 30, marginRight: 10 }} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../assets/Filter.png')} style={{ width: 40, height: 24 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={{margin:6}}>
                        <Image source={item.image} style={{ width: 180, height: 240 }} />
                        <View style={{flexDirection:"row",columnGap:40}}>
                        <Text>{item.name}</Text>
                        <TouchableOpacity onPress={() => addToCart(item)}>
                            <Image source={require('../assets/add_circle.png')} />
                        </TouchableOpacity>
                        </View>
                        <Text>{item.description}</Text>
                        <Text style={{color :"orange", fontSize: 18}}>${item.price}</Text>
                    </View>
                )}
                numColumns={2}
            />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    columnGap:10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 40
  },
  subheader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    padding: 10 
  }
});
