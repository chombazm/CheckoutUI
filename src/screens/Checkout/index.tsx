import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { styles } from './styles';


export const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
     <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>Checkout</Text>
        <Text style={styles.productPrice}>Checkout</Text>
      </View>
     </View>

     <View style={styles.paymentContainer}>
      <View style={styles.paymentButton}>
        <Text>Checkout</Text>
      </View>
      {/* Payment divider */}
      </View>
    </View>
  );

};