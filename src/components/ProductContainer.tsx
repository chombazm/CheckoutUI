import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
  ViewStyle,
  Dimensions,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { colors } from '../../assets/colors';
import { PressableArea } from './PressableArea';
import { Spacer } from './UsedUtils';
const { height: wHeight } = Dimensions.get('window');
type ProductProps = {
  product: {
    name: string;
    price: number;
    gallery: ImageProp[];
    colors: ColorProp[];
  };
  animatedStyle: Animated.AnimateStyle<ViewStyle>;
};

type ImageProp = {
  name: string;
  image: ImageSourcePropType;
};

type ColorProp = {
  name: string;
  hex: string;
};
export const ProductContainer = ({ product, animatedStyle }: ProductProps) => {
  const [displayImage, setDisplayImage] = React.useState<ImageProp>(
    product.gallery[0],
  );

  const [selectedColor, setSelectedColor] = React.useState<ColorProp>(
    product.colors[0],
  );

  const colorRingSize = useSharedValue(25);

  const colorRingStyle = useAnimatedStyle(() => {
    return {
      width: colorRingSize.value,
      height: colorRingSize.value,
      borderRadius: colorRingSize.value / 2,
    };
  });

  const { name, price, gallery, colors } = product;
  // const imageHero = gallery[0];

  const handleImageChange = (color: ColorProp) => {
    const image = gallery.find(image => image.name === color.name);
    console.log(image, 'image');
    if (image) {
      setDisplayImage(image);
      setSelectedColor(color);
      return;
    }
    setDisplayImage(gallery[0]);
  };
  return (
    <Animated.View style={[styles.productContainer, animatedStyle]}>
      <Image
        source={displayImage.image}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.productInfo}>
        <View style={styles.productColorContainer}>
          {colors.map(color => (
            <PressableArea
              onPress={() => {
                console.log('pressed');
                handleImageChange(color);
              }}
              key={color.name}
              style={[
                styles.productColorDot,
                { backgroundColor: color.hex },
                selectedColor.name === color.name &&
                  styles.productColorDotActive,
              ]}
            />
          ))}
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    width: '100%',
    height: '50%',
    // height: '90%',
    // height: 400,
    // height: wHeight,
    // flex: 1,
    // height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    // marginBottom: -20,
    // paddingTop: 30,
    zIndex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 10,
  },
  productImage: {
    // alignSelf: "center",
    // width: 500,
    height: '100%',
    aspectRatio: 1,
    // marginTop: 10,
  },
  productInfo: {
    width: '100%',
    alignSelf: 'center',
    padding: 20,
    // backgroundColor: colors.light,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // position: "absolute",
    // bottom: 100,
    // borderRadius: 10,
    marginTop: -50,
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "#aaa",
    //     shadowOffset: { width: 0, height: 0 },
    //     shadowOpacity: 1,
    //     shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 5,
    //   },
    // }),
  },

  productColor: {
    fontSize: 16,
  },
  productColorContainer: {
    width: 100,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productColorDot: {
    width: 15,
    height: 15,
    // marginHorizontal: 1/,
    borderRadius: 10,
  },
  productColorDotActive: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 30,
    borderColor: colors.primary,
  },
});
