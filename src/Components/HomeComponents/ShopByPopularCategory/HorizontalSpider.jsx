import { View, Text,Image} from 'react-native'
import React from 'react'
import { useTheme } from '../../../../Theme'
import createStyles from './styles'
export default function HorizontalSpider({List}) {
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
  return (
    <View style={styles.row}>
            <View style={styles.center}>
                <View style={styles.spiderleft}>
                    <Image source={List.Image1} style={styles.spiderimage} />
                </View>
<Text style={styles.spidertext}>{List.Title1}</Text>
{List.Badge1 == 'New' ?

<View style={styles.badge}>
    <Text style={styles.badgetext}>{List.Badge1}</Text>
    </View> :
    <Text style={styles.btxt}>Upto <Text style={styles.highlight}>{List.Badge1}</Text> OFF</Text>
    }

            </View>

            <View style={styles.center}>
                <View style={styles.spiderright}>
                <Image source={List.Image2} style={styles.spiderimage} />

                </View>
<Text style={styles.spidertext}>{List.Title2}</Text>
{List.Badge2 == 'New' ?

<View style={styles.badge}>
    <Text style={styles.badgetext}>{List.Badge2}</Text>
    </View> :
    <Text style={styles.btxt}>Upto <Text style={styles.highlight}>{List.Badge2}</Text> OFF</Text>
    }

    

            </View>

            </View>
  )
}