import { useEffect, useState } from 'react';

const THEME_COLORS = {
  light: {
    mainColor: '#eaeaea',
    secondaryColor: '#fff',
    borderColor: '#c1c1c1',
    mainText: '#000',
    secondaryText: '#4b5156',
    themeDotBorder: '#24292e',
    previewBg: 'rgb(251, 249, 243, 0.8)',
    previewShadow: '#f0ead6',
    buttonColor: 'black'
  },
  blue: {
    mainColor: '#15202B',
    secondaryColor: '#192734',
    borderColor: '#164D56',
    mainText: '#fff',
    secondaryText: '#eeeeee',
    themeDotBorder: '#FFF',
    previewBg: 'rgb(25, 39, 52, 0.8)',
    previewShadow: '#111921',
    buttonColor: '#17a2b8'
  },
  green: {
    mainColor: '#606B56',
    secondaryColor: '#515a48',
    borderColor: '#161914',
    mainText: '#fff',
    secondaryText: '#eeeeee',
    themeDotBorder: '#FFF',
    previewBg: 'rgb(81, 90, 72, 0.8)',
    previewShadow: '#2a2f25',
    buttonColor: '#669966'
  },
  purple: {
    mainColor: '#46344E',
    secondaryColor: '#382a3f',
    borderColor: '#1d1520',
    mainText: '#fff',
    secondaryText: '#eeeeee',
    themeDotBorder: '#FFF',
    previewBg: 'rgb(29, 21, 32, 0.8)',
    previewShadow: '#2b2126',
    buttonColor: '#8534a3'
  }
};

/**
 * Custom hook for managing theme state and persistence
 * @returns {Object} { currentTheme, setTheme }
 */
const useTheme = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    const colors = THEME_COLORS[currentTheme];
    if (colors) {
      const root = document.documentElement;
      Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value);
      });
      localStorage.setItem('theme', currentTheme);
      console.log('✅ Theme applied:', currentTheme);
    }
  }, [currentTheme]);

  const setTheme = (theme) => {
    if (THEME_COLORS[theme]) {
      console.log('🎨 Theme selected:', theme);
      setCurrentTheme(theme);
    } else {
      console.error('Invalid theme:', theme);
    }
  };

  return { currentTheme, setTheme };
};

export default useTheme;

