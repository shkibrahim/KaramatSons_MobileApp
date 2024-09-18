import { View, Text,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
export default function ArrivalFilter({
  Filtervalue,
  setFiltervalue
}) {
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

  const [WinterShawls, setWinterShawls] = useState({
    items: "white",
    background: "#292526",
  });
  const [Men, setMen] = useState({
    items: "#292526",
    background: "#fff",
  });
  const [VelvetShawls, setVelvetShawls] = useState({
    items: "#292526",
    background: "#fff",
  });
  const [AbayaShawl, setAbayaShawl] = useState({
    items: "#292526",
    background: "#fff",
  });
  const [SilkStoller, setSilkStoller] = useState({
    items: "#292526",
    background: "#fff",
  });
const Selector = (SelectedItem) =>{
    // setFilterListing(SelectedItem)
  setFiltervalue(SelectedItem)

    if (SelectedItem == 'Winter Shawl'){
      
        setWinterShawls({
            items: "white",
    background: "#292526",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setVelvetShawls({
            items: "#292526",
            background: "#fff",
        })
        setAbayaShawl({
            items: "#292526",
            background: "#fff",
        })
        setSilkStoller({
            items: "#292526",
            background: "#fff",
        })
    }

    if (SelectedItem == 'Men'){
        setWinterShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#fff",
            background: "#292526",
        })
        setAbayaShawl({
            items: "#292526",
            background: "#fff",
        })
        setSilkStoller({
            items: "#292526",
            background: "#fff",
        })
        setVelvetShawls({
            items: "#292526",
            background: "#fff",
        })
    }

    if (SelectedItem == 'Velvet Shawl'){
        setWinterShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setAbayaShawl({
            items: "#292526",
            background: "#fff",
        })
        setVelvetShawls({
            items: "#fff",
            background: "#292526",
        })
        setSilkStoller({
            items: "#292526",
            background: "#fff",
        })
    }

    if (SelectedItem == 'Abaya Shawl'){
        setWinterShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setSilkStoller({
            items: "#292526",
            background: "#fff",
        })
        setVelvetShawls({
            items: "#292526",
            background: "#fff",
        })
        setAbayaShawl({
            items: "#fff",
            background: "#292526",
        })
    }
    if (SelectedItem == 'Silk Stoller'){
        setWinterShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setSilkStoller({
            items: "#fff",
            background: "#292526",
        })
        setAbayaShawl({
            items: "#292526",
            background: "#fff",
        })
        setVelvetShawls({
            items: "#292526",
            background: "#fff",
        })
    }
}
  return (
    <View style={styles.margin}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>Selector('Winter Shawl')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: WinterShawls.background }}
        >
          <Text style={{ ...styles.btntxt, color: WinterShawls.items }}>
          Winter Shawls
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Men')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: Men.background }}
        >
          {/* <SvgXml xml={ShawlsClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: Men.items }}>
            Men
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Silk Stoller')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: SilkStoller.background }}
        >
          {/* <SvgXml xml={StollerClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: SilkStoller.items }}>
          Silk Stollers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Abaya Shawl')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: AbayaShawl.background }}
        >
          {/* <SvgXml xml={AbayaClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: AbayaShawl.items }}>Abaya Shawls</Text>
        </TouchableOpacity>
        <TouchableOpacity
     onPress={()=>Selector('Velvet Shawl')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: VelvetShawls.background }}
        >
          {/* <SvgXml xml={DuppataClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: VelvetShawls.items }}>
          Velvet Shawls
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}