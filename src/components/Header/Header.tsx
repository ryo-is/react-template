import { Link, useLocation } from 'react-router-dom';
import * as styles from './Header.css';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>React Template</div>
      <nav className={styles.nav}>
        <Link 
          to="/" 
          className={`${styles.navLink} ${isActive('/') ? styles.activeNavLink : ''}`}
        >
          トップ
        </Link>
        <Link 
          to="/about" 
          className={`${styles.navLink} ${isActive('/about') ? styles.activeNavLink : ''}`}
        >
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
