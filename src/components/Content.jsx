import logo from "../assets/logo.jpeg";
import styles from "../styles/content.module.css";

function Content() {
  return (
    <div className={styles.app_content}>
      <img src={logo} />
    </div>
  )
}

export default Content;