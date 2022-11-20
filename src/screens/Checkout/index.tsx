import React from 'react';

import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  AppleIcon,
  CalenderIcon,
  CardCVC,
  MasterCardIcon,
  VisaIcon,
} from '../../../assets/icons';
import { StatusBar } from 'expo-status-bar';

import { SectionDivider, Spacer } from '../../components/UsedUtils';
import { styles } from './styles';
import { colors } from '../../../assets/colors';
import { AirtelMoneyLogo, gallery, MtnMoneyLogo } from '../../../assets/images';
import { PressableArea } from '../../components/PressableArea';
import { ProductContainer } from '../../components/ProductContainer';
import { PaymentContainer } from '../../components/PaymentContainer';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
const { height: SCREEN_HEIGHT } = Dimensions.get('window');
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

const productData = {
  name: 'Iphone 14 pro',
  price: 16597,
  gallery: gallery,
  colors: [
    { name: 'Deep Purple', hex: '#877990' },
    { name: 'Gold', hex: '#FFF3D7' },
    { name: 'Silver', hex: '#E7E7E7' },
    { name: 'Space Black', hex: '#74706D' },
  ],
};
export const CheckoutScreen = () => {
  const translateY = useSharedValue(0);
  const productImageHeight = useSharedValue('90%');

  const context = useSharedValue({ y: 0 });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: productImageHeight.value,
    };
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const scrollTo = React.useCallback((y: number) => {
    'worklet';
    translateY.value = withSpring(y, {
      damping: 50,
    });
    // context.value.y = y;
  }, []);
  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = { y: translateY.value };
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT * 0.5);
    })
    .onEnd(e => {
      if (e.translationY > -SCREEN_HEIGHT / 9) {
        scrollTo(-SCREEN_HEIGHT / 9);
        productImageHeight.value = withSpring('90%', { damping: 100 });
      } else {
        scrollTo(-SCREEN_HEIGHT * 0.5);
        productImageHeight.value = withSpring('50%', { damping: 100 });
      }
    });

  React.useEffect(() => {
    scrollTo(-SCREEN_HEIGHT / 9);
    productImageHeight.value = withSpring('90%', {
      damping: 50,
    });
  }, []);

  return (
    <Animated.View style={styles.container}>
      <View style={styles.topContainer}>
        <ProductContainer product={productData} animatedStyle={animatedStyle} />
        {/* <Text>Chomba</Text> */}
      </View>

      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.bottomContainer, rStyle]}>
          {/* <Animated.Text>Chanda</Animated.Text> */}
          <PaymentContainer />
        </Animated.View>
        {/* <View}> */}
        {/* </View> */}
        {/* slide bottom container to pbring payment options */}
      </GestureDetector>
      <StatusBar style="light" />
    </Animated.View>
  );
};
