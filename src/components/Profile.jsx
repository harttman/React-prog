import cats from "../assets/cats.jpeg";
import styles from "../styles/profile.module.css";

function Profile() {
  return (
    <div className={styles.profile}>
      <img src={cats} />
      <p>Desc</p>
    </div>
  )
}

export default Profile;