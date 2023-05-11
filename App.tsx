import { NavigationContainer } from '@react-navigation/native'
import { } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import StackMain from './src/navigation/Stack/Stack'
import { CartProvider } from './src/context/CartContext'

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <StackMain />
      </CartProvider>
    </NavigationContainer>
  )
}

export default App