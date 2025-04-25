import * as styles from './About.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>このアプリケーションについて</h2>
        <p className={styles.content}>
          このアプリケーションは、モダンなReactアプリケーション開発のためのテンプレートです。
          最新のツールと技術を使用して、効率的で保守性の高いコードを書くことができます。
        </p>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>使用技術</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>TypeScript 5 - 型安全なJavaScriptの開発</li>
          <li className={styles.listItem}>React - UIコンポーネントライブラリ</li>
          <li className={styles.listItem}>React Router 7 - クライアントサイドルーティング</li>
          <li className={styles.listItem}>Jotai 2 - 軽量な状態管理ライブラリ</li>
          <li className={styles.listItem}>Vite 5 - 高速な開発環境とビルドツール</li>
          <li className={styles.listItem}>Vitest - 高速なテストフレームワーク</li>
          <li className={styles.listItem}>Biome - リンターとフォーマッター</li>
          <li className={styles.listItem}>vanilla-extract/css - 型安全なCSSインJavaScript</li>
        </ul>
      </div>
      
      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>機能</h2>
        <p className={styles.content}>
          このテンプレートには以下の機能が含まれています：
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>TypeScriptによる型安全な開発環境</li>
          <li className={styles.listItem}>React Router によるページナビゲーション</li>
          <li className={styles.listItem}>vanilla-extract/cssによるスタイリング</li>
          <li className={styles.listItem}>Biomeによるコード品質の維持</li>
          <li className={styles.listItem}>Vitestによるテスト環境</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
