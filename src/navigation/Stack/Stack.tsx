import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { } from 'react'
import Cart from '../../screens/Cart/Cart'
import Home from '../../screens/Home/Home'
import ProductDetail from '../../screens/ProductDetail/ProductDetail'

const Stack = createNativeStackNavigator()

const StackMain = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='HomeScreen' component={Home} />
            <Stack.Screen name='ProductDetailScreen' component={ProductDetail} />
            <Stack.Screen name='CartScreen' component={Cart} />
        </Stack.Navigator>
    )
}

export default StackMain