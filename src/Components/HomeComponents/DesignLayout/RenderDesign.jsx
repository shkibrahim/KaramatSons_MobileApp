import { View, Text, Image } from 'react-native';
import React from 'react';
import { useTheme } from '../../../../Theme';
import createStyles from './styles';

export default function RenderDesign({ item, isLeft }) {
  const { Tcolor, primary, secondary, background, theme, logo, toggleTheme } = useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
  });

  if (item.empty) {
    return <View style={[styles.item, styles.invisible]} />;
  }

  return (
    <View
      style={[
        styles.item,
        isLeft ? styles.leftItem : styles.rightItem, // Conditional styles for left and right
      ]}
    >
      <Image source={{ uri: item.Image }} style={[isLeft? styles.leftImage: styles.rightImage]} />
      <Text style={styles.title}>{item.Title}</Text>
      <Text style={styles.price}>${item.Price}</Text>
    </View>
  );
}
