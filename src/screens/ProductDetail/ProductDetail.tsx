import { useEffect, useState, useContext } from 'react'
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { baseNetwork } from '../../network/Api';
import { CartContext } from '../../context/CartContext'

const ProductDetail = ({ route, navigation }: any) => {

  const [product, setProduct] = useState<any>([])
  let { carts, setcarts } = useContext(CartContext)

  useEffect(() => {
    const Network = new baseNetwork()

    Network.getAll().then(response => setProduct(response.find((e: any) => e.id == route.params.id)))

  }, [])

  const addtoCart = () => {
    let newObj = {
      id: route.params.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1
    }
    setcarts([...carts, newObj])
    navigation.navigate('CartScreen')
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <TouchableOpacity style={styles.button} onPress={addtoCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    color: 'black'
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
    color: 'white'
  },
  button: {
    backgroundColor: '#0080FF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail