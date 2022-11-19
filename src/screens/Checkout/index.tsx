import React from 'react';

import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
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
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ProductContainer product={productData} />
      </View>
      {/* slide bottom container to pbring payment options */}
      <View style={{ flex: 1 }}>
        <PaymentContainer />
      </View>
      <StatusBar style="light" />
    </View>
  );
};
