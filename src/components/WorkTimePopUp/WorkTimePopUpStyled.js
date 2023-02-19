import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
export const PopoverAnchor = styled(Box)(() => ({
  cursor: 'pointer',
  '&:hover': {
    color: '#F59256',
  },
}));

export const PopoverContainer = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gridRowGap: '4px',
  justifyItems: 'center',
  gridColumnGap: '15px',
  fontSize: '12px',
  lineHeight: '1.33',
  padding: '12px',
  height: '100%',
}));
