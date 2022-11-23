import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="keywords" content="javascript, reactjs, css, nextjs, huntingcoders, hunting coder blog,"/>
        <link rel="icon" href="/nextjs-icon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hunting Coder</h1>
        <p className={styles.description}>
          <code className={styles.code}>A blog for hunting coders by hunting coder.</code>
        </p>
        <div className={styles.ImgContainer}>
          <Image src="/blog.jpg" width="600" height="200" alt="blogImage" id={styles.Img}></Image>
        </div>
        <div className={styles.blogsWrapper}>
          <h2>Latest Blogs</h2>
         <Link href={"/blog"}>
            <div className={styles.blogItem}>
              <h3>How to learn Javascript 2022?</h3>
              <p>
              To learn Javascript, you have to open this link for full details descriptions.
              learn Javascript, you have to open this link for full details description
              </p>
            </div>
          </Link>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript 2022?</h3>
            <p>To learn Javascript, you have to open this link for full details descriptions</p>
          </div>
          <div className={styles.blogItem}>
            <h3>How to learn Javascript 2022?</h3>
            <p>To learn Javascript, you have to open this link for full details descriptions</p>
          </div>
        </div>
      </main>
    </div>
  )
}
