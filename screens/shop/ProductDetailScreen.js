import React from "react";
import {
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useSelector } from "react-redux";

import Colors from '../../constants/Colors'

const ProductDetailScreen = (props) => {
  const productid = props.navigation.getParam("productId");
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productid)
  );
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Image
          style={styles.image}
          source={{ uri: selectedProduct.imageUrl }}
        />
        <View style={styles.actions}>
        <Button color={Colors.primary} title="Add to Cart"   />
        </View>
        <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
        <Text style={styles.description}>{selectedProduct.description} </Text>
      </View>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("productTitle"),
  };
};

const styles = StyleSheet.create({
    actions:{
        marginVertical:10,
        alignItems:'center'
    },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize:20,
    color: '#888',
    margin: 2,
    textAlign:'center'
  },
  description: {
    fontFamily:"open-sans",
    fontSize:15,
    color: '#888',
    margin: 2,
    textAlign:'center'
  },
  price:{
    fontFamily:"open-sans-bold",
    fontSize: 20,
    color: '#888',
    textAlign:'center',
    marginVertical: 20
  }
  ,
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetailScreen;
