import { View, Text ,TouchableOpacity,Image, TextInput,Animated,FlatList} from 'react-native'
import React,{useState,useRef,useEffect} from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialIcons } from '@expo/vector-icons'
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler'
import * as ImagePicker from "expo-image-picker";
import { scale } from 'react-native-size-matters'
import { use } from 'react'

const AddProduct = ({navigation}) => {
    const [images, setImages] = useState([]);
    const [tags, setTags] = useState([]); // Array to store tags
    const [text, setText] = useState(""); // Current text input
    const maxTags = 5; // Maximum number of tags allowed
    const[Videolink,setVideolink]=useState('')
    const[PorductName,setProductName]=useState('')
const [Price,setPrice]=useState('')
const [Discount,setDiscount]=useState('')
const [Stock,setStock]=useState('')
const [ProductDescription,setProductDescription]=useState('')
const [Instructions,setInstructions]=useState('')
const [Material,setMaterial]=useState('')
const [PAD,setPAD]=useState(0)
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

      const pickImage = async () => {
        // Open image picker
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 0.7,
        });
      
        if (!result.canceled && result.assets && result.assets.length > 0) {
          setImages((prevImages) => [...prevImages, result.assets[0].uri]); // Add selected image to the array
        }
      };
      
  
      const addTag = () => {
        if (text.trim() && !tags.includes(text.trim()) && tags.length < maxTags) {
          setTags((prevTags) => [...prevTags, text.trim()]); // Add unique, non-empty tag
          setText(""); // Clear the input
        }
      };
    
      const removeTag = (index) => {
        setTags((prevTags) => prevTags.filter((_, i) => i !== index)); // Remove tag by index
      };

      const [isOpen, setIsOpen] = useState(false); // Dropdown open/close state
      const [selectedType, setSelectedType] = useState(""); // Selected product type
      const animation = useRef(new Animated.Value(0)).current; // Animated value for height
    
      const productTypes = ["Shawl", "Abaya", "Stoller", "Duppata"];
    
      const toggleDropdown = () => {
        if (isOpen) {
          Animated.timing(animation, {
            toValue: 0,
            duration: 300, // Slow animation duration
            useNativeDriver: false,
          }).start(() => setIsOpen(false));
        } else {
          setIsOpen(true);
          Animated.timing(animation, {
            toValue: productTypes.length * 40, // Height based on number of items
            duration: 300, // Slow animation duration
            useNativeDriver: false,
          }).start();
        }
      };
    
      const selectType = (type) => {
        setSelectedType(type); // Set the selected type
        toggleDropdown(); // Close the dropdown
      };

      useEffect(() => {
        // Calculate price after discount
        const price = parseFloat(Price);
        const discount = parseFloat(Discount);
        const priceAfterDiscount = price - (price * discount) / 100;
        setPAD(priceAfterDiscount.toFixed(2)); // Round to 2 decimal places
      }, [Price,Discount]); // Update only when these values change
    
  return (
    <SafeAreaView style={styles.container}>
<ScrollView showsVerticalScrollIndicator={false}>
    
<TouchableOpacity onPress={()=>navigation.goBack()}>

    <AntDesign name="arrowleft" size={24} color="black" />
</TouchableOpacity>
<Text style={styles.backtxt}>Add New Product</Text>

<View style={styles.section}>
<Text style={styles.headtxt}>Product Images</Text>
{/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
      {images.map((image, index) => (
        <View key={index} style={styles.imageBox}>
            <TouchableOpacity style={styles.removebtn} onPress={()=>setImages(images.filter((_, i) => i !== index))}>
            <MaterialIcons name="close" size={18} color="white" />
            </TouchableOpacity>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      ))}
      {/* Show the "add photo" box only if images are less than 7 */}
      {images.length < 7 && (
        <TouchableOpacity onPress={()=>pickImage()} style={styles.addBox}>
          <MaterialIcons name="add-a-photo" size={50} color="black" />
        </TouchableOpacity>
      )}
    </ScrollView>
<Text style={styles.headtxt}>Tags <Text style={{fontSize:scale(10)}}>(Max 5)</Text></Text>
<View style={styles.tagContainer}>

        {tags.map((tag, index) => (

          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
            <TouchableOpacity style={styles.remover} onPress={() => removeTag(index)}>
              <MaterialIcons name="close" size={12} color="red" />
            </TouchableOpacity>
          </View>

        ))}
      </View>

      {/* Hide TextInput if max tags reached */}
      {tags.length < maxTags && (
        <TextInput
          style={styles.input}
          placeholder="Enter a tag and press Enter"
          value={text}
          onChangeText={setText}
          onSubmitEditing={addTag} // Trigger when Enter/Done is pressed
          returnKeyType="done"
        />
      )}
<Text style={styles.headtxt}>Video Link (Optional)</Text>
<TextInput
          style={styles.input}
          placeholder="Enter a Video Link of Product"
            value={Videolink}
            onChangeText={setVideolink}
          // Trigger when Enter/Done is pressed
        />
<Text style={styles.headtxt}>Product Name</Text>
<TextInput
          style={styles.input}
          placeholder="Enter Product Name"
            value={PorductName}
            onChangeText={setProductName}
          // Trigger when Enter/Done is pressed
        />
<Text style={styles.headtxt}>Product Type</Text>


<View style={styles.container2}>
      <TouchableOpacity style={styles.dropdownHeader} onPress={toggleDropdown}>
        <Text style={styles.dropdownText}>
          {selectedType ? selectedType : "Select Type"}
        </Text>
        <MaterialIcons
          name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="black"
        />
      </TouchableOpacity>

      {/* Animated dropdown container */}
      {isOpen && (
        <Animated.View style={[styles.dropdown, { height: animation }]}>
          <FlatList
            data={productTypes}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => selectType(item)}
              >
                <Text style={styles.dropdownItemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      )}
    </View>
<Text style={styles.headtxt}>Price</Text>
<TextInput
          style={styles.input}
          placeholder="Enter Product Price"
            value={Price}
            keyboardType='numeric'
            onChangeText={setPrice}

          // Trigger when Enter/Done is pressed
        />
<Text style={styles.headtxt}>Discount</Text>
<TextInput
          style={styles.input}
            placeholder="Enter Product Discount in Percentage"
                value={Discount}
            keyboardType='numeric'
                onChangeText={setDiscount}
          // Trigger when Enter/Done is pressed
        />
        <Text style={styles.headtxt}>Price After Discount</Text>
<TextInput
          style={styles.input}
          value={PAD}
            editable={false}
            onChangeText={setPAD}
          placeholder="Enter Product Discount in Percentage"
          // Trigger when Enter/Done is pressed
        />
<Text style={styles.headtxt}>Stock</Text>
<TextInput
          style={styles.input}
          placeholder="Enter Product Stock"
            value={Stock}
            keyboardType='numeric'
            onChangeText={setStock}
          // Trigger when Enter/Done is pressed
        />
<Text style={styles.headtxt}>Product Description</Text>
<TextInput
          style={styles.input}
          placeholder="Enter Product Description"
            value={ProductDescription}
            multiline
        //   returnKeyType=""

            onChangeText={setProductDescription}
          // Trigger when Enter/Done is pressed
        />

        <TouchableOpacity style={styles.ins}>
            <Text style={styles.headtxt2}>Instructions and Materials</Text>

            <MaterialIcons name="add" size={24} color="black" />
        </TouchableOpacity>
</View>
    
</ScrollView>
    </SafeAreaView>
  )
}

export default AddProduct