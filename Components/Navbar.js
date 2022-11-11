import styles from '../styles/Navbar.module.css'
import Link from "next/link";

const Navbar = () => {
  return (
    <>
        <nav className = {styles.navbarWrapper}>
            <ul>
              <li> <Link href="/" className={styles.link}>Home</Link></li>
              <li> <Link href="/about" className={styles.link}>About</Link></li>
              <li> <Link href="/blog" className={styles.link}>Blog</Link></li>
              <li> <Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
        </nav>

    </>
  )
}

export default Navbar