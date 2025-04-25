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

export const section = style({
	marginBottom: theme.space.large,
});

export const sectionTitle = style({
	fontSize: '1.5rem',
	fontWeight: 'bold',
	marginBottom: theme.space.medium,
	color: theme.colors.secondary,
});

export const content = style({
	fontSize: '1.1rem',
	lineHeight: 1.6,
});

export const list = style({
	listStyleType: 'disc',
	paddingLeft: theme.space.large,
	marginBottom: theme.space.medium,
});

export const listItem = style({
	marginBottom: theme.space.small,
});
