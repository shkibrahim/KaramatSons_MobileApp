import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function RenderReviews({ item }) {
  const [MaxRating] = useState([1, 2, 3, 4, 5]); // Array of star indices
  const starImgFilled = <MaterialIcons name="star" size={24} color={"#00de81"} />;
  const starImgCorner = <MaterialIcons name="star-border" size={24} color={"#00de81"} />;

  const {
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    bar,
    toggleTheme,
    DarkLogo,
  } = useTheme();

  const navigation = useNavigation();

  const styles = createStyles({
    Tcolor,
    primary,
    bar,
    secondary,
    DarkLogo,
    background,
    theme,
    logo,
    toggleTheme,
  });

  return (
    <View style={styles.ratingbox}>
      <View style={styles.row}>
        <View style={styles.round}>
          <MaterialIcons name="person" size={22} color={"#fff"} />
        </View>
        <View style={styles.flexstart}>
          <Text style={styles.name}>{item.Name}</Text>
        </View>
      </View>

      {/* Render stars based on item.Rating */}
      <View style={styles.star}>
        {MaxRating.map((index) => (
          <TouchableOpacity
            activeOpacity={0.7}
            key={index}
            disabled={true} // Disable button interaction
          >
            {/* Compare current star index with item.Rating */}
            {index <= item.Rating ? starImgFilled : starImgCorner}
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.review}>{item.Review}</Text>
    </View>
  );
}
