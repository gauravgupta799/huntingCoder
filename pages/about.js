import styles from "../styles/About.module.css";
import { toast } from 'react-toastify';

const About = () => {
  const notify = () => toast.error('🦄 Success', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutInnerContainer}>
        <h2>About Us</h2>
        <button onClick={notify}>Notify!</button>
      </div>    
    </div>
  )
}

export default About