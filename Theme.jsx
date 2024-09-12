import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const Themer = ({ children }) => {
  const [primary, setPrimary] = useState('#FC1055');
  const [secondary, setSecondary] = useState('#4b94c4');
  const [background, setBackground] = useState('black');
  const [Tcolor,setTcolor] = useState('white')
  const [theme, setTheme] = useState('dark');
  const [logo, setLogo] = useState();
  const darkLogo = './src/assets/images/logo-blackclr.png';

  useEffect(() => {
    if (theme === 'light') {
      setPrimary('#1f84ce');
      setSecondary('#FC1055');
      setBackground('#fff');
      setTcolor('black')
      setLogo(require('./src/assets/images/logowhiteclr.png')); // Set to light logo if you have one
    } else if (theme === 'dark') {
      setPrimary('#1f84ce');
      setSecondary('#FC1055');
      setBackground('black');
      setTcolor('#fff')
      setLogo(require('./src/assets/images/logo-blackclr.png'));
    }
  }, [theme]);

  const toggleTheme = async () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ Tcolor,primary, secondary, background, theme, logo, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
