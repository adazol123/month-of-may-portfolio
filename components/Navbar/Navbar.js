import { useCallback, useEffect, useState } from 'react'
import styles from '../../styles/Navbar.module.css'



export const Navbar = (params) => {
    return (
        <div className={styles.nav_container}>
            <div className={styles.nav_wrapper}> 
                <div className={styles.navbar}>
                    <Logo />
                    <div className="nav_sidebar">
                        <Menu />
                    </div>
                </div>
            </div>
        </div>
    )
}

const DarkMode = () => {
    
}

const Menu = (props) => {
    const isBreakpoint = useMediaQuery(768)
    return (
        <div className={styles.nav_menu}>
            <div className={styles.nav_menu_icon}>
            <img height={isBreakpoint? '110px': '60px'} src="./Assets/button-back.svg" alt="" />
            </div>
            <div className={styles.nav_menu_icon_back}>
                <img height={isBreakpoint? '25px': '15px'} src="./Assets/button-front.svg" alt="" />
            </div>
        </div>
    )
}


const Logo = () => {


    const isBreakpoint = useMediaQuery(768)

    return (
        <div className={styles.nav_logo}>
        <div className={styles.nav_logo_icon}>
            <img height={isBreakpoint? '60px': '40px'} src="./Assets/Logo-adazolhub.svg" alt="adazolhub main logo" />
        </div>
        {isBreakpoint? 
        <div className={styles.nav_logo_name_wrapper}>  
            <div className={styles.nav_logo_name}>   
                <img className={styles.letter} src="./Assets/logo/A.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/D.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/A.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/Z.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/O.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/L.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/H.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/U.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/B.svg" alt="adazolhub main logo" />
                <img className={styles.letter} src="./Assets/logo/dot.svg" alt="adazolhub main logo" />
            </div>
        </div>
        : ""}
    </div>
    )
}



export const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(min-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };