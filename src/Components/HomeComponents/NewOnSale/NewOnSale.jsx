import { View, Text,ScrollView,Image } from 'react-native'
import React,{useState} from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles'
import SaleFilter from './SaleFilter';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import ProductList from '../../../DataLists/ProductDataList/ProductList';
export default function NewOnSale() {

    const { Tcolor, primary, secondary, background, theme, logo, toggleTheme ,DarkLogo} =
    useTheme();
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
    const [visibleProducts, setVisibleProducts] = useState(10); // Initially showing 10 products
  
 
  
    const handleViewMore = () => {
      setVisibleProducts((prev) => prev + 10); // Show 10 more products when "View More" is clicked
    };
  return (
    <View style={styles.container}>
      <Text style={styles.head}>NEW ON SALE</Text>
      <SaleFilter/>

<ProductDisplay handleViewMore={handleViewMore}  visibleProducts={visibleProducts} ProductList={ProductList}/>
      <View style={{height:400}}>

      </View>
    </View>
  )
}