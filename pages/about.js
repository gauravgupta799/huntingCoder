import Heads from "../Components/HeadS";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Heads/>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutInnerContainer}>
          <h1>Hunting Coder</h1>
          <p>Lorem Hunting Coder Latest blogs gest lksfp wer blogss sdh
          sffsdfds sdfd debugger Generatedf draggableg draggableg
          </p>
        </div> 
        <div className={styles.bottomWrapper}>
          <div className={styles.introContainer}>
            <h1>Introduction</h1>
            <p>
            Lorem Hunting Coder Latest blogs gest lksfp wer blogss sdh
            sffsdfds sdfd debugger Generatedf draggableg draggableg.
            Lorem Hunting Coder Latest blogs gest lksfp wer blogss sdh
            sffsdfds sdfd debugger Generatedf draggableg draggableg.
            Lorem Hunting Coder Latest blogs gest lksfp wer blogss sdh
            sffsdfds sdfd debugger Generatedf draggableg draggableg
            </p>
          </div>
          <div className={styles.servicesWrapper}>
            <h1>Our Services</h1>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
                <div className={styles.card}>
                </div>
            </div>
          </div>
          <div className={styles.servicesWrapper}>
            <h1>Our Customers</h1>
            <div className={styles.cardContainer}>
                <div className={styles.ctmrCard}>
                </div>
                <div className={styles.ctmrCard}>
                </div>
                <div className={styles.ctmrCard}>
                </div>
                <div className={styles.ctmrCard}>
                </div>
            </div>
          </div>
        </div>   
      </div>
    </>
  )
}
export default About