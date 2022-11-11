import styles from '../styles/Home.module.css'

const Navbar = () => {
  return (
    <>
        <nav class = {styles.navbarWrapper}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
        </nav>

    </>
  )
}

export default Navbar