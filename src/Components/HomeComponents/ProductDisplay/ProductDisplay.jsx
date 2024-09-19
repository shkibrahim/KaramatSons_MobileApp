import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React from "react";
import RenderProducts from "./RenderProducts";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import { scale } from "react-native-size-matters";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
export default function ProductDisplay({
  navigation,
  ProductList,
  visibleProducts,
  handleViewMore,
  flatListRef 
}) {
  const {
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
    DarkLogo,
    bar,
  } = useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    bar,
    DarkLogo,
    background,
    theme,
    logo,
    toggleTheme,
  });


  return (
    <View style={styles.contain}>
      <FlatList
      ref={flatListRef }
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={ProductList.slice(0,visibleProducts).concat([{ id: "viewMore" }])} 
        renderItem={({ item, index, }) =>
          item.id === "viewMore" ? (
            <View style={styles.viewitembtn}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.gobtn}
                onPress={handleViewMore}
              >
                <Text style={styles.gotxt}>Go to Category</Text>
                <FontAwesome name="long-arrow-right" size={21} color="#fff" />
              </TouchableOpacity>
            </View>
          ) : (
            <RenderProducts
              item={item}
              navigation={navigation}
              visibleProducts={visibleProducts}
              index={index}
              length={ProductList.length}
            />
          )
        }
        ator={false}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        pagingEnabled={true} 
        keyExtractor={(item) => item.id.toString()} 
        onEndReached={handleViewMore}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}
