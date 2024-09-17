import { View, FlatList } from 'react-native';
import React from 'react';
import RenderProducts from './RenderProducts';
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
export default function ProductDisplay({
  ProductList,
  visibleProducts,
  handleViewMore
}) {
    const { Tcolor, primary, secondary, background, theme, logo, toggleTheme ,DarkLogo} =useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    DarkLogo,
    background,
    theme,
    logo,
    toggleTheme,
  });
  // Corrected renderItem to pass item object correctly
  const renderItem = ({ item }) => <RenderProducts item={item} />;

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        horizontal={true} // Horizontal scrolling
        data={ProductList.slice(0, visibleProducts)} // Slice data for visible products
        renderItem={renderItem} 
       // Display 2 columns
        pagingEnabled={true}// Corrected render function
        keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
        onEndReached={handleViewMore} // Handle "View More" when reaching end
        onEndReachedThreshold={0.5} // Trigger View More when 50% of the list is scrolled
      />
    </View>
  );
}
