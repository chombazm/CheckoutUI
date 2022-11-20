import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors } from '../../../assets/colors';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
    // backgroundColor: colors.light,
    // position: 'relative',
    // alignItems: "center",
    // justifyContent: "center",
  },
  topContainer: {
    width: '100%',
    height: SCREEN_HEIGHT,
    // backgroundColor: colors.primary,
  },
  bottomContainer: {
    width: '100%',
    height: SCREEN_HEIGHT,
    transform: [{ translateY: -100 }],
  },

  // productColor: {
  //   fontSize: 16,
  // },
  // productColorContainer: {
  //   width: 70,
  //   alignSelf: "flex-end",
  //   flexDirection: "row",
  //   backgroundColor: "pink",
  //   zIndex: 2,
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // productColorDot: {
  //   width: 20,
  //   height: 20,
  //   borderRadius: 10,
  // },
});
