import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const Themer = ({ children }) => {
  const [primary, setPrimary] = useState('#FC1055');
  const [secondary, setSecondary] = useState('#4b94c4');
  const [background, setBackground] = useState('black');
  const [Tcolor,setTcolor] = useState('white')
  const [theme, setTheme] = useState('light');
  const [logo, setLogo] = useState();
  const [bar,setbar] = useState('#292526')
  // const darkLogo = './src/assets/images/logo-blackclr.png';
const [IconsColor,setIconsColor] = useState('white')
const [circle,setcircle] = useState('#343031')
const [LightLogo,setLightLogo] = useState(require('./src/assets/images/logowhitebg.png'))
const [DarkLogo,setDarkLogo] =useState(require('./src/assets/images/logoblackbg.png'))
  useEffect(() => {
    if (theme === 'light') {
      setbar('#292526')
      setcircle('#343031')
      setPrimary('#1f84ce');
      setSecondary('#FC1055');
      setBackground('#fff');
      setTcolor('#343031'),setIconsColor('white')
      setLogo(require('./src/assets/images/logowhitebg.png')); // Set to light logo if you have one
    } else if (theme === 'dark') {
      setbar('#343031')
      setcircle('#292526')

      setPrimary('#1f84ce');
      setSecondary('#FC1055');
      setBackground('black');
      setIconsColor('white')
      setTcolor('#fff')
      setLogo(require('./src/assets/images/logoblackbg.png'));
    }
  }, [theme]);

  const toggleTheme = async () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{DarkLogo, LightLogo, Tcolor,primary, secondary, background, theme, logo, toggleTheme,IconsColor ,bar,circle}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
