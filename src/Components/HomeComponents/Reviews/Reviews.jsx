import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
import RenderReviews from './RenderReviews';

export default function Reviews({ item }) {
  const {
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
  } = useTheme();

  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
  });

  // State to control the number of visible reviews
  const [visibleReviews, setVisibleReviews] = useState(2);

  const handleShowMore = () => {
    setVisibleReviews((prev) => Math.min(prev + 2, item.Reviews.length)); // Show 2 more reviews or all
  };

  return (
    <View style={styles.reviewbox}>
      <Text style={styles.head}>Reviews</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={item.Reviews.slice(0, visibleReviews)} // Limit to visible reviews
        renderItem={({ item, index }) => <RenderReviews item={item} />}
        ItemSeparatorComponent={() => <View style={styles.gap} />}
        pagingEnabled={true}
        onEndReachedThreshold={0.5}
      />

      {/* Show More Button */}
      {visibleReviews < item.Reviews.length && (
        <TouchableOpacity
          style={styles.showMoreButton}
          onPress={handleShowMore}
        >
          <Text style={styles.showMoreText}>Show More</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
