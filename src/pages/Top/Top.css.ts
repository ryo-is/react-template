import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/global.css';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: theme.space.large,
});

export const title = style({
  fontSize: '2.5rem',
  fontWeight: 'bold',
  marginBottom: theme.space.large,
  color: theme.colors.primary,
  textAlign: 'center',
});

export const content = style({
  fontSize: '1.2rem',
  lineHeight: 1.6,
  marginBottom: theme.space.large,
});

export const link = style({
  display: 'inline-block',
  padding: `${theme.space.small} ${theme.space.medium}`,
  backgroundColor: theme.colors.primary,
  color: 'white',
  borderRadius: '4px',
  fontWeight: 'bold',
  textAlign: 'center',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: '#0056b3',
    textDecoration: 'none',
  },
});
