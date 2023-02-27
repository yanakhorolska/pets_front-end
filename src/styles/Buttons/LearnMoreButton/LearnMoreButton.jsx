import { LearnMoreBtn } from './LearnMoreButton.styled';
import { useTranslation } from 'react-i18next';
export const LearnMoreButton = ({ onClick }) => {
  const { t } = useTranslation();
  return <LearnMoreBtn onClick={onClick}>{t('learnMore')}</LearnMoreBtn>;
};
