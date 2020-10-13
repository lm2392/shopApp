import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

import CartItem from "../../components/shop/CartItem";

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items) {
            transformedCartItems.push ({ 
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems;
     });
    

    return (
        <View style={styles.screen}>
                
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>TOTAL:</Text> 
                    <Text style={styles.amount}>{cartTotalAmount} </Text>
                    <Button title='Order Now' disabled={cartItems.length === 0}/>
                </View>
        <FlatList 
            data={cartItems}
            keyExtractor={item => item.productId} 
            renderItem={(itemData) => (
                <CartItem 
                    quantity={itemData.item.quantity}
                    title={itemData.item.productTitle}
                    amount={itemData.item.sum}
                    onRemove = {() => {}}
                />
            )}
        />
        </View>
);
};
            

CartScreen.navigationOptions = (navData) => {
    return {
      headerTitle: navData.navigation.getParam("productTitle"),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Product Home Screen"
            iconName={Platform.OS === "android" ? "md-home" : "ios-home"}
            onPress={() => {
              navData.navigation.navigate("ProductsOverview");
            }}
          />
        </HeaderButtons>
      ),
    };
  };

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary:{
        
    },
    summaryText: {

    },
    amount: {

    }
});

export default CartScreen;