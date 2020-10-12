import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux'

const CartScreen = props => {
    return (
        <View stylªe={styles.screen}>
            <View>
                <View>
                    <Text>TOTAL: <Text>${19.99}</Text></Text>
                    <Button title="Order Now"/>
                </View>
            </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CartScreen;