import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "../../../../Theme";
import createStyles from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { SvgXml } from "react-native-svg";
import shawlsvg from "../../../assets/svgs/Shawlsvg/Shawlsvg";
import shawlwhitesvg from "../../../assets/svgs/Shawlsvg/shawlwhite";
import Stollerblacksvg from "../../../assets/svgs/Stollersvg/Stollerblacksvg";
import Stollerwhitesvg from "../../../assets/svgs/Stollersvg/Stollerwhitesvg";
import Abayablacksvg from "../../../assets/svgs/Abayasvg/Abayablacksvg";
import Duppatawhitesvg from "../../../assets/svgs/Duppatasvg/Duppatawhitesvg";
import Duppatablacksvg from "../../../assets/svgs/Duppatasvg/Duppatablacksvg";
import Abayawhitesvg from "../../../assets/svgs/Abayasvg/Abayawhitesvg";
export default function FilterList({
    FilterListing,
    setFilterListing,
}) {
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
  const [AllItemsClr, setAllItemsClr] = useState({
    items: "white",
    background: "#292526",
  });
  const [ShawlsClr, setShawlsClr] = useState({
    items: "#292526",
    background: "#fff",
    svg: shawlsvg,
  });
  const [DuppataClr, setDuppataClr] = useState({
    items: "#292526",
    background: "#fff",
    svg: Duppatablacksvg,
  });
  const [AbayaClr, setAbayaClr] = useState({
    items: "#292526",
    background: "#fff",
    svg: Abayablacksvg,
  });
  const [StollerClr, setStollerClr] = useState({
    items: "#292526",
    background: "#fff",
    svg: Stollerblacksvg,
  });
const Selector = (SelectedItem) =>{
    setFilterListing(SelectedItem)
    if (SelectedItem == 'Allitems'){
        setAllItemsClr({
            items: "white",
    background: "#292526",
        })
        setShawlsClr({
            items: "#292526",
            background: "#fff",
            svg: shawlsvg,
        })
        setAbayaClr({
            items: "#292526",
            background: "#fff",
            svg: Abayablacksvg,
        })
        setStollerClr({
            items: "#292526",
            background: "#fff",
            svg: Stollerblacksvg,
        })
        setDuppataClr({
            items: "#292526",
            background: "#fff",
            svg: Duppatablacksvg,
        })
    }

    if (SelectedItem == 'Shawls'){
        setAllItemsClr({
            items: "#292526",
    background: "#fff",
        })
        setShawlsClr({
            items: "#fff",
            background: "#292526",
            svg: shawlwhitesvg,
        })
        setAbayaClr({
            items: "#292526",
            background: "#fff",
            svg: Abayablacksvg,
        })
        setStollerClr({
            items: "#292526",
            background: "#fff",
            svg: Stollerblacksvg,
        })
        setDuppataClr({
            items: "#292526",
            background: "#fff",
            svg: Duppatablacksvg,
        })
    }

    if (SelectedItem == 'Stollers'){
        setAllItemsClr({
            items: "#292526",
    background: "#fff",
        })
        setShawlsClr({
            items: "#292526",
            background: "#fff",
            svg: shawlsvg,
        })
        setAbayaClr({
            items: "#292526",
            background: "#fff",
            svg: Abayablacksvg,
        })
        setStollerClr({
            items: "#fff",
            background: "#292526",
            svg: Stollerwhitesvg,
        })
        setDuppataClr({
            items: "#292526",
            background: "#fff",
            svg: Duppatablacksvg,
        })
    }

    if (SelectedItem == 'Duppatas'){
        setAllItemsClr({
            items: "#292526",
    background: "#fff",
        })
        setShawlsClr({
            items: "#292526",
            background: "#fff",
            svg: shawlsvg,
        })
        setAbayaClr({
            items: "#292526",
            background: "#fff",
            svg: Abayablacksvg,
        })
        setStollerClr({
            items: "#292526",
            background: "#fff",
            svg: Stollerblacksvg,
        })
        setDuppataClr({
            items: "#fff",
            background: "#292526",
            svg: Duppatawhitesvg,
        })
    }
    if (SelectedItem == 'Abayas'){
        setAllItemsClr({
            items: "#292526",
    background: "#fff",
        })
        setShawlsClr({
            items: "#292526",
            background: "#fff",
            svg: shawlsvg,
        })
        setAbayaClr({
            items: "#fff",
            background: "#292526",
            svg: Abayawhitesvg,
        })
        setStollerClr({
            items: "#292526",
            background: "#fff",
            svg: Stollerblacksvg,
        })
        setDuppataClr({
            items: "#292526",
            background: "#fff",
            svg: Duppatablacksvg,
        })
    }
}
  return (
    <View style={styles.margin}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>Selector('Allitems')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: AllItemsClr.background }}
        >
          <Entypo name="grid" size={22} color={AllItemsClr.items} />
          <Text style={{ ...styles.btntxt, color: AllItemsClr.items }}>
            All Items
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Shawls')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: ShawlsClr.background }}
        >
          <SvgXml xml={ShawlsClr.svg} width="25" height="25" />
          <Text style={{ ...styles.btntxt, color: ShawlsClr.items }}>
            Shawls
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Stollers')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: StollerClr.background }}
        >
          <SvgXml xml={StollerClr.svg} width="25" height="25" />
          <Text style={{ ...styles.btntxt, color: StollerClr.items }}>
            Stoller
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Abayas')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: AbayaClr.background }}
        >
          <SvgXml xml={AbayaClr.svg} width="25" height="25" />
          <Text style={{ ...styles.btntxt, color: AbayaClr.items }}>Abaya</Text>
        </TouchableOpacity>
        <TouchableOpacity
     onPress={()=>Selector('Duppatas')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: DuppataClr.background }}
        >
          <SvgXml xml={DuppataClr.svg} width="25" height="25" />
          <Text style={{ ...styles.btntxt, color: DuppataClr.items }}>
            Duppata
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
