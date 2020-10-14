import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import Colors from "../../constants/Colors";

const OrderItem = props => {
    return  <View style={styles.orderItem}>
        <View style={styles.summary}>
            <Text style={styles.totalAmount}>
                {props.amount.toFixed(2)}
            </Text>
            <Text style={styles.date}>
            {props.date}
            </Text>
        </View>
        <Button color={Colors.primary} title="Show Detail" onPress={() => {}}/>
    </View>
};

const styles = StyleSheet.create({
    orderItem: {
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "white",
    margin: 20, 
    padding: 10
    },

    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: "100%"
    },
    totalAmount: {
        fontFamily: "open-sans-bold", 
        fontSize: 16,

    },
    date: {
        fontFamily: "open-sans", 
        fontSize: 16,
        color: "#888"
    }
});

export default OrderItem;