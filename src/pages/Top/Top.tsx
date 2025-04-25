import { Link } from 'react-router-dom';
import * as styles from './Top.css';

const Top = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>ようこそ</h1>
			<p className={styles.content}>
				このReactテンプレートへようこそ。このプロジェクトは、TypeScript、React、React
				Router、Jotai、Vite、Vitest、Biome、vanilla-extractを使用して構築されています。
			</p>
			<p className={styles.content}>
				このテンプレートは、モダンなReactアプリケーションの開発を始めるための基盤として使用できます。
			</p>
			<Link to="/about" className={styles.link}>
				詳細を見る
			</Link>
		</div>
	);
};

export default Top;
