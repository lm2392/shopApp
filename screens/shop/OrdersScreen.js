import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector} from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";

const OrdersScreen = props => {

const orderss = useSelector(state => state.orders.orders);

    return ( 
        <FlatList
        data = {orderss}
        keyExtractor = {item =>item.id} 
        renderItem = {itemData => <Text>{itemData.item.totalAmount}</Text> }
    />
    );
};

OrdersScreen.navigationOptions = navData => {
    return {
    headerTitle: 'Your Orders',
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
    headerLeft: ( <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      title="Menu"
      iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
      onPress={() => {
        navData.navigation.toggleDrawer();
      }}
    />
  </HeaderButtons>),
    };
};

export default OrdersScreen;
