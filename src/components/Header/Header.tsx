import Button from "../Button/Button";
import styles from "./Header.module.scss";

const Header = ({ onNavigate }: any) => {
    return (
        <header className={styles.header}>
            <div className={styles.company_name}>
                <span>Blah Blah</span>
            </div>

            <nav className={styles.nav}>
                <Button
                    text="Home"
                    onClick={() => onNavigate("Home")}
                />
                <Button
                    text="About"
                    onClick={() => onNavigate("About")}
                />
            </nav>
        </header>
    )
}

export default Header;