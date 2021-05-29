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
    return (
        <div className={styles.nav_menu}>
            <div className={styles.nav_menu_icon}>
                    <img src="./Assets/Menu.svg" alt="" />
            </div>
        </div>
    )
}


const Logo = () => {
    return (
        <div className={styles.nav_logo}>
        <div className={styles.nav_logo_icon}>
            <img src="./Assets/Logo-adazolhub.svg" alt="adazolhub main logo" />
        </div>
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
    </div>
    )
}
