import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Platform,
  ScrollView,
} from 'react-native';
import { colors } from '../../assets/colors';
import {
  CalenderIcon,
  CardCVC,
  MasterCardIcon,
  VisaIcon,
} from '../../assets/icons';
import { AirtelMoneyLogo, MtnMoneyLogo } from '../../assets/images';
import { PressableArea } from './PressableArea';
import { Spacer } from './UsedUtils';

export const PaymentContainer = () => {
  return (
    <ScrollView style={styles.paymentContainer}>
      <View style={styles.paymentForm}>
        <Spacer size={100} />
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={[styles.formInput, styles.elevateInput, styles.BorderRadiusXs]}
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
            ]}>
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
                  <Image source={MtnMoneyLogo} style={styles.cardOptionImage} />
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
                { backgroundColor: 'white', borderBottomRightRadius: 6 },
              ]}>
              <View
                style={[
                  styles.twoRowInptLeft,
                  styles.formInputRightLiner,
                  styles.twoRowInpt,
                ]}>
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
        {/* <View>
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
        </View> */}

        {/* <Spacer size={20} /> */}
        {/* <PressableArea style={[styles.paymentButton, styles.BorderRadiusXs]}>
        <View style={styles.buttonIcon}>
          <AppleIcon />
        </View>
        <Text style={styles.buttonText}>Pay</Text>
      </PressableArea> */}
        {/* Payment divider */}
        {/* <SectionDivider
        message="Or pay with card"
        style={{ color: colors.grey }}
      /> */}
        <PressableArea style={[styles.paymentButton, styles.BorderRadiusXs]}>
          {/* <View style={styles.buttonIcon}>
            <AppleIcon />
          </View> */}
          <Text style={styles.buttonText}>Pay</Text>
        </PressableArea>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paymentContainer: {
    width: '100%',
    paddingHorizontal: 20,

    // display: "none",
    // flex: 1,
  },
  paymentButton: {
    width: '100%',
    paddingVertical: 7,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {},
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentOptionDivider: {},

  paymentForm: {
    // backgroundColor: 'lavender'
  },
  formLabel: {
    marginVertical: 10,
    fontSize: 16,
    color: colors.grey,
  },
  formInput: {
    backgroundColor: colors.light,
    padding: 10,
  },
  paymentSingleInput: {},
  paymentInput: {},
  formInputContainer: {
    // paddingVertical: 6,
    // backgroundColor: colors.light,
  },

  formInputBottomLiner: {
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },

  formInputRightLiner: {
    borderRightColor: colors.lightGrey,
    borderRightWidth: 1,
  },

  BorderRadiusXs: {
    borderRadius: 6,
  },

  elevateInput: {
    ...Platform.select({
      ios: {
        shadowColor: colors.lightGrey,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 1,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  cardNumberInput: {
    flex: 1,
    // backgroundColor: 'red'
  },
  cardOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardOption: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 4,
    borderColor: colors.lightGrey,
    borderWidth: 1,

    width: 30,
    height: 25,
  },
  cardOptionImage: {},
  cardIcon: {
    marginHorizontal: 5,
  },
  twoRowInpt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.light,
  },
  twoRowInptLeft: {
    flex: 1,
  },
  twoRowInptRight: {
    flex: 1,
  },
});
