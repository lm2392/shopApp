import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);

    return (
        <View style={styles.screen}>
                <View style={styles.summary}>
                    <Text style={styles.summaryText}>TOTAL: <Text style={styles.amount}>${cartTotalAmount}</Text></Text>
                    <Button title="Order Now"/>
                </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    )
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