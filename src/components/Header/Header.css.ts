import { style } from '@vanilla-extract/css';
import { theme } from '../../styles/global.css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: `${theme.space.medium} ${theme.space.large}`,
  backgroundColor: 'white',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

export const logo = style({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: theme.colors.primary,
});

export const nav = style({
  display: 'flex',
  gap: theme.space.medium,
});

export const navLink = style({
  color: theme.colors.text,
  padding: theme.space.small,
  borderRadius: '4px',
  transition: 'background-color 0.2s',
  ':hover': {
    backgroundColor: theme.colors.background,
    textDecoration: 'none',
  },
});

export const activeNavLink = style({
  fontWeight: 'bold',
  color: theme.colors.primary,
});
