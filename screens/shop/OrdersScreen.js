import React from "react";
import { FlatList, Text, Platform } from "react-native";
import { useSelector} from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/UI/HeaderButton";
import OrderItem from "../../components/shop/OrderItem";
import Colors from "../../constants/Colors";

const OrdersScreen = props => {

const orders = useSelector(state => state.orders.orders);

    return ( 
        <FlatList
        data = {orders}
        keyExtractor = {item =>item.id} 
        renderItem = {itemData => <OrderItem 
            amount={itemData.item.totalAmount} 
            date={itemData.item.readableDate} 
            items = {itemData.item.items}
            /> }
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
    headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
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
