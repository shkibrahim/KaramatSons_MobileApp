import { View, Text,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useTheme } from '../../../../Theme';
import createStyles from './styles';
export default function SaleFilter() {
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

  const [SummerShawls, setSummerShawls] = useState({
    items: "white",
    background: "#292526",
  });
  const [Men, setMen] = useState({
    items: "#292526",
    background: "#fff",
  });
  const [ShafoonDuppata, setShafoonDuppata] = useState({
    items: "#292526",
    background: "#fff",
  });
  const [HijabItems, setHijabItems] = useState({
    items: "#292526",
    background: "#fff",
  });
  const [LoanStoller, setLoanStoller] = useState({
    items: "#292526",
    background: "#fff",
  });
const Selector = (SelectedItem) =>{
    // setFilterListing(SelectedItem)
    if (SelectedItem == 'Summer Shawls'){
        setSummerShawls({
            items: "white",
    background: "#292526",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setLoanStoller({
            items: "#292526",
            background: "#fff",
        })
        setHijabItems({
            items: "#292526",
            background: "#fff",
        })
        setShafoonDuppata({
            items: "#292526",
            background: "#fff",
        })
    }

    if (SelectedItem == 'Men'){
        setSummerShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#fff",
            background: "#292526",
        })
        setHijabItems({
            items: "#292526",
            background: "#fff",
        })
        setLoanStoller({
            items: "#292526",
            background: "#fff",
        })
        setShafoonDuppata({
            items: "#292526",
            background: "#fff",
        })
    }

    if (SelectedItem == 'Loan Stollers'){
        setSummerShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setHijabItems({
            items: "#292526",
            background: "#fff",
        })
        setLoanStoller({
            items: "#fff",
            background: "#292526",
        })
        setShafoonDuppata({
            items: "#292526",
            background: "#fff",
        })
    }

    if (SelectedItem == 'Hijab Items'){
        setSummerShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setLoanStoller({
            items: "#292526",
            background: "#fff",
        })
        setShafoonDuppata({
            items: "#292526",
            background: "#fff",
        })
        setHijabItems({
            items: "#fff",
            background: "#292526",
        })
    }
    if (SelectedItem == 'Shafoon Duppata'){
        setSummerShawls({
            items: "#292526",
    background: "#fff",
        })
        setMen({
            items: "#292526",
            background: "#fff",
        })
        setShafoonDuppata({
            items: "#fff",
            background: "#292526",
        })
        setHijabItems({
            items: "#292526",
            background: "#fff",
        })
        setLoanStoller({
            items: "#292526",
            background: "#fff",
        })
    }
}
  return (
    <View style={styles.margin}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={()=>Selector('Summer Shawls')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: SummerShawls.background }}
        >
          <Text style={{ ...styles.btntxt, color: SummerShawls.items }}>
            Summer Shawls
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
        <TouchableOpacity onPress={()=>Selector('Loan Stollers')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: LoanStoller.background }}
        >
          {/* <SvgXml xml={StollerClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: LoanStoller.items }}>
           Loan Stollers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>Selector('Hijab Items')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: HijabItems.background }}
        >
          {/* <SvgXml xml={AbayaClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: HijabItems.items }}>Hijab items</Text>
        </TouchableOpacity>
        <TouchableOpacity
     onPress={()=>Selector('Shafoon Duppata')}
          activeOpacity={0.7}
          style={{ ...styles.btn, backgroundColor: ShafoonDuppata.background }}
        >
          {/* <SvgXml xml={DuppataClr.svg} width="25" height="25" /> */}
          <Text style={{ ...styles.btntxt, color: ShafoonDuppata.items }}>
            Shafoon Duppata
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}