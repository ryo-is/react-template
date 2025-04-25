import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const theme = createGlobalTheme(':root', {
	colors: {
		primary: '#007bff',
		secondary: '#6c757d',
		background: '#f8f9fa',
		text: '#212529',
	},
	space: {
		small: '8px',
		medium: '16px',
		large: '24px',
	},
	fonts: {
		body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
	},
});

globalStyle('body', {
	margin: 0,
	padding: 0,
	fontFamily: theme.fonts.body,
	backgroundColor: theme.colors.background,
	color: theme.colors.text,
});

globalStyle('a', {
	color: theme.colors.primary,
	textDecoration: 'none',
});

globalStyle('a:hover', {
	textDecoration: 'underline',
});

globalStyle('*, *::before, *::after', {
	boxSizing: 'border-box',
});
