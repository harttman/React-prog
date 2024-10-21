import logos from "../assets/logos.jpg";
import styles from "../styles/header.module.css";

function Header() {
  return (
    <header className={styles.app_header}>
      <img src={logos}/>
    </header>
  )
}

export default Header;