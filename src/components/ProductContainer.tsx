import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageSourcePropType,
  Platform,
  Pressable,
} from "react-native";
import { colors } from "../../assets/colors";
import { Spacer } from "./UsedUtils";

type ProductProps = {
  product: {
    name: string;
    price: number;
    gallery: ImageProp[];
    colors: ColorProp[];
  };
};

type ImageProp = {
  name: string;
  image: ImageSourcePropType;
};

type ColorProp = {
  name: string;
  hex: string;
};
export const ProductContainer = ({ product }: ProductProps) => {
  const [displayImage, setDisplayImage] = React.useState<ImageProp>(
    product.gallery[3]
  );

  const [selectedColor, setSelectedColor] = React.useState<ColorProp>(
    product.colors[0]
  );

  const { name, price, gallery, colors } = product;
  // const imageHero = gallery[0];

  const handleImageChange = (color: ColorProp) => {
    const image = gallery.find((image) => image.name === color.name);
    if (image) {
      setDisplayImage(image);
      setSelectedColor(color);
      return;
    }
    setDisplayImage(gallery[0]);
  };
  return (
    <View style={styles.productContainer}>
      <Image
        source={displayImage.image}
        style={styles.productImage}
        resizeMode="contain"
      />

      <View style={styles.productInfo}>
        <View style={styles.productColorContainer}>
          {colors.map((color) => (
            <Pressable
              onPress={() => {
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
        <Spacer size={10} />
        <Text style={styles.productTitle}>{name}</Text>
        <Spacer size={5} />
        <Text style={styles.productPrice}>K{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    width: "100%",
    // flex: 1,
    // height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.black,
    marginBottom: -20,
    paddingTop: 100,
    zIndex: 1,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    // padding: 10,
  },
  productImage: {
    // alignSelf: "center",
    // width: 500,
    height: "100%",
    aspectRatio: 1,
    // marginTop: 10,
  },
  productInfo: {
    width: "100%",
    alignSelf: "center",
    padding: 20,
    backgroundColor: colors.light,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // position: "absolute",
    // bottom: 100,
    // borderRadius: 10,
    marginTop: -40,
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
  productTitle: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
  productPrice: {
    fontSize: 28,
    color: colors.grey,
  },

  productColor: {
    fontSize: 16,
  },
  productColorContainer: {
    width: 100,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productColorDot: {
    width: 15,
    height: 15,
    // marginHorizontal: 1/,
    borderRadius: 10,
  },
  productColorDotActive: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
