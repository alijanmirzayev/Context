import { Dimensions, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ProductCart({...props}) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <View>
                    <Text style={styles.titleText}>{props.title}</Text>
                    </View>
                    <View>
                    <Text style={styles.priceText}>${props.price}</Text>
                    </View>
                </View>

                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{uri: props.image}} />
                </View>

                <View style={styles.btnContainer}>
                    <Text style={styles.btnText}>See Details</Text>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        backgroundColor: 'red',
        borderRadius: 12,
        marginRight: 20,
        paddingBottom: 20,
        width: Dimensions.get('screen').width - 45,
    },
    headerContainer: {
        alignItems:'center',
        justifyContent: 'space-between',
        margin: 10
    },
    titleText: {
        fontSize: 17,
        fontWeight: '700',
        color: 'white'
    },
    priceText: {
        fontSize: 21,
        fontWeight: '700',
        color: 'black'
    },
    imageContainer: {
        alignItems:'center',

        marginTop: 20,
        paddingHorizontal: 20,
    },
    image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        borderRadius: 26

    },
    btnContainer: {
        alignItems:'center',
        marginTop: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 6,
        marginHorizontal: 20,
    },
    btnText: {
        fontSize: 24,
        color: 'black',
        fontWeight: '600'
    }
})