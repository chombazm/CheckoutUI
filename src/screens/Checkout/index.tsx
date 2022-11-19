import React from "react";

import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
} from "react-native";
import {
  AppleIcon,
  CalenderIcon,
  CardCVC,
  MasterCardIcon,
  VisaIcon,
} from "../../../assets/icons";
import { SectionDivider, Spacer } from "../../components/UsedUtils";
import { styles } from "./styles";
import { colors } from "../../../assets/colors";
import { AirtelMoneyLogo, MtnMoneyLogo } from "../../../assets/images";
import { PressableArea } from "../../components/PressableArea";

export const CheckoutScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <View style={styles.productInfo}>
          {/* <Text style={styles.productTitle}>Checkout</Text>
          <Text style={styles.productPrice}>Checkout</Text> */}
        </View>
      </View>

      <ScrollView style={styles.paymentContainer}>
        <PressableArea style={[styles.paymentButton, styles.BorderRadiusXs]}>
          <View style={styles.buttonIcon}>
            <AppleIcon />
          </View>
          <Text style={styles.buttonText}>Pay</Text>
        </PressableArea>
        {/* Payment divider */}
        <SectionDivider
          message="Or pay with card"
          style={{ color: colors.grey }}
        />

        <View style={styles.paymentForm}>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput
            style={[
              styles.formInput,
              styles.elevateInput,
              styles.BorderRadiusXs,
            ]}
            placeholder="You email Address"
          />

          <Spacer size={20} />

          <View>
            <Text style={styles.formLabel}>Card Information</Text>
            <View
              style={[
                styles.formInputContainer,
                styles.elevateInput,
                styles.BorderRadiusXs,
              ]}
            >
              <View style={[styles.twoRowInpt, styles.formInputBottomLiner]}>
                <TextInput
                  style={[styles.formInput, styles.cardNumberInput]}
                  placeholder="Number"
                />
                <View style={styles.cardOptions}>
                  <View style={styles.cardOption}>
                    <VisaIcon />
                  </View>
                  <View style={styles.cardOption}>
                    <MasterCardIcon />
                  </View>
                  <View style={styles.cardOption}>
                    <Image
                      source={MtnMoneyLogo}
                      style={styles.cardOptionImage}
                    />
                  </View>
                  <View style={styles.cardOption}>
                    <Image
                      source={AirtelMoneyLogo}
                      style={styles.cardOptionImage}
                    />
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.twoRowInpt,
                  { backgroundColor: "white", borderBottomRightRadius: 6 },
                ]}
              >
                <View
                  style={[
                    styles.twoRowInptLeft,
                    styles.formInputRightLiner,
                    styles.twoRowInpt,
                  ]}
                >
                  <TextInput style={[styles.formInput]} placeholder="MM / YY" />
                  <View style={styles.cardIcon}>
                    <CalenderIcon />
                  </View>
                </View>

                <View style={[styles.twoRowInptRight, styles.twoRowInpt]}>
                  <TextInput style={[styles.formInput]} placeholder="CVC" />
                  <View style={styles.cardIcon}>
                    <CardCVC />
                  </View>
                </View>
              </View>
            </View>
          </View>

          {/* last container */}
          <Spacer size={20} />
          <View>
            <Text style={styles.formLabel}>Country or region</Text>
            <View
              style={[
                styles.formInputContainer,
                styles.elevateInput,
                styles.BorderRadiusXs,
              ]}
            >
              <View style={[styles.formInputBottomLiner]}>
                <TextInput
                  style={[
                    styles.formInput,
                    { borderTopLeftRadius: 6, borderTopRightRadius: 6 },
                  ]}
                  placeholder="Zambia"
                />
              </View>
              <View>
                <TextInput
                  style={[
                    styles.formInput,
                    { borderBottomLeftRadius: 6, borderBottomRightRadius: 6 },
                  ]}
                  placeholder="Zip"
                />
              </View>
            </View>
          </View>

          <Spacer size={20} />

          <PressableArea style={[styles.paymentButton, styles.BorderRadiusXs]}>
            {/* <View style={styles.buttonIcon}>
              <AppleIcon />
            </View> */}
            <Text style={styles.buttonText}>Pay</Text>
          </PressableArea>
        </View>
      </ScrollView>
    </View>
  );
};
