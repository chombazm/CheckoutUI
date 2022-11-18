import React, { StyleHTMLAttributes } from 'react';

import { View, Text, StyleSheet } from 'react-native';

type SectionDividerProps = {
  message: string;
  style?: StyleHTMLAttributes<Text>;
};



export const SectionDivider = ({ message,...props }: SectionDividerProps) => {
  const { style } = props;
  return (
    <View style={styles.sectionDivider}>
      <View style={styles.sectionDividerLine} />
      <Text style={[styles.sectionDividerText, style]}>
        {message || 'Or continue with'}
      </Text>
      <View style={styles.sectionDividerLine} />
    </View>
  );
};


export const Spacer = ({ size }: { size: number }) => {
  return <View style={{ height: size }} />;
};

const styles = StyleSheet.create({
  sectionDivider: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  sectionDividerText: {
    paddingHorizontal: 10,
    fontSize: 16,
  },
  sectionDividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
    alignSelf: 'center',
  },
});