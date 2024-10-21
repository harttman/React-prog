import styles from "../styles/navbar.module.css";

function Nav() {
  return (
    <nav className={styles.app_nav}>
      <div>
        <a href="#">Profile</a>
      </div>
      <div>
        <a href="#">Messages</a>
      </div>
      <div>
        <a href="#">News</a>
      </div>
      <div>
        <a href="#">Music</a>
      </div>
    </nav>
  )
}

export default Nav;