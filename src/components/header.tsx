import Link from 'next/link';
import styles from '../styles/logo.module.css'
import { useEffect, useState } from 'react';

export default function Header() {

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Todo: Ipad mini borderline cases 768 looks like crap
    const mediaQuery = window.matchMedia('(min-width: 900px)');
    setIsDesktop(mediaQuery.matches);

    const handleResize = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <>
      {isDesktop ? (
      <Link href="/"><div className={styles.logoContainer}>
        <div className={styles.logo}>
        
          <div className={styles.line}>X-MEN</div>
        </div>
        <div className={`${styles.logoSub} ${styles.logoLine}`}>CARDS</div>
      </div>
      </Link>
      ) : (
        // Kind of a todo.  Mostly, should just be a hamburger menu with "home".  
        // Worth a separate component.
      <div className={styles.mobileLogoContainer}>
        <div className={styles.mobileLogo}>
        <h1><Link href="/">X-Men Cards</Link></h1>
        </div>
      </div>
      )}
    </>
  );
}