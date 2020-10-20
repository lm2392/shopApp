import React from 'react';
import {FlatList, StyleSheet, Text, View } from 'react-native';
import {useSelector} from 'react-redux'
import ProductItem from '../../components/shop/ProductItem';

const UserScreen = props => {
    
    const userProducts = useSelector(state => state.products.userProducts);

    return (
       
       <FlatList data={userProducts} 
       keyExtractor={item => item.id} 
        renderItem={itemData => 
            <ProductItem 
            image = {itemData.item.imageUrl}
            title = {itemData.item.title}
            price = {itemData.item.price}
            onViewDetail = {() => {}}
            onAddToCart = {() => {}}
            />}
        />
    )
};
 
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default UserScreen;

