import React from 'react';

import { View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import { AppleIcon } from '../../../assets/icons';
import { SectionDivider, Spacer } from '../../components/UsedUtils';
import { styles } from './styles';
import { colors } from '../../../assets/colors';

export const CheckoutScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.productContainer}>
      <View style={styles.productInfo}>
        <Text style={styles.productTitle}>Checkout</Text>
        <Text style={styles.productPrice}>Checkout</Text>
      </View>
     </View>

     <View style={styles.paymentContainer}>
      <View style={[styles.paymentButton,  styles.BorderRadiusXs]}>
        <View style={styles.buttonIcon}>
          <AppleIcon />
        </View>
        <Text style={styles.buttonText}>Pay</Text>
      </View>
      {/* Payment divider */}
      <SectionDivider message="Or pay with card" style={{ color: colors.grey }} />

      <View style={styles.paymentForm}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={[styles.formInput, styles.elevateInput, styles.BorderRadiusXs]} placeholder="You email Address" />
        </View>

        <Spacer size={20} />

        <View>
          <Text style={styles.formLabel}>Card Information</Text>
          <View style={[styles.formInputContainer, styles.elevateInput, styles.BorderRadiusXs]}>
            <TextInput style={[styles.formInput, styles.formInputBottomLiner]} placeholder="Number" />
            <View style={styles.twoRowInpt}>
            <TextInput style={[styles.formInput, styles.twoRowInptLeft, styles.formInputRightLiner]} placeholder="MM / YY" />
            <TextInput style={[styles.formInput, styles.twoRowInptRight]} placeholder="CVC" />
            </View>
          </View>
        </View>


      </View>
      </View>
    </SafeAreaView>
  );

};