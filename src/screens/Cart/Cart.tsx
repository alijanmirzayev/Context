import React, { useState, useContext} from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { CartContext } from '../../context/CartContext'

const Cart = ({route}: any) => {
  let { carts, setcarts } = useContext<any>(CartContext)

  const addItem = (item: any) => {
    setcarts([...carts, item])
  }

  const removeItem = (item: any) => {
    setcarts(carts.filter(i => i !== item))
  }

  const increaseQuantity = (item: any) => {
    const newCartItems = carts.map(i => {
      console.log(i)
      if (i === item) {
        return { ...i, quantity: i.quantity + 1 }
      }
      return i
    })
    setcarts(newCartItems)
  }

  const decreaseQuantity = (item: any) => {
    const newCartItems = carts.map(i => {
      if (i === item && i.quantity > 1) {
        return { ...i, quantity: i.quantity - 1 }
      }
      return i
    })
    setcarts(newCartItems)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Shopping Cart</Text>
      {carts.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.quantityContainer}>
            <Button title="-" onPress={() => decreaseQuantity(item)} />
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Button title="+" onPress={() => increaseQuantity(item)} />
          </View>
          <View style={styles.removeButton}>
            <Button title="Remove" onPress={() => removeItem(item)} />
          </View>
        </View>
      ))}
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal:10,
  },
  tittle:{
    fontSize:24,
    marginBottom:20,
    color: 'black'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    shadowColor: '#cccccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    marginLeft: 10,
    flex: 1,
  },
  name: {
    fontSize: 16,
    color: 'black'
  },
  price: {
    fontSize: 16,
    color: '#888',
    color: 'black'

  },
  removeButton: {
    alignItems: 'center',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10
  },
  quantity: {
    marginRight: 10,
    marginLeft: 10,
    color: 'black',
    fontSize: 18
  },
})