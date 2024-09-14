import { View, Text ,Image,FlatList,TouchableOpacity} from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles';
import RenderDesign from './RenderDesign';
export default function DesignLayout({ListData}) {
    const { Tcolor, primary, secondary, background, theme, logo, toggleTheme } =
    useTheme();
  const styles = createStyles({
    Tcolor,
    primary,
    secondary,
    background,
    theme,
    logo,
    toggleTheme,
  });
    // Helper function to chunk the data into rows of 2 items
    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);
        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
          data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
          numberOfElementsLastRow++;
        }
        return data;
      };
  return (
    <FlatList
    data={ListData} // 2 items per row
    renderItem={({ item, index }) => (
     
     
        <RenderDesign item={item} isLeft={index % 2 === 0} />

    )}
    keyExtractor={(item, index) => index.toString()}
    numColumns={2}
  />
  )
}