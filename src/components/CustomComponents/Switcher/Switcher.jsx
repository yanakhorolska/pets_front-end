import { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import {
  SwitcherLabel,
  SwitcherWrapper,
  Switcher,
  SwitcherText,
} from './SwitcherStyled';
export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const getInitialState = () => {
    if (currentLang === 'en') {
      return false;
    } else return true;
  };
  const initialState = getInitialState();
  const [isChecked, setIsChecked] = useState(initialState);

  useEffect(() => {
    if (!isChecked) {
      (() => i18n.changeLanguage('en'))();
    }
    if (isChecked) {
      (() => i18n.changeLanguage('ua'))();
    }
  }, [i18n, isChecked]);

  const toggleLang = () => {
    setIsChecked(prevState => !prevState);
  };

  return (
    <SwitcherWrapper>
      <SwitcherText>EN</SwitcherText>
      <Switcher
        id="checkbox"
        type="checkbox"
        defaultChecked={isChecked}
        onChange={toggleLang}
      />
      <SwitcherLabel htmlFor="checkbox" />
      <SwitcherText>UA</SwitcherText>
    </SwitcherWrapper>
  );
};
