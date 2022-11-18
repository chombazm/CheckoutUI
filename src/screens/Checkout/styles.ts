import { StyleSheet, Platform } from "react-native";
import { colors } from "../../../assets/colors";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  productContainer: {
    width: "100%",
    flex: .4,
    // height: 100,
    backgroundColor: 'lavender'
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 10,
  },
  productImage: {},
  productInfo: {},
  productTitle: {},
  productPrice: {},

  paymentContainer: {
    width: '100%',
    paddingHorizontal: 20,

    flex: 1,
  },
  paymentButton: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  buttonIcon: {},
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paymentOptionDivider: {},

  paymentForm: {
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
    backgroundColor: colors.light,
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

  twoRowInpt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  twoRowInptLeft: {
    // width: '48%',
    flex: 1,
  },
  twoRowInptRight: {
    // width: '48%',
    flex: 1,
  },

});