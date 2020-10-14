import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Platform,
} from "react-native";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import Colors from "../../constants/Colors";

const ProductItem = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
  
          <View >
          
            <View style={styles.imageContainer}>
            <TouchableCmp onPress={props.onViewDetail} useForeground>
              <Image style={styles.image} source={{ uri: props.image }} /> 
              </TouchableCmp>
            </View>

            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>${props.price.toFixed(2)}</Text>
            </View>

            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Details"
                onPress={props.onViewDetail}
              />
              <Button
                color={Colors.primary}
                title="To cart"
                onPress={props.onAddToCart}
              />
            </View>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: "65%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    alignItems: "center",
    justifyContent: "space-between",
    height: "15%",
  },
  title: {
    fontFamily:"open-sans-bold",
    fontSize: 18,
    marginVertical: 1,
  },
  price: {
    fontFamily:"open-sans",
    fontSize: 14,
    color: "#888",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  product: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    height: 280,
    margin: 20,
    overflow: "hidden",
  },
  touchable: {
    borderRadius: 10,
    overflow: "hidden",
  },
  actions: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: "20%",
    paddingHorizontal: 70,
  },
});

export default ProductItem;
