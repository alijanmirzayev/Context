import { useContext, useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CartContext } from '../../context/CartContext'
import { baseNetwork } from '../../network/Api'
import ProductCart from '../../components/ProductCart'

const Home = ({navigation}: any) => {
  const [products, setProducts] = useState([])
  let { carts, setcarts } = useContext(CartContext)

  useEffect(() => {
    const Network = new baseNetwork()

    Network.getAll().then(response => setProducts(response))

  }, [])

  const render = ({ item }: any) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetailScreen', {id: item.id})}>
        <ProductCart title={item.title} price={item.price} image={item.image} id={item.id}/>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Our Products</Text>
      </View>

      <View style={styles.headerBtnContainer}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Popular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Top Rated</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>New Collection</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cartContainer}>
        <FlatList
          data={products}
          horizontal
          renderItem={render}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 26,
    marginHorizontal: 20
  },
  headerContainer: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 36,
    color: 'black',
    fontWeight: '700'
  },
  headerBtnContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  btnText: {
    fontSize: 18,
    color: 'white'
  },
  cartContainer: {
    gap: 20,
  }
})

export default Home